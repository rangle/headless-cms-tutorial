// This webpack is being used to load scss from our DS
module.exports = function (config) {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  })
  return config
}
