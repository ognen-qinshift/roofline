import React, { useEffect, useState } from "react";

function AnimatedNumber({ value, duration = 1200, visible }) {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!visible) {
            setDisplay(0);
            return;
        }
        // let start = 0;
        const end = parseInt(value.replace(/\D/g, ""), 10);
        if (isNaN(end)) return;
        const increment = end / (duration / 16);
        let current = 0;
        function animate() {
            current += increment;
            if (current < end) {
                setDisplay(Math.floor(current));
                requestAnimationFrame(animate);
            } else {
                setDisplay(end);
            }
        }
        animate();
    }, [value, duration, visible]);

    const prefix = value.startsWith("+") ? "+" : "";
    const suffix = value.endsWith("%") ? "%" : "";

    return (
        <span>
            {prefix}{display}{suffix}
        </span>
    );
}

export default AnimatedNumber;