import React, { useState } from "react"
import "./qna.css"
import qna from "../../data/qna.json"


function QnA() {
    const [openIdx, setOpenIdx] = useState(null);

    const toggle = idx => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <div className="faq-section">
            <h2 className="featured-caption">Frequently Asked <span>Questions</span></h2>

            <div className="gradient-noise"></div>


            <div className="container">

                <div className="faq-list">
                    {qna.map((item, idx) => (
                        <div className={`faq-item${openIdx === idx ? " open" : ""}`} key={idx}>
                            <button
                                className="faq-question"
                                onClick={() => toggle(idx)}
                                aria-expanded={openIdx === idx}
                                aria-controls={`faq-answer-${idx}`}
                            >
                                <span>{item.question}</span>
                                <span className="material-symbols-outlined chevron">
                                    {openIdx === idx ? "expand_less" : "expand_more"}
                                </span>
                            </button>
                            <div
                                className="faq-answer"
                                id={`faq-answer-${idx}`}
                                style={{
                                    maxHeight: openIdx === idx ? "500px" : "0",
                                    overflow: "hidden"
                                }}
                            >
                                <div className="faq-answer-inner">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QnA;