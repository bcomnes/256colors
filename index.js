var colors = require('ansi-256-colors')
var chalk = require('chalk')

function colorTest (argument) {
  // System colors
  console.log('System colors (color0 - color15):')
  for (var i = 0; i <= 7; i++) {
    process.stdout.write(i + ' ')
  }
  process.stdout.write('\n')
  for (var i = 0; i <= 7; i++) {
    process.stdout.write(colors.bg.standard[i] + '  ' + colors.reset)
  }
  process.stdout.write('\n')

  for (var i = 0; i <= 7; i++) {
    process.stdout.write(colors.bg.bright[i] + '  ' + colors.reset)
  }
  process.stdout.write('\n')
  for (var i = 0; i <= 7; i++) {
    process.stdout.write(i + 8 + (i + 8 >= 10 ? '' : ' '))
  }
  process.stdout.write('\n')

  // 250 Color cube generator
  console.log()
  var cube = []
  var index = []
  var range = 5

  // Generate the color cubes, and the g index.
  for (var g = 0; g <= range; g++) {
    cube.push(chalk.green(g))
    index.push(g)
    for (var r = 0; r <= range; r++) {
      for (var b = 0; b <= range; b++) {
        cube.push(colors.bg.getRgb(r, g, b) + '  ')
      }
      cube.push(colors.reset + ' ')
    }
    cube.push('\n')
  }

  // Generate the b index.
  var bindex = index.map(function (val, index) {
    return val + ' '
  })
  var bstring = [' ']
  for (var i = 0; i <= range; i++) {
    bstring = bstring.concat(bindex)
    bstring.push(' ')
  }

  // Put the b index in the string
  cube.unshift(chalk.blue(bstring.join('') + '\n'))
  // Generate the r index and put it in the string
  cube.unshift(' ' + chalk.red(index.join('            ')) + '\n')

  console.log(
    'Color cube rgb' +
    chalk.red('0') + chalk.green('0') + chalk.blue('0') +
    ' - ' +
    chalk.red('5') + chalk.green('5') + chalk.blue('5') +
    ' (color16 - color231):'
  )
  console.log(cube.join(''))

  // Grey scale ramp
  console.log('Gray ramp gray0 - gray23 (color232 - color255):')
  for (var i = 0; i <= 23; i++) {
    process.stdout.write(i + (i >= 10 ? '' : ' '))
  }
  process.stdout.write('\n')

  for (var i = 0; i <= 23; i++) {
    process.stdout.write(colors.bg.grayscale[i] + '  ' + colors.reset)
  }
  process.stdout.write('\n\n')

}

exports.colorTest = colorTest
