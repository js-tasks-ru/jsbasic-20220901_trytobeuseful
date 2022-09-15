function namify(users) {
  let names = [];
  users.forEach(element => {
    names.push(element.name)
  });
  return names
}