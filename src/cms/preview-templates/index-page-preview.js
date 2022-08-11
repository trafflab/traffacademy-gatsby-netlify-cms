import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page/index-page-template';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data);
  return (
    <IndexPageTemplate
      data={data}
    />
  )
}

export default IndexPagePreview;
