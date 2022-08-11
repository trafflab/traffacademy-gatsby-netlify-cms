import * as React from "react";
import { PageLayout, IndexPageLayout } from "../../components/layouts/";
import {
  PartnersMarquee,
  WhatIsIt,
  Participate,
  Opening,
  ItIsForYou,
  ImportantThings,
  PerfectCooice,
  AboutUs
} from '../../components/sections';
import { graphql } from "gatsby";

export function IndexPageTemplate({ data }) {

  return (
    <PageLayout>
      <IndexPageLayout bgData={data.bgElements} formData={data.formPopup}>
        <Opening data={data.opening} />
        <WhatIsIt data={data.whatIsIt} />
        <ItIsForYou data={data.itIsForYou} />
        <ImportantThings data={data.importantThings} />
        <PerfectCooice data={data.perfectChoice}/>
        <AboutUs data={data.aboutUs} />
        <PartnersMarquee data={data.partersMarquee} />
        <Participate data={data.participate}/>
      </IndexPageLayout>
    </PageLayout>
  )
}

export default function IndexPage({data}) {

  return <IndexPageTemplate data={data.markdownRemark.frontmatter} />
}

export const query = graphql`
  query indexData {
    markdownRemark {
      frontmatter {

        opening {
          buttonText
          buttonText_480
          time
          title {
            part
          }
          cards {
            title
            text
          }
          giftText
          giftText_480
          tag
          name
          jobTitle
          imageAlt
          personImage {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          personImage_480 {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        
        whatIsIt {
          cards {
            text
          }
          text
          title {
            part
          }
          image_480 {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
        }

        itIsForYou {
          buttonText
          cards {
            cardImage {
              childImageSharp {
                gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
              }
            }
            text
            imageAlt
          }
          title {
            part
          }
        }

        importantThings {
          title {
            part
          }
          cards {
            text
            imageAlt
            cardImage {
              childImageSharp {
                gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
              }
            }
          }
        }

        perfectChoice {
          title {
            part
          }
          cards {
            cardImage {
              childImageSharp {
                gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
              }
            }
            imageAlt
            title
            list {
              elementText
            }
          }
        }

        aboutUs {
          title {
            part
          }
          name
          masterOf
          image {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          image_480 {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
        }

        partersMarquee {
          title
          partners {
            partnerLogo {
              childImageSharp {
                gatsbyImageData(quality: 70, layout: CONSTRAINED, placeholder: BLURRED )
              }
            }
            dimensionsStyle {
              width
              height
            }
          }
        }

        participate {
          title
          subtitle
          buttonText
          text
          bgBubble {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          bgBubble_480 {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          clockImage {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          clockImage_480 {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
        }

        bgElements {
          openingBg {
            childImageSharp {
              gatsbyImageData(quality: 90, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          openingBg_480 {
            childImageSharp {
              gatsbyImageData(quality: 90, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          bubbles {
            bubble {
              childImageSharp {
                gatsbyImageData(quality: 1, layout: CONSTRAINED, placeholder: BLURRED )
              }
            } 
          }
          bubbles_480 {
            bubble {
              childImageSharp {
                gatsbyImageData(quality: 1, layout: CONSTRAINED, placeholder: BLURRED )
              }
            }
          }
          items {
            item {
              childImageSharp {
                gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
              }
            } 
          }
        }

        formPopup {
          title
          subtitle
          bookImage {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          bookImage_480 {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
        }


      }
    }
  }

  
`
