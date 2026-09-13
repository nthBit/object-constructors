const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.id = crypto.randomUUID();
}

// work on below function

Book.prototype.bookRead = function() {
    const hasReadBtns = Array.from(document.getElementsByClassName("hasReadBtn"));
    hasReadBtns.forEach((button) => {
        button.addEventListener("click", function(event){
            event.preventDefault;
            if (button.textContent === false) {
                this.hasRead = true;
            } else {
                this.hasRead = false;
            bookRead();
        }
        });
    });
}

function createBook(title, author, pages, hasRead) {
    let newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
}

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
        table += `<td><button class="hasReadBtn">${book.hasRead}</button></td>`;
        table += `<td>${book.id}</td>`;
        table += `<td><button class="deleteButtons" id="delete-${book.id}"></button></td>`;
        table += "</tr>";
    });
    table += "</table>"
    return table;
}

const table = document.getElementById("table");
table.innerHTML = arrayLoop();

const submitButton = document.getElementById("submitBook");
submitButton.addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("title-input").value;
    const author = document.getElementById("author-input").value;
    const pages = document.getElementById("pages-input").value;
    const hasRead = document.getElementById("hasRead-input").value;
    createBook(title, author, pages, hasRead);
    const table = document.getElementById("table");
    table.innerHTML = arrayLoop();
    deleteProcess();
});

function deleteProcess() {
    const deleteButtons = Array.from(document.getElementsByClassName("deleteButtons"));
    deleteButtons.forEach((button) => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const targetID = event.target.id.replace("delete-", "");
            myLibrary.forEach((book, index) => {
                if (book.id === targetID) {
                    myLibrary.splice(index, 1);
                }
            });
            const table = document.getElementById("table");
            table.innerHTML = arrayLoop();
            deleteProcess();
        });
    });
}
deleteProcess();
