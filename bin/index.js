#!/usr/bin/env node
import { execa } from 'execa';
import chalk from 'chalk'
import fs from 'fs'
import questions from './questions/index.js';
import nameQuestion from  './questions/nameQuestion.js'
import createPackageTemplate from './createPackageTemplate.js'
import createEslintrcTemplate from './createEslintrcTemplate.js'
import createCommitmsgTemplate from './createCommitmsgTemplate.js'
import { copyDir } from './utils/index.js'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(import.meta.url)

// 检查是否有 package.json 文件。 无 则是空目录,需要输入项目名称

const existPackage = await fs.existsSync('./package.json')
const exitstGit = await fs.existsSync('./.git')

let destPackage = null 
let sourcePackage = null 
let projectName = ''

// 问答
const answers = await questions()

// 没有项目需要项目名称

!existPackage && ({ name: projectName } = await nameQuestion())



// 生成 eslintrc 文件

const eslintrc = createEslintrcTemplate(answers)
const packagejson = createPackageTemplate({ ...answers, projectName})
const commitmsg = createCommitmsgTemplate(answers)




fs.writeFileSync('./.eslintrc.js', eslintrc.toString())


if (existPackage) {
    // 读取原项目的package.json 
    const readPackageFile = await fs.readFileSync('./package.json', {}, () => { })
    const packstring = readPackageFile.toString()
    sourcePackage = JSON.parse(readPackageFile.toString())
    const packagejsonParser = JSON.parse(packagejson)
    sourcePackage.devDependencies = { ...sourcePackage.devDependencies, ...packagejsonParser.devDependencies }
    // sourcePackage.scripts.prepare = "husky install"
    destPackage = JSON.stringify(sourcePackage)
} else {
    destPackage = packagejson
}


fs.writeFileSync('./package.json', destPackage )


copyDir(path.resolve(__dirname, "../project"), "./" , (err) => {
    if (!err) {
     }
})

// 初始化 git 
if (!exitstGit) {
    await execa("git init", {
        cwd: './',
        stdio: [2, 2, 2]
    })
}
// 安装依赖
await execa("npm install", {
    cwd: './',
    stdio: [2, 2, 2]
})
await execa("npx husky install", {
    cwd: './',
    stdio: [2, 2, 2]
})
// add pre-commit
await execa('npx husky add .husky/pre-commit "npx lint-staged"', {
    cwd: './',
    stdio: [2, 2, 2]
})
// add commit-msg
await execa('npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"', {
    cwd: './',
    stdio: [2, 2, 2]
})



//  TODO