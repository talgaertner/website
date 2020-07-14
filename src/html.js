import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} amp>
        <Helmet>
            <html lang="de" amp />
            <meta charset="utf-8" />
            <title>Talgärtner</title>
            <meta name="viewport" content="width=device-width" minimum-scale="1" initial-scale="1" />
            <meta name="description" content="Ihre Talgärtner" />
            <meta name="google-site-verification" content="DTMnqKYWsS-n5IoBDZy2iax7ZzLJgK8-FRlOIEPvEow" />
            <base target="_blank" href="https://talgaertner.de/" />
            <link rel="canonical" href="https://talgaertner.de/index.html" />
            <script async src="https://cdn.ampproject.org/v0.js"></script>
        </Helmet>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
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
