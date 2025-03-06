import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "testimonialTitle",
      title: "Testimonial Title",
      type: "string",
    }),
    defineField({
      name: "testimonialDescription",
      title: "Testimonial Description",
      type: "text",
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
    }),
  ],
});