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


function NavigateButton(props) {
    var contents = "Contact";
    var classname = "";
    var id = "";
    if (props.text) {
        contents = props.text;
    }
    if (props.class) {
        classname = props.class;
    }
    if (props.id) {
        id = props.id;
    }

    return (
        <button button="success" className={classname} onClick={() => openLink(props.link, props.linkname)} id={id}>
            {contents}
        </button>
    )
}

export default NavigateButton;
