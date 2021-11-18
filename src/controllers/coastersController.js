const axios = require('axios');
const cheerio = require('cheerio');
const converter = require('json-2-csv');
const fs = require('fs');
const urlParser = require('url');


exports.getCoastersCSV = async(req, res) => {
  const url = req.query.url;
  const page = await axios.get(url);
  const $ = cheerio.load(page.data);
  const query = urlParser.parse(url, true).query;
  const existing = query.ex && query.ex === 'on' ? true: false;
  
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
  };

  try {
    const pagesData = await axios.all(urls.map(url => {
      return axios.get(url);
    }));
    let coasterData = [];
    for (const item of pagesData) {
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
      const filename = `results${Math.floor(Math.random() * 1000000)}.csv`;
      fs.writeFileSync(filename, csv);
      res.download(filename, 'results.csv', err => {
        if (err) {
          console.log(err);
          res.send('Something went wrong!');
        } else {
          // Delete the file as to not clog up disk space
          fs.unlink(filename);
        }
      });
    });
  } catch (e) {
    console.log(e);
    res.send('Oh no, something went wrong!')
  }
}