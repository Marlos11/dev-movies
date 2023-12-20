/* eslint-disable react/prop-types */
import Card from '../Card'
import { ContainerSlider } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
// eslint-disable-next-line react/prop-types
function Slider({ info, title }) {
    console.log(info, title)
    return (
        <ContainerSlider>
            <h2> Top Filmes </h2>
            <Swiper grabCursor spaceBetween={10} slidesPerView={'auto'} className='swiper'>
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                       <Card item={item}/>
                    </SwiperSlide>

                ))}
            </Swiper>

        </ContainerSlider>
    )
}

export default Slider