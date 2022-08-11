// import * as React from "react"
// import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

// export default function MediaGatsbyImage({ image, image_480, alt='trafflab' }) {
  
//   const images =  withArtDirection(getImage(image ? image : image_480), [
//     {
//       media: '(max-width: 480px)',
//       image: getImage(image_480 ? image_480 : image)
//     }
//   ])

//   return (
//     <GatsbyImage
//       image={(image && image_480 ) ? images : (getImage(image) || getImage(image_480))}
//       objectFit="fill"
//       loading="eager"
//       objectPosition={'center'}
//       style={{width: "100%", height:"100%"}}
//       alt={alt}
//       formats={["auto", "webp", "avif"]}
//     />
//   )
// }

import React from 'react';
import * as styles from './media-gatsby-image.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Is480Context } from '../../../utils/contexts';

export default function MediaGatsbyImage({ image_480=false, image, alt='trafflab' }) {
  const is480 = React.useContext(Is480Context);

  const handledImg = getImage(image) || image;
  const handledImg_480 = getImage(image_480) || image_480;
  return (
    (handledImg?.layout || handledImg_480?.layout) ? (
      <GatsbyImage
        image={(is480 && image_480) ? handledImg_480 : handledImg}
        objectFit="fill"
        objectPosition={'center'}
        style={{width: "100%", height:"100%"}}
        alt={alt}
        formats={["auto", "webp", "avif"]}
      />
    ) : (
      <picture>
        <source media='(max-width: 480px)' srcSet={handledImg_480} />
        <img src={handledImg} alt={alt} style={{width: "100%", height:"100%"}}  />
      </picture>
    )
  )
}