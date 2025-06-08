import Button from "../Button/Button";
import ContentDivider from "../../components/ContentDivider/ContentDivider";

import "./Contact.css";
import "../../components/Button/Button.css";

export default function Contact() {
    return (
        <section className='contact'>
        <ContentDivider/>

            <div className='contact-inner'>
                <h2 className='contact-title'>Get in Touch!</h2>
                <div className="btn-wrapper">
                    <Button className="btn red" title="Email Me" to="mailto: jenhedg@gmail.com"></Button>
                </div>
            </div>
        </section>
    )
  }