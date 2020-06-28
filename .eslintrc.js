module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    'browser': true,
    'node': true,
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y', // 交互相关
    'import'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack/webpack.config.js',
      },
    }
  },
  rules: { // 额外规则
    'linebreak-style': [0, 'error', 'windows'],
    "max-len": ["error", { code: 400 }],
    // js相关规则
    "camelcase": [0],
    'semi': ['error', 'never'], // 禁止使用末尾分号
    'comma-dangle': [0], // 尾随逗号
    'arrow-parens': ['error', 'as-needed'], // 箭头函数只在一个参数时省略小括号
    'consistent-return': [0], // 不检测return一致性
    'global-require': [0], // 不检测require置顶
    'no-param-reassign': ['error', {
      'props': false
    }], // 允许修改函数入参的属性值
    'no-plusplus': ['error', {
      'allowForLoopAfterthoughts': true
    }], // 允许在for循环的最后一个表达式使用++ --
    'no-undef': [1], // 允许使用未声明变量
    'eqeqeq': [0], // 允许使用==
    'object-curly-newline': [0], // 不检测解构多个分行
    'prefer-destructuring': [0], // 数组和对象解构
    'quote-props': [0], // 不检测键的引号
    'no-extra-boolean-cast': [0], // 允许使用!!
    'no-underscore-dangle': [0], // 暂时允许前下划线
    'no-use-before-define': [0], // 允许使用在定义之前使用fuction，因为export时可以调用
    'operator-linebreak': [0], // 不使用统一的换行方式，因为jsx里
    'radix': [0], // 允许parseInt不传第二个参数
    "no-nested-ternary": 0,//禁止使用嵌套的三目运算
    "no-tabs": "off", //Tab键
    "allowShortCircuit": true,
    'no-unused-expressions': 0, //短路求值和三目运算都允许
    // react相关规则
    'react/jsx-filename-extension': [0, {
      "extensions": [".js"]
    }], // 允许在js文件使用jsx语法
    'react/jsx-wrap-multilines': [0], // 不强制要求行数限制
    'react/prop-types': [0], // 不强制要求写propTypes
    'react/destructuring-assignment': [0], // 不强制要求解构
    'react/no-multi-comp': [0], // 允许在单个文件声明多个component
    'react/no-array-index-key': [0], //允许使用array index作为key
    'react/no-danger': [0], // 允许用 dangerouslySetInnerHTML
    'react/jsx-one-expression-per-line': [0], // 允许文字和变量同行

    // jsx-a11y相关规则
    'jsx-a11y/click-events-have-key-events': [0], // 不强制要求绑定click事件时绑定键盘事件
    'jsx-a11y/no-noninteractive-element-interactions': [0], // 不强制要求标签种类绑定事件
    'jsx-a11y/no-static-element-interactions': [0], // 可以在静态元素交互
    'jsx-a11y/anchor-is-valid': [0], // 可以使用无效的<a></a>
    'jsx-a11y/alt-text': [0], // 允许img不加alt
    'react/jsx-indent': [0], // 缩进

    // import相关规则
    'import/no-dynamic-require': [0], // 允许使用require变量

    // react hooks
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
};
