function fiboEvenSum(n) {
  let seq = [1, 2];
  let evens = [2];
  let l = seq.length;
  let next = seq[l-1] + seq[l-2];

  while (next < n) {
    next = seq[l-1] + seq[l-2];
    seq.push(next);

    if (next%2 === 0) {
      evens.push(next);
    }

    l = seq.length
  }

  console.log(evens)
  evens.reduce((acc, val) => acc + val)
  }

export default fiboEvenSum;