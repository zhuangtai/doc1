const sleep = require('../sleep');

const callback = async (page, time = 0) => {
  const target = await page.$('#ni-overlay');
  if (time > 50 * 1000) {
    console.log('timeout');
    return;
  }
  if (!target) {
    console.log('wait target...')
    await sleep(10 * 1000);
    time = time + 10 * 1000;
    await callback(page, time);
  } else {
    console.log('find target')
    await sleep(10 * 1000);
  }
}

module.exports = {
  datas: [
    "http://hawishub.com/page/2/",
  ],
  selector: '',
  callback,
}
