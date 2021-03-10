const launch = require('./puppeteer')
const hawishub = require('./config/hawishub')
const glamourshub = require('./config/glamourshub')
const forginghub = require('./config/forginghub')
const carenginehub = require('./config/carenginehub')
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
  await fire(carenginehub)
  await fire(glamourshub)
  await fire(forginghub)
}

go()
