module.exports = {
    printWidth: 120, //一行的字符数，如果超过会进行换行，默认为80,最大行长规则通常设置为100或120
    tabWidth: 4, //一个tab代表几个空格数，默认为2 
    useTabs: false, // 用制表符来做缩进 默认 false 
    semi: false, // 是否打印分号 默认 true 
    singleQuote: true,// 是否使用单引号 默认 false
    quoteProps: 'as-needed', // 给对象属性加引号 默认 as-needed 可选 as-needed|consistent|preserve
    jsxSingleQuote: true, // jsx 是否使用单引号 默认 false
    trailingComma: 'es5', // 末尾是否带逗号  默认 es5 可选 es5|none|all
    bracketSpacing: true, // 在字面量对象括号之间加空格 { foo: bar } 默认true
    bracketSameLine: false,// html 闭合标签符 > 单独 一行 默认 false
    arrowParens: 'always', // 在 单个参数 的箭头函数 中 使用小括号包裹参数。(x) => x 默认 always 可选always|avoid
    rangeStart: 0, // 文件开头 空白字符  int 
    rangeEnd: Infinity, // 文件结尾 空白字符  int 
    proseWrap: 'always', // 文本换行 默认 preserve  可选 always|never|preserve
    htmlWhitespaceSensitivity: 'css', // html 空格敏感度 默认 css 可选 css|strict|ignore
    vueIndentScriptAndStyle: false, // 是否缩进Vue文件中<script>和<style>标记内的代码 默认 false
    endOfLine: 'auto', // 行结束符  默认 lf  可选 lf|crlf|cr|auto
    embeddedLanguageFormatting: 'auto', // 是否格式化嵌入的代码 默认 auton 可选 auto | off
}
