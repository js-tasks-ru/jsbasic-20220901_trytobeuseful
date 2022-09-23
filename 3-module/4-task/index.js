function showSalary(users, age) {
  //console.log(users.filter(user => user.age <= age))
  return users.filter(user => user.age <= age).map(value => {
    return value.name + ', ' + value.balance;
  }).join('\n')
}
