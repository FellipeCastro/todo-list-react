import { CiLight, CiDark  } from "react-icons/ci"

import './TodoMode.css'

export default function TodoMode(props) {
    
    return (
        <div className="mode_container">
            <h1>TODO</h1>

            <button className="icon_container" onClick={props.toggleMode}>
                {props.darkMode ? <CiLight /> : <CiDark />}
            </button>
        </div>
    )
}