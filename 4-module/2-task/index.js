function makeDiagonalRed(table) {

  let tbody = table.tBodies[0];
  let index = 0;
  
  for(let td of tbody.children){
    td.children[index].style.backgroundColor = 'red'
    index++
  }
  return table
}
