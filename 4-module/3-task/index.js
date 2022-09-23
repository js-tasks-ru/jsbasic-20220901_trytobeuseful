function highlight(table) {
    tbody = table.tBodies[0]
    for(tr of tbody.children){

      let status = tr.lastElementChild;

      if(status.dataset.available == 'true'){
        tr.classList.add('available')
      }
      if(status.dataset.available == 'false'){
        tr.classList.add('unavailable')
      }
      if(status.dataset.available == undefined){
        tr.hidden = true;
      }

      let gender = status.previousElementSibling.textContent

        gender == 'm' ? tr.classList.add('male') : tr.classList.add('female')
        
      let age = tr.children[1].textContent

        age < 18 ? tr.setAttribute('style', 'text-decoration: line-through') : null

    }
}
