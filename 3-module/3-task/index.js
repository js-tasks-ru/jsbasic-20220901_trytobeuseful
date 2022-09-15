function camelize(str) {

  let words = str.split(['-']);
  let camelWords = [];

  words.forEach((value, index) => {

    if(index == 0){
      camelWords.push(value) 
    }
    else{
    let needle = value[0];
    let slicedStr = value.substr(1);
    camelWords.push(needle.toUpperCase() + slicedStr)
    }
  });
  return camelWords.join('')
}
