import style from "./Project.module.css"

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}>
                {/*<img src={""} alt={"Image"}/>*/}
                <a className={style.projectButton} href=""> Check this out! </a>
            </div>
            <div className={style.title}>{props.title}</div>
            <div className={style.description}>{props.description}</div>

        </div>
    );
}

export default Project;