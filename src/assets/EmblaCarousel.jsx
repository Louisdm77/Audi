import React, { useState } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import car from "../assets/Ncar.png";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [currentIndex, setCurrentIndex] = useState(0);

  let num = 0;
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => {
            return (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <img
                    style={{
                      filter: index == currentIndex ? "" : "blur(5px)",
                    }}
                    className="w-full h-full "
                    src={slide.url}
                    alt={slide.alt}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => {
              onPrevButtonClick();
              handlePrev();
            }}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => {
              onNextButtonClick();
              handleNext();
            }}
            disabled={nextBtnDisabled}
          />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
