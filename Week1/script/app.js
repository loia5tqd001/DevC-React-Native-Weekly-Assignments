const thresholdInp_ = document.querySelector("input#threshold")
const generateBtn_ = document.querySelector('button#generate')
const sizeInp_ = document.querySelector('input#array-size')
const displayArea_ = document.querySelector('div#display')

let dbArray = []

generateBtn_.addEventListener('click', onGeneratingRandomArray)
thresholdInp_.addEventListener("input", onFindingSmallestSubArray)

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

  const threshold = thresholdInp_.value ? Number(thresholdInp_.value) : -Infinity
  const result = getLongestSubArrayHasSumLessThan(dbArray, threshold)
  const resultStr = result.arr.join(' ')
  displayArea_.innerHTML = dbArray.join(' ').replace(resultStr, `<span title="sum = ${result.sum}">${resultStr}</span>`)
}

;(function main() {
  onGeneratingRandomArray()
})()

