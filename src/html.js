import React from "react"
import PropTypes from "prop-types"
import {Loader} from './components/ui/'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
              key={`loader`}
              id="___loader"
              style={{
                alignItems: "center",
                backgroundColor: "#131313",
                display: "flex",
                justifyContent: "center",
                position: "fixed",
                width: '100%',
                height: '100vh',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 10000,
              }}
           >
           <Loader />
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
          style={{
            zIndex: 1,
            height: '100%',
          }}
        />
        <div
          key={`portal`}
          id="___portal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 'max-content',
            width: 'max-content',
            overflow: 'auto',
            zIndex: 2,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
