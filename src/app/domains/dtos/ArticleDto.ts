export class ArticleDto {

  constructor(
    text: string,
    title: string,
    author: string,
    image: string
  ) {
    this.text = text
    this.title = title
    this.author = author
    this.image = image
  }


  text: string;
  title: string;
  author: string;
  image: string;
}
