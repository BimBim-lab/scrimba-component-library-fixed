import React from "react";
import ToolTip from "../components/soloProject/ToolTip";


export default function ToastPopupPage(){
  const [variant, setVariant] = React.useState("neutral");
  const [tone, setTone]       = React.useState("solid");
  const [title, setTitle]     = React.useState("Archive notes");
  const [message, setMessage] = React.useState("Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.");
  const [show, setShow]       = React.useState(true);

  return (
    <div className="tooltip-page">
      <h2>Toast</h2>

      <form style={{display:"grid",gap:8,maxWidth:520,marginBottom:16}}>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title"/>
        <textarea rows={3} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message"/>
        <div style={{display:"flex",gap:8}}>
          <select value={variant} onChange={e=>setVariant(e.target.value)}>
            <option value="neutral">Neutral (dark)</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="green">Green</option>
          </select>
          <select value={tone} onChange={e=>setTone(e.target.value)}>
            <option value="solid">Solid</option>
            <option value="soft">Soft</option>
          </select>
          <label style={{display:"flex",alignItems:"center",gap:6}}>
            <input type="checkbox" checked={show} onChange={e=>setShow(e.target.checked)}/> Show
          </label>
        </div>
      </form>

      {show && (
        <ToolTip
          variant={variant}
          tone={tone}
          title={title}
          message={message}
          onClose={()=>setShow(false)}
        />
      )}
    </div>
  );
}