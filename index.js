const launch = require('./puppeteer')
const hawishub = require('./config/hawishub')
const glamourshub = require('./config/glamourshub')
const forginghub = require('./config/forginghub')
const mishequn = require('./config/mishequn')
const carenginehub = require('./config/carenginehub')
const test = require('./config/test')
const os = require('os')


console.log('cpus number', os.cpus().length);

const fire = async ({datas, selector, callback}) => {
  for (let i = 0; i < datas.length; i++) {
    console.log('start url', datas[i])
    await launch({ url: datas[i], selector, callback })
  }
}

const go = async () => {
  await fire(hawishub)
  await fire(mishequn)
  await fire(glamourshub)
  await fire(forginghub)
  await fire(carenginehub)
  // await fire(test)
}

go()
