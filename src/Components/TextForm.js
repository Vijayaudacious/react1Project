import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("UpperCase are click" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        // console.log("UpperCase are click" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }


    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = 'new text'; // wrong way to change the state
    // setText = 'new text'; // right way to change the state

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
                <textarea className="form-control" placeholder='Enter a Lorem' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
        
        </div>
        
        <div className="container">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} word and {text.length} charaacters </p>
        <p>{ 0.008 * text.split(" ").length} Minutes  read</p>
         <h2>Previwe</h2>
         <p>{text}</p>

        </div>



        </>
    )
}
