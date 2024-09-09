import styles from './css/Bar.module.scss'

export default function Bar(props){

    const title = props.title
    const maxHeight = props.height
    const width = props.width
    const value = props.value
    const heightForValue = maxHeight * value

    return (
        <div>
            <div className={styles['bar-title']}>{title}</div>
            <div className={styles['bar-outer']} style={{width, height:maxHeight}}>
                <div className={styles['bar-inner']} style={{width, height:heightForValue}}>
                </div>
            </div>
        </div>
    )
}