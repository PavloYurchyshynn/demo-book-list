import { useEffect, useState } from "react";
import { booksAPI } from "../../api/api";
import Dashboard from "./Dashboard";

function DashboardContainer(props: any) {

    const [books, setBooks] = useState<any>([])

    const fetchData = () => {
        booksAPI.getBooks()
            .then(response => {
                setBooks(response)
            })
    }

    const deleteBook = (bookId: any) => {
        booksAPI.deleteBook(bookId)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Dashboard books={books} deleteBook={deleteBook}/>
        </div>
    );
}

export default DashboardContainer;