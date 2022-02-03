import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/'
})

export const booksAPI = {
    getBooks() {
        return instance.get('books')
            .then(response => {
                return response.data
            })
    },
    deleteBook(bookId: any) {
        return instance.delete(`books/${bookId}`)
    },
    addBook(book: any) {
        return instance.post('books', book)
    }
}