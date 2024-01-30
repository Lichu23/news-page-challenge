export interface APIResults {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: null | string;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: Date;
  content: null | string;
}

export interface Source {
  id: string;
  name: string;
}
