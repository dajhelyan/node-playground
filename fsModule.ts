import fs from "fs"
// path module to work with files and directory paths
import path from "path"
// fsPromises modules
import fsPromises from "fs/promises"

// to write a file
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), "writing", (err) => {
//   if (err) throw err
//   console.log("write complete")
// })


// to read a file
// fs.readFile(path.join(__dirname, 'files', 'started.txt'), 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data)
// })

// to update a file or create a new file if it doesn't exist
// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), "writing an update", (err) => {
//   if (err) throw err;
//   console.log("append complete")
// })

// working with files asynchronously
const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'test.txt'), 'utf-8');
    console.log(data)
    // to remove a file
    // await fsPromises.unlink(path.join(__dirname, 'files', 'started.txt'))


    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nAdding some text');
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promisesComplete.txt'));
    // reding the new file
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promisesComplete.txt'), 'utf-8');
    console.log(newData)

  } catch (error) {
    console.log(error)
  }
}

fileOps();
// exit on uncaught errors
process.on('uncaughtException', err => {
  console.log(`Something is wrong: ${err}`)
  process.exit(1)
})