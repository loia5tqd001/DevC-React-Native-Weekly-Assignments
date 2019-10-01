/**
|--------------------------------------------------
| To test the correctness:
|   1. Generate random arrays with the size varies from 10 to 100
|   2. Calculate with oldBruteForce algorithm and compare it to newOptimized
|
| To benchmark performance:
|   1. Generate a random array with the size of 9999
|   2. Run newOptimized function only, code runned using extension "Code Runner" on VsCode to get log results and time excution
|--------------------------------------------------
*/

testCorrectness()
benchMark(newOptimized, 1000000)

function testCorrectness () {
  for (let size = 10; size <= 100; size++) {
    const array = getRandomArray(size, 0, size)
    const threshold = Math.round(Math.random() * size)
  
    const expected = oldBruteForce(array, threshold)
    const result = newOptimized(array, threshold)
    
    const isResultExpected = result.sum < threshold && result.arr.length >= expected.arr.length
    if (!isResultExpected) {
      console.log('===: Test correctness failed :===')
      console.log('> : array', array)
      console.log('> : threshold', threshold)
      console.log('> : expected', expected)
      console.log('> : result', result)
      console.log('===: ======================= :===')
      break
    }
  }
  console.log('===: Test correctness ended  :===')
}

function benchMark (func, size = 9999) {
  const label = '---: benchMark ()'
  console.time(label)

  const array = getRandomArray(size, 0, size)
  const threshold = Math.round(Math.random() * size)
  const _letsRun_ = func(array, threshold)

  console.timeEnd(label)
}

function getRandomArray (size, min, max) {
  return [...Array(size)].map(() => ~~(min + Math.random() * (max- min)))
}

function oldBruteForce(array, highThreshold) {
  let result = {
    arr: [],
    sum: -Infinity
  }
  
  for (let i = 0, left = array.length - 1; i <= left; i++) {
    for (let j = i, right = array.length - 1; j <= right; j++) {
      const subArray = array.slice(i, j + 1)
      const sum = subArray.reduce((a, b) => a + b, 0)

      if (subArray.length > result.arr.length && sum < highThreshold) {
        result.arr = subArray
        result.sum = sum
      }
    }
  }

  return result
}

function newOptimized(array, highThreshold) {
  // using sliding - expanding window technique

  const window = {
    sum: 0, left: 0, right: 0,

    sastified() {
      return this.sum < highThreshold
    },
    
    notExceeded() {
      return this.right < array.length
    },

    expand() {
      this.right++
      this.sum += array[this.right]
    },

    slide() {
      this.left++, this.right++
      this.sum -= array[this.left]
      this.sum += array[this.right]
    }
  }

  const lastSastified = { 
    sum: -Infinity, left: -1, right: -1,

    backup() {
      this.sum = window.sum
      this.left = window.left
      this.right = window.right
    }
  }

  while (window.notExceeded()) {

    if (window.sastified()) {
      lastSastified.backup()
      window.expand()
    } 
    else {
      window.slide()
    }
  }

  return {
    arr: array.slice(lastSastified.left, lastSastified.right + 1),
    sum: lastSastified.sum
  }
}