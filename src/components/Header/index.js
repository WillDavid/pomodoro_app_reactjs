import './styles.css'
import github_logo from '../../assets/github_logo.svg'
import tomato_logo from '../../assets/tomato_logo.svg'

export default function Header(){
    return(
        <div className="header-app">
            <div className='navBar-logo'>
                <img src={tomato_logo} />
                <h2 className='h2-logo'>Tomato Juice Pomodoro</h2>
            </div>

            <div className='navBar-options'>
                <a href='#'>Settings</a>
                <a href='#'>Histórico</a>
                <a href='#'>
                    <img src={github_logo} /> <span>Github</span>
                </a>
            </div>
        </div>
    )
}