import inquirer from 'inquirer'
import commintlintConfirm from './commintlintConfirm.js'
import vueOrReactRawlist from './vueOrReactRawlist.js'
import {  Observable } from 'rxjs';
export default async () => {
    
      return  inquirer.prompt([
        {
            type: 'confirm',
            name: 'commitlint',
            message:'是否使用commitlint ?'
            
        },
        {
            type: 'list',
            name: 'base',
            message: '选择基础规范 ？',
            choices: [
                'airbnb',
                'o2team',
                'recommended'
            ]
        },
       {
           type: 'list',
           name: 'type',
           message: '选择 vue 或者 react ?',
           choices: [
               'vue2',
               'vue3',
               'react'
           ]
       }
    ])


    // const observe = Observable.create((obs) => {
    //     if (type === 'vue') {
    //         obs.next({
    //             type: 'rawlist',
    //             name: 'dependencies',
    //             message: '选择 vue 或者 react ?',
    //             choices: [
    //                 'vue',
    //                 'react'
    //             ]
    //         })
    //     } else if(type === 'react') {
            
    //     }
    //     obs.complete();
    // });

    // inquirer.prompt(observe).then((answers) => {
    //     console.log(JSON.stringify(answers, null, '  '));
    // });
    
}