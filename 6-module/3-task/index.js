import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;
  
  #addButton = null;
  #slides = null; 
  
  #slide = null;
  #imgWidth = null;
  #imgCount = null;
  #rightButton = null;
  #leftButton = null;
  #slidePage = 0;


  constructor(slides) {
    this.#slides = slides;
    this.#render()
    this.#rightButton.addEventListener('click', this.#swipeRight)
    this.#leftButton.addEventListener('click', this.#swipeLeft)
    
    
  }

  #render(){
    this.elem = createElement(this.#template())
    this.#addButton = this.elem.querySelectorAll('.carousel__button')
    this.#addButton.forEach(value =>(value.addEventListener('click', this.#addToCart)))
    
    this.#slide = this.elem.querySelector('.carousel__inner');
    this.#imgWidth = 988;
    this.#imgCount = this.#slide.children.length;
    this.#rightButton = this.elem.querySelector('.carousel__arrow_right');
    this.#leftButton = this.elem.querySelector('.carousel__arrow_left');

    this.#leftButton.style.display = 'none'
    
  }


#template(){
  return `
  <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner">

   ${this.#slides.map(value => 
    ` <div class="carousel__slide" data-id="${value.id}">
   <img src="/assets/images/carousel/${value.image}" class="carousel__img" alt="slide">
   <div class="carousel__caption">
     <span class="carousel__price">€${value.price.toFixed(2)}</span>
     <div class="carousel__title">${value.name}</div>
     <button type="button" class="carousel__button">
       <img src="/assets/images/icons/plus-icon.svg" alt="icon">
     </button>
   </div>
 </div>`).join('\n')}

    </div>
  </div>
</div>`
}

#swipeRight = () => {
       
  this.#slidePage++
  
  this.#leftButton.style.display = ''

    this.#slide.style.transform = `translateX(-${this.#imgWidth * this.#slidePage}px)`
  
  if(this.#slidePage == this.#imgCount - 1){
    this.#rightButton.style.display = 'none'
    
  }
  
}


    #swipeLeft = () =>{
  
      if(this.#slidePage == 1){
  
        this.#leftButton.style.display = 'none'
  
      }
      
      this.#slidePage--
  
      this.#rightButton.style.display = ''
  
      this.#slide.style.transform = `translateX(-${this.#imgWidth * this.#slidePage}px)`
      
    }

  #addToCart = () => {
    const event = new CustomEvent('product-add', {
      detail: this.#slides[this.#slidePage].id, 
      bubbles: true 
    })
    this.elem.dispatchEvent(event)
  }
}


