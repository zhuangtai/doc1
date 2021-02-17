const launch = require('./puppeteer')
const carenginehub = require('./config/carenginehub')
const os = require('os')
console.log('cpus number', os.cpus().length);

const fire = async () => {
  const datas = carenginehub.data
  for (let i = 0; i < datas.length; i++) {
    console.log('start url', datas[i])
    await launch({ url: datas[i], selector: carenginehub.selector })
  }
}

fire()
