import React from "react";

function AgentCard({ image, name, role, rating, button }) {
    return (
        <div className="agent-card-wrap">
            <div className="agent-card-data">
                <div
                    className="agent-img"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                ></div>
                <div className="agent-content">
                    <h4>{name}</h4>
                    <p>{role}</p>
                    <div className="stars-rating">
                        <span className="material-symbols-outlined">
                            star
                        </span>
                        {rating}
                    </div>
                </div>
            </div>
            <a href="#" className="link btn btn-orange agents-btn">
                {button}
            </a>
        </div>
    );
}

export default AgentCard;