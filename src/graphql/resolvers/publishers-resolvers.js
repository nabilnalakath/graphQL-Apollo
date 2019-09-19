const dataSources = require('../../datasources');

module.exports = {
    Query: {
        publishers() {
            return dataSources.bookService.getPublishers();
        },
        publisher(parent, args) {
            return dataSources.bookService.getPublisher(args.id);
        }
    },

    Publisher: {
        books(parent) {
            return dataSources.bookService.getPublisherBooks(parent.id);
        }
    }
};
