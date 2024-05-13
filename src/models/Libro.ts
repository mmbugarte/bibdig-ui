export interface StrapiRequest<T> {
  data: StrapiObject<T>;
}

export interface StrapiObject<T> {
  id: number;
  attributes: T;
}

export interface Libro {
  titulo: string;
  autor: string;
  publicado: number;
  portada: StrapiRequest<StrapiMedia>;
  descarga: StrapiRequest<StrapiMedia>;
}

export interface StrapiMedia {
  url: string;
}
