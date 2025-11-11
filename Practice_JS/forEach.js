let arr = [1, 2, 3, 101, 4];

const output = arr.reduce((pre, curr) => {
  return pre > curr ? pre : curr;
});

console.log(output);
