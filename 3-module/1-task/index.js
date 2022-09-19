function namify(users) {
  let names = [];
  users.map(element => {
    names.push(element.name)
  });
  return names
}