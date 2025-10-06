import React from 'react';
import ToastPopup from '../components/soloProject/ToastPopup';

export default function ToastPopupPage (){
    const [variant, setVariant] = React.useState("success");

    const presets = {
        success: { title: "Success!", description: "Your operation was completed successfully." },
        warning: { title: "Warning!", description: "There might be an issue with your submission." },
        info:    { title: "Information", description: "Here is some important information for you." },
        error:   { title: "Error!", description: "There was an error processing your request." }
    };
    const [title, setTitle] = React.useState(presets[variant].title);
    const [message, setMessage] = React.useState(presets[variant].description);
    const [showToast, setShowToast] = React.useState({ variant, title, message });
    const handleClick = (e) => {
        e.preventDefault();
        setShowToast({ variant, title, message });
    }
    return (
    <div className="toastpopup-page">
      <h2>Toast Popups</h2>
        <form className="form" onSubmit={handleClick}>
            <label htmlFor="variant">Select Variant: </label>
            <select id="variant" name="variant" onChange={(e) => {
                setVariant(e.target.value);
                setTitle(presets[e.target.value].title);
                setMessage(presets[e.target.value].description);
            }}>
                <option value="success">Success</option>
                <option value="info">Info</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
            </select>
            <button type="submit">Show Toast</button>
        </form>
        <div style={{marginTop: "20px"}}>
            <ToastPopup 
                variant={showToast.variant} 
                title={showToast.title} 
                message={showToast.message} 
                onClose={() => setShowToast({ ...showToast, message: "" })} 
            />
        </div>
    </div>

  );
}