import { useEffect, useState } from "react";
import { booksAPI } from "../../api/api";
import AddBook from "./AddBook";

function AddBookContainer(props: any) {

    const addBook = (book: any) => {
        booksAPI.addBook(book)
    }

    return (
        <AddBook addBook={addBook} />
    );
}

export default AddBookContainer;