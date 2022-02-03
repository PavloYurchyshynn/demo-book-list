import { NavLink } from "react-router-dom"
import s from './Dashboard.module.scss'

function Dashboard(props: any) {

    const deleteBook = (e: any, id: any) => {
        props.deleteBook(id)
    }

    let books = props.books

    let booksElements = books.map((e: any) =>
        <li>
            <p>{e.title}</p>
            <p>{e.author}</p>
            <p>{e.category}</p>
            <p>{e.ISBN}</p>
            <button className={s.btn}>edit</button>
            <button className={s.btn} onClick={(event) => deleteBook(event, e.id)}>delete</button>
        </li>)

    return (
        <div className={s.dashboard}>
            <ul className={s.books}>
                {booksElements}
            </ul>
        </div>
    );
}

export default Dashboard;