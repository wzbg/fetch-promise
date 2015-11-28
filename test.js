var fetchUrl = require('./index');

fetchUrl('https://www.npmjs.com/package/fetchUrl').then(
  result => {
    const { res, buf } = result;
    console.log(res, buf);
  },
  err => console.error(err)
);