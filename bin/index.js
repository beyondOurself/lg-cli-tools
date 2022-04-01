#!/usr/bin/env node
import { execa } from 'execa';
import chalk from 'chalk'
import fs from 'fs'
import nameQuestion from  './questions/nameQuestion.js'
import createPackageTemplate from './createPackageTemplate.js'
import { copyDir } from './utils/index.js'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(import.meta.url)

// 检查是否有 package.json 文件。 无 则是空目录,需要输入项目名称

const existPackage = await fs.existsSync('./package.json')

let destPackage = null 
let sourcePackage = null 
let projectName = ''

// 问答

// 没有项目需要项目名称

!existPackage && ({ name: projectName } = await nameQuestion())

// 生成 eslintrc 文件
const packagejson = createPackageTemplate({ projectName})


if (existPackage) {
    // 读取原项目的package.json 
    const readPackageFile = await fs.readFileSync('./package.json', {}, () => { })
    const packstring = readPackageFile.toString()
    sourcePackage = JSON.parse(readPackageFile.toString())
    const packagejsonParser = JSON.parse(packagejson)
    sourcePackage.devDependencies = { ...sourcePackage.devDependencies, ...packagejsonParser.devDependencies }
    sourcePackage.scripts['docs:dev'] = "vuepress dev docs"
    sourcePackage.scripts['docs:build'] = "vuepress build docs"
    destPackage = JSON.stringify(sourcePackage)
} else {
    destPackage = packagejson
}


fs.writeFileSync('./package.json', destPackage )


copyDir(path.resolve(__dirname, "../project"), "./" , (err) => {
    if (!err) {
     }
})

// 安装依赖
await execa("npm install", {
    cwd: './',
    stdio: [2, 2, 2]
})

// 启动文档

await execa("npx vuepress dev docs", {
    cwd: './',
    stdio: [2, 2, 2]
})


//  TODO