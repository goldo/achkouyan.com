import { Query } from 'react-apollo'
import Markdown from 'markdown-to-jsx'
import gql from 'graphql-tag'

import { ContainerWithAnimation } from 'components/Page'

const pageName = 'about'

const pageQuery = gql`
  query content($where: PageWhereInput) {
    page: pagesConnection(where: $where) {
      edges {
        node {
          id
          createdAt
          updatedAt
          status
          title
          content
        }
      }
    }
  }
`

const variables = {
  where: { AND: [{ title: pageName }] },
}

const About = () => (
  <Query query={pageQuery} variables={variables}>
    {({ data }) => {
      if (!data || !data.page)
        return (
          <ContainerWithAnimation>
            <center>Error :(</center>
          </ContainerWithAnimation>
        )

      const { content } = data.page.edges[0].node

      return (
        <ContainerWithAnimation>
          <Markdown>{content}</Markdown>
        </ContainerWithAnimation>
      )
    }}
  </Query>
)

export default About
