import React from 'react';
import * as styles from './media-gatsby-image.module.css';
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import {Is480Context} from '../../../utils/contexts';

export default function MediaGatsbyImage({ image_480=false, image=false, alt='traffacademy' }) {
  const is480 = React.useContext(Is480Context);

  // const images = (typeof image === 'object' || typeof image_480 === 'object') ? withArtDirection(getImage(image ? image : image_480), [
  //   {
  //     media: '(max-width: 480px)',
  //     image: getImage(image_480 ? image_480 : image)
  //   }
  // ]) : {image_480: image_480, image: image}

  const handledImg = getImage(image) || image;
  const handledImg_480 = getImage(image_480) || image_480;

  return (
    (typeof image === 'object' || typeof image_480 === 'object') ? (
      <GatsbyImage
        image={is480 ? handledImg_480 : handledImg}
        objectFit="fill"
        objectPosition={'center'}
        style={{width: "100%", height:"100%"}}
        alt={alt}
        formats={["auto", "webp", "avif"]}
      />
    ) : (
      <picture>
        <source media='(max-width: 480px)' srcSet={image_480} />
        <img src={image} alt={alt} style={{width: "100%", height:"100%"}}  />
      </picture>
    )
  )
}