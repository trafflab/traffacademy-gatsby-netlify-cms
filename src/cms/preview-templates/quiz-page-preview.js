import React from 'react'
import { QuizPageTemplate } from '../../templates/quiz-page/quiz-page-template';

const QuizPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <QuizPageTemplate
      data={data.quiz}
      isPreview
    />
  )
}

export default QuizPagePreview;
