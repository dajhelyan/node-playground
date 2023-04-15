import fs from 'fs'

// to create a directory
if(!fs.existsSync("./new")){
  fs.mkdir('./new', (err) => {
    if (err) throw err
    console.log("Directory created")
  })
}

// to remove a dir 
if(fs.existsSync('./new')){
  fs.rmdir('./new', (err) => {
    if (err) throw err
    console.log("Directory removed")
  })
}