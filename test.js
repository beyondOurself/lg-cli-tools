import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { copyDir} from './bin/utils/index.js'
const __dirname = fileURLToPath(import.meta.url)

// console.log("__dirname", __dirname)
// console.log("path",path.resolve(__dirname,"../"))
// const errMsg =  await fs.copyFileSync(path.resolve(__dirname, "../bin/project/.prettierrc.js") )

// console.log(errMsg)

// fs.writeFile('.eslintrc.js', fs.readFileSync(path.resolve(__dirname, '../bin/project/.eslintrc.js')), (err) => {
    
//     console.log(err)
// } )



// fs.readdir('./bin/project', (err, files) => {
    
//     if (!err) {
//         console.log(files)
//     }

// })

