import inquirer from 'inquirer'
export default async () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            default:'xxx',
            message: '项目名称？'
        }
    ])

}