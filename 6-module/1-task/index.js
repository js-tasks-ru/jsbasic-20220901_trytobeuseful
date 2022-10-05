/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;

  rows = null;

  rmButton = null;
  
  constructor(rows) {
    this.rows = rows;
    this.#render()
    
}

#render() {
  this.elem = this.#createElement(this.#template());
  this.rmButton = this.elem.querySelectorAll('.remove');
  this.rmButton.forEach(value => (value.addEventListener('click', () => {value.parentElement.parentElement.remove()})))
}

#template(){
  return ` <table>
  <thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    ${this.rows.map(value => `<tr>
    <td>${value.name}</td>
    <td>${value.age}</td>
    <td>${value.salary}</td>
    <td>${value.city}</td>
    <td><button class ='remove'>X</button></td>
    </tr>`).join('\n')}
  </tbody>
</table>`
}

#createElement(html) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  
  return tempDiv.firstElementChild;
}

}