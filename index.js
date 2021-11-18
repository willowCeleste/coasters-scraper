// europe - defunct coasters https://rcdb.com/r.htm?df=on&ol=25852&ot=2
// Mexico - operating coasters https://rcdb.com/r.htm?ex=on&ol=2&ot=2
// South America - operating coasters https://rcdb.com/r.htm?ex=on&ol=26723&ot=2
// Mexico - defunct coasters https://rcdb.com/r.htm?df=on&ol=2&ot=2

const axios = require('axios');
const cheerio = require('cheerio');
const converter = require('json-2-csv');
const fs = require('fs');
const urlParser = require('url');

const args = process.argv.slice(2);
const searchUrl = args[0].trim();
const filename =  args[1].trim() || 'coasters';
let query;
let existing;

const getCoasterData = url => {
  query = urlParser.parse(url, true).query;
  existing = query.ex && query.ex === 'on' ? true: false;
  const promise = axios.get(url);
  const dataPromise = promise.then(res => {
    return res;
  })
  .catch(e => {
    console.log(e);
  })
  return dataPromise;
}

getCoasterData(searchUrl)
  .then(data => {
      const $ = cheerio.load(data.data);
      const topTable = $('.t-list.t-top');
      const tBodyTop = topTable.find('tbody');
      const splitPages = tBodyTop.find('tr:nth-child(2)').text().split(' ');
      const totalPages = splitPages[splitPages.length - 1].replace(')', '');
      const nums = [...Array(parseInt(totalPages)).keys()];

      const urls = [];
      for (const i of nums) {
        const status = existing ? 'ex' : 'df';
        const url = 'https://rcdb.com' + `/r.htm?page=${i + 1}&ot=${query.ot}&ol=${query.ol}&${status}`;
        urls.push(url);
      }
      axios.all(urls.map(url => {
        return axios.get(url);
      })).then(res => {
        let coasterData = [];
        for (const item of res) {
          const $ = cheerio.load(item.data);
          const dataTable = $('.stdtbl.rer table');
          const rows = dataTable.find('tbody tr');
          
          rows.each((i , el) => {
            const opened = $(el).find('td:nth-child(7)');
            let closed;
            if (!existing) {
              closed = $(el).find('td:nth-child(8)');
            }

            const getDateFromTd = td => {
              const dateTime = td.find('time').attr('datetime');
              let openedDate = '';

              if (td.find('time').length === 1) {
                if (td.text()) {
                  if (td.text() === 's') {
                    openedDate = `${dateTime}s`
                  } else {
                    openedDate = td.text() + dateTime;
                  }
                } else {
                  openedDate = dateTime;
                }
              } else if (td.find('time').length === 2) {
                let years = [];
                td.find('time').each((i, el) => {
                  years.push($(el).attr('datetime'));
                });
                openedDate = years.join(' - ');
              }
              return openedDate;
            };
            // const dateTime = opened.find('time').attr('datetime');
            // let openedDate = '';
        
            // if (opened.find('time').length === 1) {
            //   if (opened.text()) {
            //     if (opened.text() === 's') {
            //       openedDate = `${dateTime}s`
            //     } else {
            //       openedDate = opened.text() + dateTime;
            //     }
            //   } else {
            //     openedDate = dateTime;
            //   }
            // } else if (opened.find('time').length === 2) {
            //   let years = [];
            //   opened.find('time').each((i, el) => {
            //     years.push($(el).attr('datetime'));
            //   });
            //   openedDate = years.join(' - ');
            // }

            let obj = {
              coaster: $(el).find('td:nth-child(2) a').text(),
              park: $(el).find('td:nth-child(3) a').text(),
              opened: getDateFromTd(opened)
            }
            if (!existing) {
              obj.closed = getDateFromTd(closed);
            }
            coasterData.push(obj);
          });
        }
        converter.json2csv(coasterData, (err, csv) => {
          if (err) {
            throw err;
          }
          console.log(csv);
          fs.writeFileSync(`${filename}.csv`, csv);
        });
      });
    }
  )
