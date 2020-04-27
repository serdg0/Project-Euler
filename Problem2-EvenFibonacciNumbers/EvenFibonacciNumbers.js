function fiboEvenSum(n) {
  let fiboSeq = [1, 2];
  let i = 3;

  while (i < n) {
    const next = fiboSeq[fiboSeq.length - 1] + fiboSeq[fiboSeq.length - 2];
    fiboSeq.push(next);
    i = next;
  }
  fiboSeq.pop()
  return fiboSeq.filter(n => n%2 === 0).reduce((acc, val) => acc + val);
  }

export default fiboEvenSum;