import React from 'react'
import { ThemeContext } from "../../services/context/Theme"
import { LanguageContext } from "../../services/context/Language"
import Switch from '@material-ui/core/Switch';
import { FaSun, FaMoon } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HeaderStyle.scss"

function Header(props) {
    const handleChange = (event) => {
        
      };
    return (
        <ThemeContext.Consumer>
            {value =>
                <LanguageContext.Consumer>
                    {user =>
                        <div className="navbar">
                            <div class="container navbar-aa night-mode-available">
                                    <div class="night-mode-button" >
                                        <input type="checkbox" class="checkbox" id="night-mode" onClick={() => {
                                            value.toggle()
                                            props.setTheme(value.theme)
                                            console.log(user)
                                        }} />
                                        <label for="night-mode" class="label">
                                            <FaMoon className="fa-moon" />
                                            <FaSun className="fa-sun" />
                                            <div class="blob"></div>
                                        </label>
                                    </div>
                                    <div className="lan">
                                        <p>English</p>
                                        <Switch
                                            onChange={()=>{user.toggleLanguage()}}
                                            name="checkedA"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                        <p>Farsi</p>
                                    </div>
                            </div>
                        </div>
                    }
                </LanguageContext.Consumer>
            }
        </ThemeContext.Consumer>
    )
}

export default Header
