import createElement from '../../assets/lib/create-element.js';

//Ни один тест по этому заданию не пройден, но все работает. Можно ли допустить такой вариант?

export default class Modal {

  title = null;
  body = null;

  #closeButton = null;
  #container = null;
  
  listener = null;

  constructor(){

    this.#container = document.querySelector('.container')
    
  }

  setTitle(text){
    this.title = text
  }
  setBody(elem){
    this.body = elem
    
  }
 
  open(){
    this.#container.innerHTML = this.#template()
    document.body.append(this.#container)
    document.body.classList.add('is-modal-open')
    this.#container.querySelector('.modal__body').append(this.body) 

    this.#closeButton = this.#container.querySelector('.modal__close')
    this.#closeButton.addEventListener('click', this.close)
    this.listener = document.body.addEventListener('keydown', (event) => {
      if(event.code === 'Escape'){
        this.close()
      }
    })
    
     
  }

  close(){
    document.body.classList.remove('is-modal-open')
    document.body.querySelector('.container').remove()
    document.body.removeEventListener('keydown', this.listener, false)
  }

   
  #template(){
    return `<div class="modal">
    
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          ${this.title}
        </h3>
      </div>

      <div class="modal__body">
        
      </div>
    </div>

  </div>`
  }
}
