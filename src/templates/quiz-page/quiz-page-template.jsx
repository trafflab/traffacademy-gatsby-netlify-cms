import * as React from "react";
import * as styles from './quiz-page-template.module.css';
import { graphql } from "gatsby";
import { YMInitializer } from 'react-yandex-metrika';
import { Helmet } from "react-helmet";
import Quiz from "../../components/sections/quiz/quiz";
import { MediaGatsbyImage } from "../../components/ui";
import { Loader } from "../../components/ui";

export function QuizPageTemplate({ data, isPreview }) {
  return (
    <>
      <Helmet>
        <title>Quiz | Traffacademy</title>
      </Helmet>
      <div className={styles.page}>
        <div className={styles.imageContainer}><MediaGatsbyImage image={data.bg} image_480={data.bg_480}/></div>
        <main style={{Zindex: 1, position: 'relative'}}>
          {
            data.questions
            ? <Quiz data={data} isPreview={isPreview} />
            : <Loader />
          }
        </main>
      </div>
      <YMInitializer accounts={[90615658]} />
    </>

  )
}

export default function QuizPage({ data }) {
  return <QuizPageTemplate data={data.allMarkdownRemark.edges[1].node.frontmatter.quiz} />
}

export const query = graphql`
query QuizPageQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          quiz {
            bg {
              childImageSharp {
                gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
            bg_480 {
              childImageSharp {
                gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
            formText
            questions {
              answers {
                answerText
                points
                isUserAnswer
              }
              questionText
            }
          }
        }
      }
    }
  }
}
`