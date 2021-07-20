import { useEffect, useRef, useState } from "react";

const CustomCarousel = () => {

  const [currentSlide, setCurrentSlide] = useState(2);
  const carouselWrapper = useRef();
  const carousel = useRef();
  const carouselContainerWidth = useRef(0);
  const slideWidth = useRef(0);
  const carouselLength = useRef(0);

  const goNextSlide = () => {
    setCurrentSlide(_oldVal => {
      let newValue = _oldVal + 1;
      carouselWrapper.current.children[_oldVal].classList.remove("g-prime-custom-carousel-slide-active");
      carouselWrapper.current.style.transform = `translateX(${(-slideWidth.current * newValue) + ((carouselContainerWidth.current - slideWidth.current) / 2)}px)`;
      return newValue;
    });
  }

  const goPrevSlide = () => {
    setCurrentSlide(_oldVal => {
      let newValue = _oldVal - 1;
      carouselWrapper.current.children[_oldVal].classList.remove("g-prime-custom-carousel-slide-active");
      carouselWrapper.current.style.transform = `translateX(${(-slideWidth.current * newValue) + ((carouselContainerWidth.current - slideWidth.current) / 2)}px)`;
      return newValue;
    });
  }

  const checkAndReposition = () => {
    setCurrentSlide(_oldVal => {
      let newValue = _oldVal;
      // carouselWrapper.current.querySelector(".g-prime-custom-carousel-slide-active").classList.remove("g-prime-custom-carousel-slide-active");
      carouselWrapper.current.classList.remove("transition-transform");

      if (_oldVal === 1) {
        console.log(carouselWrapper.current.children.length);
        newValue = carouselWrapper.current.children.length - 3;
        carouselWrapper.current.classList.remove("transition-transform");
        carouselWrapper.current.style.transform = `translateX(${(-slideWidth.current * newValue) + ((carouselContainerWidth.current - slideWidth.current) / 2)}px)`;
        carouselWrapper.current.classList.add("transition-transform");
        // setTimeout(() => {
        //   carouselWrapper.current.classList.add("transition-transform");
        // }, 150)
      }

      if (_oldVal === carouselLength.current + 2) {
        newValue = 2;
        // carouselWrapper.current.classList.remove("transition-transform");
        carouselWrapper.current.style.transform = `translateX(${(-slideWidth.current * newValue) + ((carouselContainerWidth.current - slideWidth.current) / 2)}px)`;
        // carouselWrapper.current.classList.add("transition-transform");
        // setTimeout(() => {
        //   carouselWrapper.current.classList.add("transition-transform");
        // }, 150)
      }

      // setTimeout(() => {
      //   carouselWrapper.current.classList.add("transition-transform");
      // }, 250)
      // carouselWrapper.current.classList.add("transition-transform");
      carouselWrapper.current.children[newValue].classList.add("g-prime-custom-carousel-slide-active");
      return newValue;
    })
  }

  useEffect(() => {
    let lastSlideClone = carouselWrapper.current.children[carouselWrapper.current.children.length - 1].cloneNode(true);
    let penultimateSlideClone = carouselWrapper.current.children[carouselWrapper.current.children.length - 2].cloneNode(true);
    let firstSlideClone = carouselWrapper.current.children[0].cloneNode(true);
    let secondSlideClone = carouselWrapper.current.children[1].cloneNode(true);
    carouselContainerWidth.current = carousel.current.clientWidth;
    slideWidth.current = carouselWrapper.current.children[0].clientWidth;
    carouselLength.current = carouselWrapper.current.children.length;

    carouselWrapper.current.append(firstSlideClone);
    carouselWrapper.current.append(secondSlideClone);
    carouselWrapper.current.prepend(lastSlideClone);
    carouselWrapper.current.prepend(penultimateSlideClone);

    carouselWrapper.current.style.transform = `translateX(${-(slideWidth.current * currentSlide) + ((carouselContainerWidth.current - slideWidth.current) / 2)}px)`;
    carouselWrapper.current.children[currentSlide].classList.add("g-prime-custom-carousel-slide-active")
  }, [])

  return (
    <div ref={carousel} className="g-prime-custom-carousel w-full relative ">
      <button onClick={goPrevSlide} className="g-prime-custom-carousel-previous-btn p-4">Prev</button>
      <button onClick={goNextSlide} className="g-prime-custom-carousel-next-btn p-4">Next</button>
      <div ref={carouselWrapper} className="g-prime-custom-carousel-wrapper" onTransitionEnd={checkAndReposition}>
        <div className="slide" >
          1
        </div>
        <div className="slide" >
          2
        </div>
        <div className="slide" >
          3
        </div>
      </div>
    </div>
  )
}

export default CustomCarousel;