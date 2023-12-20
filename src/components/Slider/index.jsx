import { ContainerSlider } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
function Slider({ info, title }) {
    return (
        <ContainerSlider>
            <h2>{title} </h2>
            <Swiper grabCursor spaceBetween={10} slidesPerView={'auto'} className='swiper'>
                <SwiperSlide></SwiperSlide>
            </Swiper>

        </ContainerSlider>
    )
}

export default Slider