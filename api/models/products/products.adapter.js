import { toImage } from "../adapter";

export const toProduct = data => {
  if (data) {
    return {
      id: data.id,
      title: data.title,
      summary: data.summary,
      url: data.url,
      thumbnail: toImage(data.thumbnail)
    };
  }
};

export const toProductArray = data => {
  if (data && data.length) {
    return data.map(item => {
      return toProduct(item);
    });
  }
  return [];
};
