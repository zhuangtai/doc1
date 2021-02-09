const axios = require('axios');

const config = {
  url: 'https://www.baidu.com/',
  method: 'get',
  proxy: {
    protocol: 'http',
    host: '183.232.231.133',
    port: 80,
  },
}



axios.request(config)
  .then(function ({ status, data }) {
    console.log(status);
  })
  .catch(function (error) {
    console.log('error', error);
  })






