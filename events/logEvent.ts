import {format} from 'date-fns'
import { uuid } from 'uuidv4'

import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'

async function logEvents(message: string){
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`

  console.log(logItem)

  try {
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, 'logs'))
    }
    // writing an log file
    await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem)
  } catch (err) {
    console.log(err)
  }
}  

module.exports = logEvents;

// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))

// console.log(uuid())