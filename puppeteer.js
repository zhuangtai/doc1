const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const sleep = require('./sleep');
const options = {
  headless: false,
  ignoreHTTPSErrors: 'true',
  timeout: 6000,
  args: [
    `--ignore-certificate-errors`,
  ]
};
const launch = async ({ url, selector, callback }) => {
  console.log('start launch puppeteer ...', url)
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()
  const cookies = await page.cookies()

  for (let i = 0; i < cookies.length; i++) {
    await page.deleteCookies({ name: cookies[i] });
  }
  try {
    await page.goto(url, { timeout: 0, waitUntil : 'networkidle2' }).catch(e => void 0);
    console.log('load page down')
    if (selector) {
      console.log('has selector')
      await page.click(selector, {
        delay: 500
      })
    }
  } catch(error) {
    console.error(error);
  }
  if (callback) {
    console.log('has callback');
    await callback(page);
  }
  await sleep(5000)
  await browser.close()
  console.log(url, 'done~')
}

module.exports = launch;
