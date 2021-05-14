// pages/admin/posts/[slug].js
import { useRouter } from "next/router"
import React from "react"
import { useGraphqlForms } from "tina-graphql-gateway"

export default function BlogPostEditor() {
  const query = (gql) => gql`
    query BlogPostQuery($relativePath: String!) {
      getPostsDocument(relativePath: $relativePath) {
        data {
          __typename
          ... on Post_Doc_Data {
            title
            excerpt
            coverImage
            date
            author {
              name
              picture
            }
            ogImage {
              url
            }
            _body
          }
        }
      }
    }
  `

  const router = useRouter()
  const [payload, isLoading] = useGraphqlForms({
    query,
    variables: {
      relativePath: `${router.query.slug}.md`,
    },
    formify: ({ createForm, formConfig }) => {
      formConfig.fields?.forEach((field) => {
        //use markdown plugin with _body field
        if (field.name === "_body") {
          field.component = "markdown"
        }
      })
      return createForm(formConfig)
    },
  })

  return <div>My admin page</div>
}
