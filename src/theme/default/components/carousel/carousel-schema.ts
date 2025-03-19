export const carouselSchema = {
  name: "carousel",
  type: "object",
  fields: [
    {
      name: "items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "image", type: "image" },
            { name: "link", type: "url" },
          ],
        },
      ],
    },
    { name: "speed", type: "number" },
    { name: "pauseOnHover", type: "boolean" },
  ],
};
