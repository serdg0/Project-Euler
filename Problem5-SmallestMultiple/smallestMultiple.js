const myArray = n => {
  let result = [];
  let i = 2;

  while (i <= n) {
    result.push(i);
    i += 1;
  }

  return result
}

const dividesAll = array => {

  return function(n) {
    let isDivisible = curr => n%curr === 0;
    return array.every(isDivisible);
  }

}
  
  function smallestMult(n) {
    let i = 1;
    let arr = myArray(n);
    //wrap i to return true or false
    while (dividesAll(arr)(n)) {
      i+=1
    }
  }

  export default smallestMult;