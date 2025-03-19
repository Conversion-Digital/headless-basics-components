export const carouselQuery = `
  query CarouselData($id: ID!) {
    carousel(id: $id) {
      items {
        id
        image {
          url
          alt
        }
        link
      }
      speed
      pauseOnHover
    }
  }
`;
