import { useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Virtual } from 'swiper/modules'
import 'swiper/css'

import TuningWindow from './features/tuning/TuningWindow.js'
import SpeedoWindow from './features/speedo/SpeedoWindow.js'
import NavTabs from './features/navigation/NavTabs.js'
import {
    setCurrentNavIndex,
} from './features/navigation/navigationSlice.js'

function App() {

    const dispatch = useDispatch()
    let swiper = null

    const onSlideChange = (swiper) => {
        dispatch(setCurrentNavIndex(swiper.activeIndex))
    }

    const onNavTabsSelect = (idx) => {
        if(swiper) swiper.slideTo(idx)
    }

    const onSwiper = (s) => {
        swiper = s
    }

    const slides = () => {
        
        const s = [
            <SpeedoWindow/>,
            <TuningWindow/>
        ]

        return (
            s.map((slide, idx) => {
                return (
                    <SwiperSlide key={idx} virtualIndex={idx}>
                        {({ isActive }) => isActive ? slide : null}
                    </SwiperSlide>
                )
            })
        )
    } 

    return (
        <>
            <NavTabs onSelect={onNavTabsSelect}/>
            <Swiper
                modules={[Virtual]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={onSlideChange}
                onSwiper={onSwiper}
            >
                {slides()}
                {/* <SwiperSlide><SpeedoWindow/></SwiperSlide>
                <SwiperSlide><TuningWindow/></SwiperSlide> */}
            </Swiper>
        </>
    );
}

export default App;
