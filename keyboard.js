'use strict'
var keys = []
var debug = false

var keyCodes = {
  SPACE_BAR: 32,

  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40
}

function isKeyDown (keyCode) {
  if (typeof keyCode === 'number') return Boolean(keys[keyCode])
  if (typeof keyCode === 'string' && keyCode.length === 1) {
    var letter = keyCode.toUpperCase()
    return Boolean(keys[letter.charCodeAt(0)])
  }
  throw new TypeError(
    '`isKeyDown` expected keyCode (`number`) or character. Got ' + keyCode + '.'
  )
}

document.addEventListener('keydown', function (e) {
  keys[e.keyCode] = true
  if (debug) {
    var letter = String.fromCharCode(e.keyCode)
    console.log('-- keyIsDown ASCII(' + e.keyCode + ') CHAR(' + letter + ')')
  }
})

document.addEventListener('keyup', function (e) {
  keys[e.keyCode] = false
  if (debug) {
    var letter = String.fromCharCode(e.keyCode)
    console.log('-- keyIsUp ASCII(' + e.keyCode + ') CHAR(' + letter + ')')
  }
})
