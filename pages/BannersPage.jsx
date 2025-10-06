import React from 'react';
import Banners from '../components/soloProject/Banners';

export default function BannersPage (){
    const [type, setType] = React.useState("neutral");
    const [lines, setLines] = React.useState("singleLine");
    const [showBanner, setShowBanner] = React.useState(type, lines);
    const handleClick = (e) => {
        e.preventDefault();
        setShowBanner({type, lines});
    }

    return (
        <div className="banners-page">
            <h2>Banners</h2>
            <form onSubmit={handleClick} className="form">
                <label htmlFor="type">Select Banner Type: </label>
                <select id="type" name="type" onChange={(e) => setType(e.target.value)}>
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                    <option value="error">Error</option>
                    <option value="neutral">Neutral</option>
                </select>
                <label htmlFor="lines">Type lines:</label>
                <select id="lines" name="lines" onChange={(e) => setLines(e.target.value)}>
                    <option value ="singleLine">Single Line</option>
                    <option value ="multiLines">Multi Lines</option>
                </select>
                <button type="submit">Show Banner</button>
            </form>
            <Banners type={showBanner.type} lines={showBanner.lines} />
        </div>
    )
}