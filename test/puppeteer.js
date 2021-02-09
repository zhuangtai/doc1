const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const options = {
  headless: false,
  ignoreHTTPSErrors: 'true',
  timeout: 6000,
  args: [
    // `--proxy-server=${proxyIP:proxyPORT}`,
    `--ignore-certificate-errors`,
  ]
};
const launch = async ({ url, selector }) => {
  console.log('start launch puppeteer ...', url)
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()
  const cookies = await page.cookies()

  for (let i = 0; i < cookies.length; i++) {
    await page.deleteCookies({ name: cookies[i] });
  }
  try {
    await page.goto(url, { timeout: 0 })
    console.log('load page down')
    if (selector) {
      await page.click(selector, {
        delay: 500
      })
    }
  } catch(error) {
    console.error(error);
  }
  await page.waitForTimeout(100000)
  await browser.close()
  console.log(url, 'done~')
}

launch({url: 'https://lusongsong.com/info/post/14216.html', selector: '#endad'})
