import fs from 'fs'
import path from 'path'

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf-8'})

const ws = fs.createWriteStream('./files/new-lorem.txt')

// listener for data
// rs.on('data', (dataChunk) => {
//   ws.write(dataChunk)
// })

rs.pipe(ws)
