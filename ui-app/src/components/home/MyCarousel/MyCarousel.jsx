import React, {useRef} from "react"
import style from './MyCarousel.module.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const MyCarousel = () => {
    const carouselRef = useRef()
    let nextSlide = (e) => {
        if(e.target.deltaY > 0){
            carouselRef.current.next(700)
        }else{
            carouselRef.current.prev(700)
        }

    }
    return (
        <div className={style.carousel}>
            <h1 className={style.header}>CREATE YOUR UI</h1>
            <OwlCarousel
                ref={carouselRef}
                className="owl-theme"
                loop
                center
                autoWidth
                autoplay
                autoplayTimeout={5000}
                smartSpeed={700}
                margin={10}
                style={{width:'97%'}}
                onWheel={nextSlide}
            >
                <div className={style.item}>

                </div>
                <div className={style.item}>

                </div>
                <div className={style.item}>

                </div>
                <div className={style.item}>

                </div>
                <div className={style.item}>

                </div>
            </OwlCarousel>
        </div>
    )
}