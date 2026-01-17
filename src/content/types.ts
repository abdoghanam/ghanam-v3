export type PropertyType = "sale" | "rent" | "exchange" | "lands" | "shops";

export type Property = {
  id: number;
  slug: string;
  title: string;
  location: string;
  type: PropertyType;
  price: string;
  areaM2: number;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  features: string[];
  images: string[];
  isFeatured?: boolean;
};
