import React from "react";

function Links(props) {

    function linkWithURLAsText(url) {
        return <a href={url}>{url}</a>
    }

    return (
        <div>
            <h3>Links</h3>
            {linkWithURLAsText(props.github)}
            {linkWithURLAsText(props.linkedin)}
        </div>
    );
}

export default Links;