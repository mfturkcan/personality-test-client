export class Article {

  constructor(
    articleId: number,
    text: string,
    title: string,
    author: string,
    image: string,
    publishDate: Date
  ) {
    this.articleId = articleId
    this.text = text
    this.title = title
    this.author = author
    this.image = image
    this.publishDate = publishDate
  }


  articleId: number;
  text: string;
  title: string;
  author: string;
  image: string;
  publishDate: Date;
}
