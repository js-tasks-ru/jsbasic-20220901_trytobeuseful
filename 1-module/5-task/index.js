function truncate(str, maxlength) {
  
  let strLen = str.length;

if(strLen > maxlength){

  return str.substr(0, maxlength - 1) + '…'

  }

  else return str
}
