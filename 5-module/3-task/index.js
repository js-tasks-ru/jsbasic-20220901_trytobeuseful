function initCarousel() {
  let slide = document.querySelector('.carousel__inner');
  let imgWidth = slide.offsetWidth;
  let imgCount = slide.children.length;
  let rightButton = document.querySelector('.carousel__arrow_right');
  let leftButton = document.querySelector('.carousel__arrow_left');
  let slidePage = 0;

  function swipeRight(){
    
    slidePage++
    
    leftButton.style.display = ''

      slide.style.transform = `translateX(-${imgWidth * slidePage}px)`
    
    if(slidePage == imgCount - 1){
      rightButton.style.display = 'none'
    }

  }
  function swipeLeft(){

    if(slidePage == 1){

      leftButton.style.display = 'none'

    }
    
    slidePage--

    rightButton.style.display = ''

    slide.style.transform = `translateX(-${imgWidth * slidePage}px)`
    
  }


  leftButton.style.display = 'none'

  rightButton.addEventListener('click', swipeRight)
  leftButton.addEventListener('click', swipeLeft)
}
