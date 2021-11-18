const $input = document.querySelector('[data-url-input]');
const $submit = document.querySelector('[data-url-submit]')
const $results = document.querySelector('[data-results]');
console.log($results);

$submit.addEventListener('click', function() {
  const url = $input.value.trim();
  console.log(url);

  if (url) {
    fetch('http://localhost:3000/coasters',{
      method: 'POST',
      body: JSON.stringify({ "url": "https://rcdb.com/r.htm?ex=on&ol=26723&ot=2"}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(function (res) {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(response);
    }).then(function (data) {
      // console.log(data.data);
      // $results.innerHTML = data.data;
    }).catch(function (err) {
      console.log('uhoh!', err);
    });
  }
})



// https://rcdb.com/r.htm?ex=on&ol=26723&ot=2