const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')

const config = {
  projectName: 'qian-trap',
  date: '2022-6-11',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    '@tarojs/plugin-html',
    '@tarojs/plugin-vue-devtools'
  ],
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'vue3',
  sass: {
    data: '@import "@nutui/nutui-taro/dist/styles/variables.scss";'
  },
  mini: {
    webpackChain (chain) {
      chain.plugin('AutoImport').use(AutoImport, {
        imports: 'vue',
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: 'readonly'
        }
      }).init((Plugin, args) => Plugin(args))
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['nutui-taro']
    // postcss: {
    //   autoprefixer: {
    //     enable: true,
    //     config: {},
    //   },
    //   cssModules: {
    //     enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
    //     config: {
    //       namingPattern: 'module', // 转换模式，取值为 global/module
    //       generateScopedName: '[name]__[local]___[hash:base64:5]',
    //     },
    //   },
    // },
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
