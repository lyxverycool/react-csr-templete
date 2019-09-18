module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    'browser': true,
    'node': true,
  },
  plugins: [
    'react',
    'jsx-a11y', // 交互相关
    'import'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack/webpack.common.conf.js',
      },
    }
  },
  rules: {
    'react/prop-types': 0, //无需验证props
    "react/destructuring-assignment": 0, //解构赋值
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "linebreak-style": [0, "error", "windows"],
    'semi': 0,
    "global-require": 0,
    'no-console': 'off',
    "spaced-comment": ["error", "always", {
      "line": {
        "markers": ["/"],
        "exceptions": ["-", "+"]
      },
      "block": {
        "markers": ["!"],
        "exceptions": ["*"]
      }
    }]
  },
};
