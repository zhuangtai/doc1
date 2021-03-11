const launch = require('./puppeteer')
const hawishub = require('./config/hawishub')
const glamourshub = require('./config/glamourshub')
const forginghub = require('./config/forginghub')
const brittarub = require('./config/brittarub')
const carenginehub = require('./config/carenginehub')
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
  // await fire(brittarub)
  await fire(glamourshub)
  await fire(forginghub)
  await fire(carenginehub)
}

go()
