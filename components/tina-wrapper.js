import React from "react"
import { MarkdownFieldPlugin } from "react-tinacms-editor"
import { Client, TinaCloudAuthWall } from "tina-graphql-gateway"
import { TinaCMS } from "tinacms"

const TinaWrapper = ({ children }) => {
  const cms = React.useMemo(() => {
    return new TinaCMS({
      apis: {
        tina: new Client({
          organizationId: "a7nconsulting",
          clientId: "90ikuq8rb55quvenhoak5t5id",
          branch: "main",
        }),
      },
      plugins: [MarkdownFieldPlugin],
      sidebar: true,
      enabled: true,
    })
  }, [])

  return <TinaCloudAuthWall cms={cms}>{children}</TinaCloudAuthWall>
}

export default TinaWrapper
