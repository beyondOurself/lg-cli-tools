export default () => {

    return {
        type: 'rawlist',
        name: 'type',
        message: '选择 vue 或者 react ?',
        choices: [
            'vue',
            'react'
        ]
    }
}