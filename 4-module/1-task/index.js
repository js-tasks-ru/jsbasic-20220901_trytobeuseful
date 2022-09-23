function makeFriendsList(friends) {

  let ul = document.createElement('ul');

  document.body.append(ul)
  friends.map(value => {

    let li = document.createElement('li')

    li.innerHTML = value.firstName + ' ' + value.lastName
    return ul.append(li)
  })
    
  return ul
}

