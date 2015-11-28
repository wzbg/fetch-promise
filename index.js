const fetchUrl = require('fetch').fetchUrl;

module.exports = function (url, options) {
  return new Promise((resolve, reject) => {
    fetchUrl(url, options, (err, res, buf) => {
      if (err) reject(err);
      else resolve({ res, buf });
    });
  });
};