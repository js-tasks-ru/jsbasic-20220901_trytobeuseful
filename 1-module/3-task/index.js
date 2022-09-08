function ucFirst(str) {
  if(str != null && str != undefined && str != ''){
    let needle = str[0];
    let slicedStr = str.substr(1);
    
     
     return needle.toUpperCase() + slicedStr
     
    }
    else return str
}
