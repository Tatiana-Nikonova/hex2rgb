import React, {useState} from 'react';
import '../App.css';

function HexToRGB() {
    const [state, setState] = useState({
        value:''
    });
    const element = document.querySelector('.result');
    const handleChange = event => {
        const val = event.target.value.trim();
        setState({value: val});
        if (val.length === 7) {
            element.value='';
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(val);
            element.value = result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : 'Ошибка!';
            if (element.value !== 'Ошибка!') document.body.style.backgroundColor = element.value;
            else document.body.style.backgroundColor = 'red';
        }
    }

    return (
        <div className={"center"}>
            <input type={"text"} value={state.value} onChange={handleChange} />
            <input type={"text"} className={"result"}/>
        </div>
    )
}

export default HexToRGB;