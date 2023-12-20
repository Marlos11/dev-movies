/* eslint-disable react/prop-types */
import { ContainerSlider } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
// eslint-disable-next-line react/prop-types
function Slider({ info, title }) {
    console.log(info, title)
    return (
        <ContainerSlider>
            <h2> teste </h2>
            <Swiper grabCursor spaceBetween={10} slidesPerView={'auto'} className='swiper'>
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ color: 'white' }}> {item.original_title} </div>
                    </SwiperSlide>

                ))}
            </Swiper>

        </ContainerSlider>
    )
}

export default Slider