function factorial(n) {
  let result = n
  if(n == 0 || n == 1){
    result = 1
  }
  else{
    result = 1;
    while(n){
      result *= n--
    }
}

  return result
}
console.log(factorial(5))