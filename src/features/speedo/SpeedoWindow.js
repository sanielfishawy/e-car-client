import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RpmMeter from './RpmMeter'
import * as SS from './speedoSlice'
import Bar from './Bar'
import styles from './css/SpeedoWindow.module.scss'

export default function SpeedoWindow(props){

    const dispatch = useDispatch()
    useEffect( () => {
        const fetchData = async () => {
            dispatch(SS.fetchStatus())
        }
        fetchData()

        const intervalId = setInterval(fetchData, 100); 
        return () => clearInterval(intervalId);

    }, [dispatch])

    const desiredTorque = useSelector(SS.selectTorqueFract)
    const actualTorque = useSelector(SS.selectActTorque)

    return (
        <div className='ms-4 mt-4'>
            <div className={styles['flex-container']}>
                <div className={styles['flex-item']}>
                    <RpmMeter/>
                </div>
                <div className={styles['flex-item']}>
                    <Bar title='Desired Torque' width={75} height={250} value={desiredTorque}/>
                </div>
                <div className={styles['flex-item']}>
                    <Bar title='Actual Torque' width={75} height={250} value={actualTorque}/>
                </div>
            </div>
        </div>
    )
}