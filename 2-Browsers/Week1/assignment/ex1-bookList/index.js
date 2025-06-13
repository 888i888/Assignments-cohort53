//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/

-----------------------------------------------------------------------------*/
//cspell: enable
function createBookList(books) {
  function titleToFileName(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/ /g, '_');
  }

  const ul = document.createElement('ul');
  ul.classList.add('book-list');

  books.forEach((book) => {
    const li = document.createElement('li');
    li.classList.add('book-item');
    li.style.backgroundColor = book.alreadyRead ? 'green' : 'red';

    const img = document.createElement('img');
    img.classList.add('book-cover');
    const fileName = titleToFileName(book.title) + '.jpg';
    img.src = `assets/${fileName}`;
    img.alt = book.title;

    const info = document.createElement('p');
    info.classList.add('book-info');
    info.textContent = `${book.title} by ${book.author}`;

    li.appendChild(img);
    li.appendChild(info);
    ul.appendChild(li);
  });

  return ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.getElementById('bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
