import React from 'react';
import Badges from '../components/soloProject/Badges';

export default function BadgesPage (){
    const [text, setText] = React.useState("Badges");
    const [type, setType] = React.useState("square");
    const [color, setColor] = React.useState("gray");

    const [show, setShow] = React.useState({text, color, type});
    const handleClick = (e) => {
        e.preventDefault();
        setShow({text, color, type});
    }
    return (
        <div className="badges-page">
            <h2>Badges</h2>
            <form onSubmit={handleClick} className="form">
                <input 
                    type="text" 
                    placeholder="Text"
                    value = {text}
                    onChange = {(e) => setText(e.target.value)}
                />
                <select value= {color} onChange={(e) => setColor(e.target.value)}>
                    <option value="gray">Gray</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                </select>
                <select value= {type} onChange={(e) => setType(e.target.value)}>
                    <option value="square">Square</option>
                    <option value="pill">Pill</option>
                </select>
                <button type="submit">Submit</button>
            </form>

            <div style={{marginTop: "20px"}}>
                <Badges color={show.color} type={show.type} >
                    {show.text}
                </Badges>
            </div>
        </div>
    )
}