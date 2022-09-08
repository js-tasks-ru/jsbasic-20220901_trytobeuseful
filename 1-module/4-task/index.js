function checkSpam(str) {
  let upStr = str.toUpperCase();

  if (upStr.includes('XXX') || upStr.includes('1XBET')){

    return true

  }
  
  return false
}
