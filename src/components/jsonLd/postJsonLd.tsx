import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const PostJsonLD = ({ title, description, date, categorySlug, url }) => {
  const { site } = useStaticQuery<GatsbyTypes.PostJsonLDQuery>(
    graphql`
      query PostJsonLD {
        site {
          siteMetadata {
            siteUrl
            author
            categories {
              name
              slug
            }
          }
        }
      }
    `
  );

  const { siteUrl, author, categories } = site.siteMetadata;
  const dateFormatted = date.replace(/\./g, "-");
  const publisher = {
    "@type": "Organization",
    name: author,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/avatar.png`,
      width: 150,
      height: 150,
    },
  };
  const authorData = {
    "@type": "Person",
    name: author,
    image: `${siteUrl}/images/avatar.png`,
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: `${siteUrl}/images/ogp.png`,
    editor: author,
    url: url,
    datePublished: dateFormatted,
    dateCreated: dateFormatted,
    dateModified: dateFormatted,
    description: description,
    author: authorData,
    publisher,
  };
  const categoryObject = categories.find((cat) => {
    return cat.slug === categorySlug;
  });
  const categoryName = categoryObject ? categoryObject.name : categorySlug;
  const jsonBreadCrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": siteUrl,
          name: "HOME",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${siteUrl}/${categorySlug}`,
          name: categoryName,
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": url,
          name: title,
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">
        {JSON.stringify(jsonBreadCrumbs)}
      </script>
    </Helmet>
  );
};

export default PostJsonLD;
