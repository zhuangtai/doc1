const launch = require('./puppeteer')
const carenginehub = require('./config/carenginehub')
const hawishub = require('./config/hawishub')
const os = require('os')
console.log('cpus number', os.cpus().length);

const fire = async ({datas, selector}) => {
  for (let i = 0; i < datas.length; i++) {
    console.log('start url', datas[i])
    await launch({ url: datas[i], selector })
  }
}

const go = async () => {
  await fire(carenginehub)
  await fire(hawishub)
}

go()
