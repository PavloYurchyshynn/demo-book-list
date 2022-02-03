import { NavLink } from "react-router-dom";
import s from './Header.module.scss'

function Header(props: any) {

    return (
        <div className={s.header}>
            <h1>Demo book list</h1>
            <NavLink to="/">
                DashBoard
            </NavLink>
            <NavLink to="/addbook">
                Add Book
            </NavLink>
        </div>
    );
}

export default Header;