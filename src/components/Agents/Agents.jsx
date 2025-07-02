import React from "react";
import "./agents.css";
import AgentCard from "./AgentCard/AgentCard";
import agentsCards from "../../data/agentsCards.json";

function Agents() {
    return (
        <div className="agents-container" id="agents">

            <div className="bg-glow"></div>
            <div className="gradient-noise"></div>



            <div className="container">
                <h2>
                    Your Home Search, <br />
                    <span>Guided by Experts</span>
                </h2>
                <div className="agents-cards-container">
                    {agentsCards.map((agent, idx) => (
                        <AgentCard key={idx} {...agent} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Agents;