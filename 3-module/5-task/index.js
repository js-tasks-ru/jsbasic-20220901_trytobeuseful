function getMinMax(str) {
  let numbers = [];
  str.split(' ').map(element => {
     if(!isNaN(Number(element))){
       numbers.push(Number(element))
     }
     
  });
  return {
    min:(Math.min.apply(null, numbers)),
    max:(Math.max.apply(null, numbers)),
  }
}
