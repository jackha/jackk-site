import NavigateButton from "../NavigateButton/NavigateButton"

const ContactButton = (props) => {
    return (
        <NavigateButton link="https://docs.google.com/forms/d/e/1FAIpQLSeG-PjEcmeTcSoKv5fKlr_GgnKeUHTcYFiGtivc4Un-LUIA_g/viewform?usp=sf_link" linkname="_blank" class={props.class} text={props.text}/>
    )
}

export default ContactButton;