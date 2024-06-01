import React,{useState} from 'react'



export default function TextForm(props) {

    const handleClick = () =>{
     //console.log(" UpperCase Button CLicked"  + text);
     let newText=text.toUpperCase();
     setText(newText)
    }
    const handleonChange = (event) => {
        //console.log ("onchanged");
        setText(event.target.value)
    }
    const[text,setText] = useState("HiiALL");

  return (
    <div>
        <h1>{props.heading}</h1>
      
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
 <button className="btn btn-primary" onClick={handleClick}>
    Convert To UpperCase
 </button>

    </div>
  )
}
