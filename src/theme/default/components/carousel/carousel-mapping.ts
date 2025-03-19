export function mapCarouselData(rawData: any) {
  return {
    items: rawData.items.map((item: any) => ({
      id: item.id,
      imageUrl: item.image.url,
      altText: item.image.alt,
      link: item.link,
    })),
    speed: rawData.speed || 30,
    pauseOnHover: rawData.pauseOnHover ?? true,
  };
}
