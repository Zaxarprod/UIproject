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
                    <img src="https://i.pinimg.com/originals/1b/06/9d/1b069d30f458ddfe5e9048e492836505.jpg" />
                </div>
                <div className={style.item}>
                    <img src="https://im0-tub-ru.yandex.net/i?id=5873771dffc47d2f61b10e233ec2592d&ref=rim&n=33&w=200&h=150" />
                </div>
                <div className={style.item}>
                    <img src="https://im0-tub-ru.yandex.net/i?id=8d9a7009a5d99f666ca128724a1f5a9c&ref=rim&n=33&w=200&h=150" />
                </div>
                <div className={style.item}>
                    <img src="https://static.wixstatic.com/media/adb19a_fdc1fd1981fe45aebb094132a608b902.png" />
                </div>
                <div className={style.item}>
                    <img src="https://cdn.dribbble.com/users/1820/screenshots/5286154/pleo1.8_4x.png" />
                </div>
            </OwlCarousel>
        </div>
    )
}