const launch = require('./puppeteer')
const hawishub = require('./config/hawishub')
const glamourshub = require('./config/glamourshub')
const forginghub = require('./config/forginghub')
const brittarub = require('./config/brittarub')
const os = require('os')
console.log('cpus number', os.cpus().length);

const fire = async ({datas, selector}) => {
  for (let i = 0; i < datas.length; i++) {
    console.log('start url', datas[i])
    await launch({ url: datas[i], selector })
  }
}

const go = async () => {
  await fire(hawishub)
  await fire(brittarub)
  await fire(glamourshub)
  await fire(forginghub)
}

go()
