import { defineField, defineType } from "sanity"

const gridContent = defineType({
  name: "gridContent",
  title: "Grid Content",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "sectionId",
      title: "Section ID",
      type: "string",
      description: "Unique identifier for this grid section",
    }),
    // Additional grid content fields can be added here
  ],
})

const sideNavIndicator = defineType({
  name: "SideNavIndicator",
  title: "Side Navigation Indicator",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Name of this navigation indicator",
    }),
    defineField({
      name: "gridSections",
      title: "Grid Sections",
      type: "array",
      of: [{ type: "reference", to: [{ type: "gridContent" }] }],
      description: "Add the grid sections to be included in this navigation indicator",
    }),
  ],
})

export default [gridContent, sideNavIndicator]