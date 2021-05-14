import { defineSchema } from "tina-graphql-gateway-cli"

export default defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "posts",
      path: "_posts",
      templates: [
        {
          label: "Post",
          name: "post",
          fields: [
            {
              type: "text",
              label: "Title",
              name: "title",
            },
            {
              type: "text",
              label: "Excerpt",
              name: "excerpt",
            },
            {
              type: "text",
              label: "Cover Image",
              name: "coverImage",
            },
            {
              type: "text",
              label: "Date",
              name: "date",
            },
            {
              type: "group",
              label: "Author",
              name: "author",
              fields: [
                {
                  type: "text",
                  label: "Name",
                  name: "name",
                },
                {
                  type: "text",
                  label: "Picture",
                  name: "picture",
                },
              ],
            },
            {
              type: "group",
              label: "OG Image",
              name: "ogImage",
              fields: [
                {
                  type: "text",
                  label: "Url",
                  name: "url",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})
