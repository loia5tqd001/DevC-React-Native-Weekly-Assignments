const thresholdInp_ = document.querySelector('input#threshold')
const generateBtn_ = document.querySelector('button#generate')
const sizeInp_ = document.querySelector('input#array-size')
const displayArea_ = document.querySelector('div#display')

let dbArray = []

sizeInp_.addEventListener('input', onVerifyingArraySize)
generateBtn_.addEventListener('click', onGeneratingRandomArray)
thresholdInp_.addEventListener('input', onFindingSmallestSubArray)

function onVerifyingArraySize (e) {
  const min = Number(sizeInp_.min) // `min` here is a constant, should not be being created every time the event handler is triggered, for better performance it should be instead cached somewhere outside the function , but putting it here seems to be more readable, so who cares that tiny different performance?
  const max = Number(sizeInp_.max)
  if (sizeInp_.value < min) sizeInp_.value = min
  if (sizeInp_.value > max) sizeInp_.value = max
}

function onGeneratingRandomArray (e) {
  function getRandomArray (size, min, max) {
    return [...Array(size)].map(() => ~~(min + Math.random() * (max- min)))
  }

  const size = Number(sizeInp_.value)
  dbArray = getRandomArray(size, 0, size)
  onFindingSmallestSubArray()
}

function onFindingSmallestSubArray (e) {
  function getLongestSubArrayHasSumLessThan(array, highThreshold) {
    const slidingWindow = {
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
        this.sum = slidingWindow.sum
        this.left = slidingWindow.left
        this.right = slidingWindow.right
      }
    }
  
    while (slidingWindow.notExceeded()) {
  
      if (slidingWindow.sastified()) {
        lastSastified.backup()
        slidingWindow.expand()
      } 
      else {
        slidingWindow.slide()
      }
    }
  
    return {
      arr: array.slice(lastSastified.left, lastSastified.right + 1),
      sum: lastSastified.sum
    }
  }
  
  const threshold = thresholdInp_.value ? Number(thresholdInp_.value) : -Infinity
  const result = getLongestSubArrayHasSumLessThan(dbArray, threshold)
  const resultStr = result.arr.join(' ')
  displayArea_.innerHTML = dbArray.join(' ') .replace(resultStr, `<span title="sum = ${result.sum}">${resultStr}</span>`)
}

;(function main() {
  onGeneratingRandomArray()
})()

