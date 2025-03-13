import { defineField, defineType } from "sanity"

const mottoFields = [
  defineField({
    name: "words",
    title: "Words",
    type: "string",
    description: "Main text for the motto."
  }),
  defineField({
    name: "align",
    title: "Alignment",
    type: "string",
    description: "Text alignment e.g. left, center, right",
    options: {
      list: ["left", "center", "right"]
    }
  }),
  defineField({
    name: "selectableVariant",
    title: "Variant",
    type: "string",
    options: {
      list: [
        { title: "Default", value: "Default" },
        { title: "Another Variation", value: "someVariation" }
      ]
    }
  }),
  defineField({
    name: 'globalComponentSource',
    title: 'Global Component Source',
    type: 'reference',
    to: [{type: 'motto'}],
    description: 'Select a component motto that is a global reusable source.'
  })
]

export default defineType({
  name: "motto",
  title: "Motto",
  type: "object",
  fields: mottoFields,
  preview: {
    select: {
      title: "words"
    }
  }
})

export const mottoComponentGlobal = defineType({
  name: 'mottoComponent',
  title: 'Motto Component - Global',
  type: 'document',
  fields: mottoFields,
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})