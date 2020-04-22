function multiplesOf3and5(number) {
  let i = 1;
  let sum = []
  
  while (i < number) {
    if (i%3 === 0 || i%5 === 0) {
      sum.push(i)
    }
    i += 1;
  }

  return sum.reduce((acc, val) => acc + val)
}

export default multiplesOf3and5;