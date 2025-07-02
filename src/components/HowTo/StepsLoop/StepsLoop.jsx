import React from "react";

const steps = [
    { icon: "event_available", text: "Schedule a visit" },
    { icon: "person", text: "Speak with an agent" },
    { icon: "description", text: "Submit your documents" },
    { icon: "vpn_key", text: "Sign & move in" },
    { icon: "public", text: "All online, all hassle-free" },
    { icon: "support_agent", text: "Personalized guidance" },
    { icon: "bolt", text: "Fast approval process" },
    { icon: "payments", text: "Transparent pricing" }
];

function StepsLoop() {
    return (
        <div className="looping-txt">
            {steps.map((step, i) => (
                <span key={i + steps.length} className="loop-step">
                    <span className="material-symbols-outlined">{step.icon}</span>
                    {step.text}
                </span>
            ))}
        </div>
    );
}

export default StepsLoop;