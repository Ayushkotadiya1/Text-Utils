import React, {useState} from 'react'

function Textform(props) {
  const [text, setText] = useState(" ")
  
  const HandleUpClick = () =>{
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showAlert("Converted to uppercase!!","success")
  }

  const HandleLoClick = () =>{
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showAlert("Converted to lowercase!!","success")
  }

  const HandleClrClick = () =>{
    let newtext = ''
    setText(newtext)
    props.showAlert("text clear!!","success")
  }

  const HandleOnChange = (event) =>{
    setText(event.target.value)
  }

  const HandleCpyClick = () =>{
    var newtext = document.getElementById('myBox')
    console.log(newtext)
    newtext.select()
    navigator.clipboard.writeText(newtext.value)
    props.showAlert("text copied!!","success")
  }

  const HandleExtraSpaces = () =>{
    var newtext = text.split(/[ ]+/)
    setText(newtext.join(' '))
    props.showAlert("extra spaces removed!!","success")
  }

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3" >
          <textarea className="form-control" value={text} id="myBox" style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}}  rows="8" onChange={HandleOnChange}></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={HandleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={HandleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={HandleClrClick}>Clear text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={HandleCpyClick}>Copy text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
      <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes take to read this sentence</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something above to preview it here'}</p>
    </div>
    </>
  )
}

export default Textform
