export default class StepSlider {
  elem = null;
  #steps = null;
  #value = null;
  #sliderValue = null;
  #thumb = null;
  #progress = null;

  constructor({ steps, value = 0 }) {
    this.#steps = steps;
    this.#value = value;
    this.#render()
  }

  #render(){
    
    this.elem = this.#createElement(this.#template())
    this.#addSteps(this.#steps)
    
    this.#sliderValue = this.elem.querySelector('.slider__value')
    this.#thumb = this.elem.querySelector('.slider__thumb');
    this.#progress = this.elem.querySelector('.slider__progress');

    this.#thumb.style.left = `${this.#value}%`;
    this.#progress.style.width = `${this.#value}%`;

    this.elem.addEventListener('click', event => this.#selectStep(event))
    
    
  }

  #template(){
    return `<!--Корневой элемент слайдера-->
    <div class="slider">
    
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb">
        <span class="slider__value">0</span>
      </div>
    
      <!--Полоска слайдера-->
      <div class="slider__progress"></div>
    
      <!-- Шаги слайдера (вертикальные чёрточки) -->
      <div class="slider__steps">
        <!-- текущий выбранный шаг выделен этим классом -->
      
      </div>
    </div>`
  }

  #createElement(html){
    const div = document.createElement('div')
    div.innerHTML = html
    return div.firstElementChild;
  }

  #addSteps(steps){
    console.log(this.elem)
    let stepsContainer = this.elem.querySelector('.slider__steps')
    for(let i = 0; i < steps; i++){
      if(i == steps -1){
        stepsContainer.insertAdjacentHTML('afterbegin', '<span class="slider__step-active"></span>')
      }
      else{
      stepsContainer.insertAdjacentHTML('afterbegin', '<span></span>')
      }
    }
    
  }

  #selectStep(event){
    let stepsContainer = this.elem.querySelector('.slider__steps')
    let activeStep = stepsContainer.querySelector('.slider__step-active')
    if(activeStep){
      activeStep.classList.remove('slider__step-active')
    }
    let left = event.clientX - this.elem.getBoundingClientRect().left
    let leftRelative = left / this.elem.offsetWidth;
    let segments = this.#steps - 1;
    let approximateValue = leftRelative * segments;
    this.#value = Math.round(approximateValue)

    this.#sliderValue.innerText = this.#value

    let valuePercents = this.#value / segments * 100;

    this.#thumb.style.left = `${valuePercents}%`;
    this.#progress.style.width = `${valuePercents}%`;

    
    stepsContainer.childNodes[this.#value].classList.toggle('slider__step-active')

    const cEvent = new CustomEvent('slider-change', { 
      detail: this.#value, 
      bubbles: true 
    })
    
    this.elem.dispatchEvent(cEvent)
  }
}
