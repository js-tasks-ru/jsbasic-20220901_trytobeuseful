function sumSalary(salaries) {
  let result = 0;
  for(value in salaries){
    if(typeof salaries[value] == 'number'){
      if(!isNaN(salaries[value]) && salaries[value] != Infinity && salaries[value] != -Infinity){
        result += salaries[value] 
      }
    }
  }
  return result
}
