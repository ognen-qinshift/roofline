import React from "react"

function NoiseSVG(props) {
    return (
        <svg className={props.className}
            viewBox="0 0 200 200"
            xmlns='http://www.w3.org/2000/svg'>

            <filter id='noiseFilter'>
                <feTurbulence
                    type='fractalNoise'
                    baseFrequency={props.freq}
                    numOctaves='4'
                    stitchTiles='stitch' />
                <feColorMatrix type="saturate" values="0"></feColorMatrix>
            </filter>

            <rect
                width='100%'
                height='100%'
                filter='url(#noiseFilter)' />
        </svg>
    )
};

export default NoiseSVG;
