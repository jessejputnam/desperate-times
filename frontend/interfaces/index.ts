import { ReactNode } from "react";

export type PageProps = { children?: ReactNode };

export interface ProductsProps {
  product: ProductType;
}

export interface ProductType {
  id: string;
  name: string;
  description: string;
  photo: ProductImageType;
  status: string;
  price: number;
}

export interface ProductImageType {
  id: string;
  image: CloudinaryImage_FileType;
  altText: string;
  product: ProductType;
}

export interface CloudinaryImage_FileType {
  id: string;
  filename: string;
  originalFilename: string;
  mimetype: string;
  encoding: string;
  publicUrl: string;
  publicUrlTransformed: string;
}

export interface CloudinaryImageFormatType {
  prettyName: string;
  width: string;
  height: string;
  crop: string;
  aspect_ratio: string;
  gravity: string;
  zoom: string;
  x: string;
  y: string;
  format: string;
  fetch_format: string;
  quality: string;
  radius: string;
  angle: string;
  effect: string;
  opacity: string;
  border: string;
  background: string;
  overlay: string;
  underlay: string;
  default_image: string;
  delay: string;
  color: string;
  color_space: string;
  dpr: string;
  page: string;
  density: string;
  flags: string;
  transformation: string;
}
