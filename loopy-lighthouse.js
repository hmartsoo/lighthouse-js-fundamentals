for (let i = 100; i <= 200; i++){
  //checking if increment is divisivible by 3 and 4, 3, and 4, respectively.
  if (i % 3 === 0 && i % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (i % 3 === 0) {
    console.log('Loopy');
  } else if (i % 4 === 0) {
    console.log('Lighthouse');
  } else {
    //print number if doesn't meet above category reqs
  console.log(i);
  }
}