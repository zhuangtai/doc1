const sleep = require('../sleep');

const callback = async (page) => {
  const target = await page.$('#ni-overlay');
  console.log('wait target...')
  if (!target) {
    await sleep(10 * 1000);
    await callback(page);
  } else {
    await sleep(10 * 1000);
  }
}

module.exports = {
  datas: [
    "http://carenginehub.com/page/2/",
    "http://carenginehub.com/page/3/",
    "http://carenginehub.com/page/4/",
    "http://carenginehub.com/page/5/",
    "http://carenginehub.com/page/6/",
    "http://carenginehub.com/page/7/",
  ],
  selector: '',
  callback,
}
