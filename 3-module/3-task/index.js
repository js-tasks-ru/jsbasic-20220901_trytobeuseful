function camelize(str) {
  return str.split('-').map((value, index) => {
    if(index != 0){
      return value[0].toUpperCase()+value.substr(1)
    }
      return value
  }).join('')
}
console.log(camelize('list-style-image'))