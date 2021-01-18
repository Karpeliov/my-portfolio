import style from "./Header.module.css"
import Nav from "../Nav/Nav";

function Header() {
    return (
        <div className={style.header}>
            <div >
                <Nav/>
            </div>

        </div>
    );
}

export default Header;
