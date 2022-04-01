import ejs from 'ejs'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import prettier from 'prettier'
export default (config) => {
    const __dirname = fileURLToPath(import.meta.url)
    const indexTemplate = fs.readFileSync(path.resolve(__dirname, '../template/eslintrc.ejs'))
    const code = ejs.render(indexTemplate.toString(), config)
    return  code
}