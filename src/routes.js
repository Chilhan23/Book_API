// Perhatikan nama fungsi harus sesuai dengan di handler.js
const { 
    addBookHandler, 
    getAllBooksHandler, 
    getBookByIdHandler, 
    editBookByIdHandler, 
    deleteBookByIdHandler 
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler, // Pastikan pakai 's'
    },
    {
        method: 'GET',
        path: '/books/{bookId}', // Gunakan {bookId} agar sesuai dengan request.params di handler
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}', // Gunakan {bookId}
        handler: editBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}', // Gunakan {bookId}
        handler: deleteBookByIdHandler,
    }
];

module.exports = routes;