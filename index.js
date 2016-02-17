const nes = require('never-ending-stream')
const from = require('from2')
const heart = '💖 '

const heartStream = nes(() => {
  return from(function (size, next) {
    if (heart.length <= 0) return next(null, null)
    const chunk = heart.slice(0, size) || null
    next(null, chunk)
  })
})

module.exports = heartStream
