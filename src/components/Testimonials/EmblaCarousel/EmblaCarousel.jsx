import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = ({ options, testimonials }) => {
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {testimonials.map((t, idx) => (
                        <div className="embla__slide" key={idx}>
                            <div className='embla_slide-content'>
                                <div className='test-name-img'>
                                    <div
                                        className='testimonial-img'
                                        style={{
                                            backgroundImage: `url(${t.avatar})`
                                        }}
                                    ></div>
                                    <div className='test-name'>
                                        <h3>{t.name}</h3>
                                        <p>{t.location}</p>
                                        <div className="stars-rating">
                                            <span className="material-symbols-outlined">
                                                star
                                            </span>
                                            {t.rating}.0
                                        </div>
                                    </div>
                                </div>
                                <div className='test-content'>
                                    {t.quote}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel