import style from "./Contact.module.css"
import styleContainer from "../common/stiles/Container.module.css";

function Contact() {
    return (
        <div className={style.contact}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.form}>
                    <input type="text" id="c_name" className="form-control" name="c_name" placeholder="Name"
                           required=""/>
                    <input type="email" id="c_email" className="form-control" name="c_email" placeholder="E-mail"
                           required=""/>
                    <textarea className="form-control" id="c_message" name="c_message" rows="7"
                              placeholder="Your message"
                              required=""/>
                </form>
                <button type="submit" className={style.button}>Send Message</button>
            </div>
        </div>
    );
}

export default Contact;