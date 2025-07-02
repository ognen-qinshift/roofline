import React from "react";

function TextToSpans({ text }) {
    return (
        <h2>
            {text.split("").map((char, i) => (
                <span key={i} className="letter">
                    {char}
                </span>
            ))}
        </h2>
    );
}

export default TextToSpans;