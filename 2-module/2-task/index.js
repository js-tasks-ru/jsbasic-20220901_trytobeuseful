function isEmpty(obj) {
  let result = true;
  for(value in obj){
    result = false
  }
  return result
}
