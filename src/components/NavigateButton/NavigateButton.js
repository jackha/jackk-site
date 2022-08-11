function openLink(link, linkname)
{
    var url = "/"
    var name = "_self"
    if (link) {
        url = link
    }
    if (linkname) {
        name = linkname
    }
    window.open(url, name)
}

//const ContactButton = (props) => {
function NavigateButton(props) {
    var contents = "Contact";
    var classes = "";
    if (props.text) {
        contents = props.text;
    }
    if (props.class) {
        classes = props.class;
    }

    return (
        <button button="success" className={classes} onClick={() => openLink(props.link, props.linkname)}>
            {contents}
        </button>
    )
}

export default NavigateButton;
