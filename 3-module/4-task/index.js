function showSalary(users, age) {

  let names = [];

  users.forEach(element => {
    if(element.age <= age){

      let name = element.name + ', ' + element.balance;

      names.push(name) 

    }
  });
  
  return names.join('\n');
}

