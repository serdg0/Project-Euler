const yeah = (i, arr) => {
    const divisible = x => i%x === 0;
    return arr.every(divisible)
  }
  
  const arrayize = n => {
    let i = 1;
    let arr = []
    while (i <= 0) {
      arr.push(i)
      i+=1
    }
    return arr;
  }
  
  function smallestMult(n) {
    let i = 1;
    let arr = arrayize(n);
    //wrap i to return true or false
    while (yeah(i, arr)) {
      i+=1
    }
  }

  export default smallestMult;