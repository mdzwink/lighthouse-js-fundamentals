//100-200
//except when
//multiple of 3 --> replace with 'Loopy'
//multiple of 4 --> replace with 'Lighthouse'
//multiple of 3 & 4 -- replace with 'LoopyLighthouse'


for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log('LoopyLighthouse');
  }else if (i % 3 === 0) {
    console.log('Loopy');
  }else if (i % 4 === 0) {
    console.log('Lighthouse');
  }else {
    console.log(i);
  }
}