/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image: metaImage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
            keywords
            infoData {
              adresse {
                adress_text
                strasse
                plz
                stadt
              }
              contact {
                call_text
                tel
                tel_link
                whats_link
                whatsapp_text
                mail_text
                mail
              }
            }           
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image = metaImage && metaImage.src ? `${site.siteMetadata.siteUrl}${metaImage.src}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang: "de"
      }}
      title={title || site.siteMetadata.title}
      //titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(",")
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
     /*   {
          name: `twitter:card`,
          content: `summary`,
        }, */
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        metaImage 
          ? [
            {
              property: "og:image",
              content: image
            },
            {
              property: "og:image:width",
              content: metaImage.width
            },
            {
              property: "og:image:height",
              content: metaImage.height
            },
            {
              name: "twitter:card",
              content: "summary_large_image"
            }
          ] : [
            {
              name: "twitter:card",
              content: "summary"
            }
          ]
      ).concat(meta)}
    > 
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "${site.siteMetadata.siteUrl}",
          "name": "${site.siteMetadata.author}",
          "email": "${site.siteMetadata.infoData.contact.mail}",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "${site.siteMetadata.infoData.contact.tel_link}",
            "contactType": "Service"
          }
        }
      `}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `de`,
  meta: [
    {
      name: `google-site-verification`,
      content: `DTMnqKYWsS-n5IoBDZy2iax7ZzLJgK8-FRlOIEPvEow`
    }
  ]
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
  }),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
