import React,{useState} from 'react'



export default function TextForm(props) {

    const handleCopy = () => {
   let texti=document.getElementById("mybox");
   texti.select();
   navigator.clipboard.writeText(texti.value)
    }

    const handleClick = () =>{
     //console.log(" UpperCase Button CLicked"  + text);
     let newText=text.toUpperCase();
     setText(newText)
    }

    const handleclearClick = () =>{
      //console.log(" UpperCase Button CLicked"  + text);
      let newText="";
      setText(newText)
     }

    const handlelowerClick = () =>{
      //console.log(" UpperCase Button CLicked"  + text);
      let newText=text.toLowerCase();
      setText(newText)
     }
    const handleonChange = (event) => {
        //console.log ("onchanged");
        setText(event.target.value)
    }
    const[text,setText] = useState("");

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8"></textarea>
</div>
 <button className="btn btn-primary" onClick={handleClick}>
    Convert To UpperCase
 </button>
 <button className="btn btn-primary mx-3" onClick={handlelowerClick}>Convert To Lowercase</button>
 <button className="btn btn-primary mx-3" onClick={handleclearClick}>Clear Text</button>
 <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy text</button>
 

    </div>
    <div className="container my-3">
      <h2>Your text Summary</h2>
      <p>
        {text.split(" ").length} words and {text.length} chars
      </p>
      <p> {text.split(" ").length * 0.008} Minutes needed</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
