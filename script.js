function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        return this.title;
    }
};

const hyperion = new Book('Hyperion', 'Dan Simmons', 480, false);
console.log(hyperion.info());
