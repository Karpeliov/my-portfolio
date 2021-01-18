import style from "./Main.module.css"
import styleContainer from "../../src/common/stiles/Container.module.css"


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.introText}>
                    <span>Hi there!</span>
                    <h1>Alex Karpeliov</h1>
                    <p>Front-End Developer</p>
                </div>
                <div className={style.introPhoto}></div>
            </div>
        </div>
    );
}

export default Main;