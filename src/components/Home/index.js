import './styles.css'
import icon_logo from '../../assets/icon_pomodoro.svg'

export default function Home(){
    return(
        <div className='home-app'>

            <h2 className="statusPomodoro">Status</h2>

            <img src={icon_logo}></img>

            <span className="clockPomodoro">00:00</span>

            <div className='buttonStatus'>
                <button className='btn'></button>
            </div>

            

            
        </div>
    )
}