import React from "react";
import '../styles/button.css'

function ReadMoreButton({ title }) {
    return (
        <div className="Btn-body">
            <div className="Btn-inner">
                {title}
            </div>
        </div>
    )
}

export default ReadMoreButton