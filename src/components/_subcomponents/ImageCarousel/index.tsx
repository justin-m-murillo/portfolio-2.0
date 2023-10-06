import { TImage } from '@/typings';
import React, { useState } from 'react'
import ProjectImg from '../ProjectImg';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

type ImageCarouselProps = {
  images: TImage[];
}

type CarouselItemProps = {
  index: number;
  img: TImage;
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [viewIndex, setViewIndex] = useState<number>(0);

  const Item = ({index, img}: CarouselItemProps) => {
    if (index === viewIndex) {
      return (
        <li>
          <ProjectImg image={img} />
        </li>
      );
    } else {
      return null;
    }
  }

  const rotate = (n: number) => {
    const newIndex = ((viewIndex + n) + images.length) % images.length;
    setViewIndex(newIndex);
  }
  
  return (
    <ul className='carousel-wrapper'>
      {images?.map((img, index) => (
        <Item key={index} index={index} img={img} />
      ))}
      <div className='carousel-btns'>
        <button onClick={() => rotate(-1)}>
          <BsArrowLeftCircle size={24} />
        </button>
        <button onClick={() => rotate(1)}>
          <BsArrowRightCircle size={24} />
        </button>
      </div>
    </ul>
  )
}

export default ImageCarousel