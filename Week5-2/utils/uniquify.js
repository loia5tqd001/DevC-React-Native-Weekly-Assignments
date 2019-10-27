export default uniquify = (arr) => {
  return arr.filter((o, i, arr) => {
    const firstOccur = arr.findIndex(
      it => JSON.stringify(it) === JSON.stringify(o)
    )
    return firstOccur === i
  })
}
