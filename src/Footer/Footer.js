import style from "./Footer.module.css"
import styleContainer from "../common/stiles/Container.module.css";

function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Alex Karpeliov</h2>
                <div className={style.footerContent}>
                    <div className={style.footerBlock}>1</div>
                    <div className={style.footerBlock}>2</div>
                    <div className={style.footerBlock}>3</div>
                    <div className={style.footerBlock}>4</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;