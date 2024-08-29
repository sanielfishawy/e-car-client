import {React, useRef} from 'react'
import { useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import TuningWindow from './features/tuning/TuningWindow.js'
import SpeedoWindow from './features/speedo/SpeedoWindow.js'
import NavTabs from './features/navigation/NavTabs.js'
import {
    setCurrentNavIndex,
} from './features/navigation/navigationSlice.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


function App() {
    const dispatch = useDispatch()
    const swiperRef = useRef(null)

    const onSlideChange = (swiper) => {
        dispatch(setCurrentNavIndex(swiper.activeIndex))
    }

    const onNavTabsSelect = (idx) => {
        if (swiperRef && swiperRef.current) {
            swiperRef.current.slideTo(idx)
        }
    }

    return (
        <Container>
            <NavTabs onSelect={onNavTabsSelect}/>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={onSlideChange}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
            >
                <SwiperSlide><SpeedoWindow/></SwiperSlide>
                <SwiperSlide><TuningWindow/></SwiperSlide>
            </Swiper>
        </Container>
    );
}

export default App;
