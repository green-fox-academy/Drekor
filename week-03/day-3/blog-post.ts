'use strict'

class BlogPost {
  private authorName: string;
  private title: string;
  private text: string;
  private publicationDate: string;

  constructor(authorName: string, title: string, text: string, publicationDate: string) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.publicationDate = publicationDate;
  }
}

let firstBook: BlogPost = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04');

let secondBook: BlogPost = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10');

console.log(firstBook, secondBook);