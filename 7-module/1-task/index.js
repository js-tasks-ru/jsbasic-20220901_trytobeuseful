import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  elem = null;

  categories = null;

  #rightButton = null;
  #leftButton = null;
  #ribbonInner = null;
  #scrollLeft = null;
  #scrollWidth = null;
  #clientWidth = null;
  #scrollRight = null;
  #ribbonItems = null;


  constructor(categories) {
    this.categories = categories;
    this.#render()
    this.#rightButton.addEventListener('click', (event) => {

      this.#ribbonInner.scrollBy(350, 0)
      this.#leftButton.classList.add('ribbon__arrow_visible')
      
      if(this.#scrollRight < 1){
          this.#rightButton.classList.remove('ribbon__arrow_visible')
        }
    
    })

    this.#leftButton.addEventListener('click', () => {

    this.#ribbonInner.scrollBy(-350, 0)
    this.#rightButton.classList.add('ribbon__arrow_visible')
      if(this.#scrollLeft == 0){
        this.#leftButton.classList.remove('ribbon__arrow_visible')
      }
    })
   
    this.#ribbonItems.forEach(item =>(item.addEventListener('click', (event) => {

      this.#ribbonItems.forEach(value => (value.classList.remove('ribbon__item_active')))
      event.preventDefault();
      item.classList.toggle('ribbon__item_active')

      const cEvent = new CustomEvent('ribbon-select', {
        detail: item.dataset.id,
        bubbles: true 
       })
       this.elem.dispatchEvent(cEvent)
    })))
    
  }
  #render(){
    this.elem = createElement(this.#template())
    this.#rightButton = this.elem.querySelector('.ribbon__arrow_right')
    this.#leftButton = this.elem.querySelector('.ribbon__arrow_left')
    this.#ribbonInner = this.elem.querySelector('.ribbon__inner')
    this.#scrollLeft = this.#ribbonInner.scrollLeft
    this.#scrollWidth = this.#ribbonInner.scrollWidth
    this.#clientWidth = this.#ribbonInner.clientWidth
    this.#scrollRight = this.#scrollWidth - this.#scrollLeft - this.#clientWidth
    this.#ribbonItems = this.elem.querySelectorAll('.ribbon__item')
  }

  #template(){
    return `
    <div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner">
      ${this.categories.map(value =>`<a href="#" class="ribbon__item" data-id="${value.id}">${value.name}</a>`).join('')}  
    </nav>
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`
  }

}
