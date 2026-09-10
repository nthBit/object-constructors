const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        return this.title;
    }
    this.id = crypto.randomUUID()
};

function createBook(title, author, pages, hasRead) {
    let newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
};

createBook('Hyperion', 'Dan Simmons', '480', 'false');
createBook('The Fall of Hyperion', 'Dan Simmons', '517', 'false');
createBook('Endymion', 'Dan Simmons', '441', 'false');
createBook('The Rise of Endymion', 'Dan Simmons', '579', 'false');

function arrayLoop() {
    let table = "<table>";
    myLibrary.forEach((book) => {
        table += "<tr>"
        table += `<td>${book.title}</td>`;
        table += `<td>${book.author}</td>`;
        table += `<td>${book.pages}</td>`;
        table += `<td>${book.hasRead}</td>`;
        table += `<td>${book.id}</td>`;
        table += "</tr>"
    });
    table += "</table>"
    return table;
};

const body = document.querySelector("body");
body.innerHTML = arrayLoop();
