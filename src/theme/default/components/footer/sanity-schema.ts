import { linksList, externalUrl, internalUrl, media, targetedLink } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityCommonSchema";
import { defineField, defineType } from "sanity"

export const footerLogo = defineType({
  name: "footerLogo",
  title: "Footer Logo",
  type: "object",
  fields: [
    externalUrl,
    internalUrl,
    media,
  ],
})

// Lifted type for the button
export const footerButton = defineType({
  name: "footerButton",
  title: "Footer Button",
  type: "object",
  fields: [
    internalUrl,
    externalUrl,
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "target",
      title: "Target",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
    }),
  ],
})

// Lifted type for link sections
export const footerLinkSection = defineType({
  name: "footerLinkSection",
  title: "Footer Link Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    linksList,
  ],
})

export const footerFields = [
  defineField({
    name: "title",
    title: "Title",
    type: "string",
  }),
  defineField({
    name: "leftLogo",
    title: "Left Logo",
    type: "footerLogo",
  }),
  defineField({
    name: "rightLogo",
    title: "Right Logo",
    type: "footerLogo",
  }),
  defineField({
    name: "logoOne",
    title: "Logo One",
    type: "footerLogo",
  }),
  defineField({
    name: "copyrightNotice",
    title: "Copyright Notice",
    type: "string",
  }),
  defineField({
    name: "linkSections",
    title: "Link Sections",
    type: "array",
    of: [{ type: "footerLinkSection" }],
  }),
  defineField({
    name: "button",
    title: "Button",
    type: "footerButton",
  }),
  defineField({
    name: "phoneNumber",
    title: "Phone Number",
    type: "string",
  }),
];


export const footerStructure = defineType({
  name: 'footerStructure',
  title: 'Footer Structure',
  type: 'document',
  fields: footerFields,
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})