import { useEffect, useState } from "react";
import s from './AddBook.module.scss'

function AddBook(props: any) {

    const [bookTitle, setBookTitle] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [isbn, setisbn] = useState('')
    const [bookTitleDirty, setBookTitleDirty] = useState(false)
    const [authorNameDirty, setAuthorNameDirty] = useState(false)
    const [isbnDirty, setisbnDirty] = useState(false)
    const [bookTitleError, setbookTitleError] = useState('cannot be empty')
    const [authorNameError, setAuthorNameError] = useState('cannot be empty')
    const [isbnError, setisbnError] = useState('cannot be empty')
    const [formValid, setFormValid] = useState(false)
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (bookTitleError || authorNameError || isbnError || !category) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [bookTitleError, authorNameError, isbnError, category])

    const newBook = {
        title: bookTitle,
        author: authorName,
        isbn: isbn,
        category: category
    }

    const addBook = () => {
        props.addBook(newBook)
    }

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'title':
                setBookTitleDirty(true)
                break
            case 'author':
                setAuthorNameDirty(true)
                break
            case 'isbn':
                setisbnDirty(true)
                break
        }
    }

    const titleHandler = (e: any) => {
        setBookTitle(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 10) {
            setbookTitleError('cannot be shorter than 3 or longer than 10')
            if (!e.target.value) {
                setbookTitleError('cannot be empty')
            }
        } else {
            setbookTitleError('')
        }
    }
    const authorHandler = (e: any) => {
        setAuthorName(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 10) {
            setAuthorNameError('cannot be shorter than 3 or longer than 10')
            if (!e.target.value) {
                setAuthorNameError('cannot be empty')
            }
        } else {
            setAuthorNameError('')
        }
    }
    const isbnHandler = (e: any) => {
        setisbn(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 10) {
            setisbnError('cannot be shorter than 3 or longer than 10')
            if (!e.target.value) {
                setisbnError('cannot be empty')
            }
        } else {
            setisbnError('')
        }
    }

    return (
        <div className={s.addBook}>
            <h1>Add book</h1>
            <form className={s.bookForm}>
                <div>
                    <label htmlFor="title">Book title</label>
                    {(bookTitleDirty && bookTitleError) && <div style={{color: "red"}}>{bookTitleError}</div>}
                    <input
                        onBlur={e => blurHandler(e)}
                        name="title"
                        type="text"
                        value={bookTitle}
                        onChange={e => titleHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author name</label>
                    {(authorNameDirty && authorNameError) && <div style={{color: "red"}}>{authorNameError}</div>}
                    <input
                        onBlur={e => blurHandler(e)}
                        name="author"
                        type="text"
                        value={authorName}
                        onChange={e => authorHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor="isbn">International Standard Book Number</label>
                    {(isbnDirty && isbnError) && <div style={{color: "red"}}>{isbnError}</div>}
                    <input
                        onBlur={e => blurHandler(e)}
                        name="isbn"
                        type="text"
                        value={isbn}
                        onChange={e => isbnHandler(e)}
                    />
                </div>
                <input
                    type="radio"
                    name="category "
                    id="radio1"
                    value="Fantasy"
                    onChange={e => setCategory(e.target.value)}
                />
                <label htmlFor="radio1">Fantasy</label>
                <input
                    type="radio"
                    name="category "
                    id="radio2"
                    value="Adventure"
                    onChange={e => setCategory(e.target.value)}
                />
                <label htmlFor="radio2">Adventure</label>
                <input
                    type="radio"
                    name="category "
                    id="radio3"
                    value="Romance"
                    onChange={e => setCategory(e.target.value)}
                />
                <label htmlFor="radio3">Romance</label>
                <button className={s.btn} disabled={!formValid} onClick={addBook}>
                    save
                </button>
            </form>
        </div>
    );
}

export default AddBook;