const dataSources = require('../../datasources');

module.exports =  {
    Query: {
        books() {
            return dataSources.bookService.getBooks();
        },
        book(parent, args) {
            return dataSources.bookService.getBook(args.id);
        }
    },

    Book: {
        publisher(parent) {
            return dataSources.bookService.getBookPublisher(parent.id);
        },
        authors(parent) {
            return dataSources.bookService.getBookAuthors(parent.id);
        }
    }
};