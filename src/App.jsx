import React, { useState } from "react";
import './App.css';

const App =() =>{

  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  const handleOutput =(e) =>{
    const iframe= document.getElementById("output");

    //add html and css code

    iframe.contentDocument.body.innerHTML=
    htmlCode + "<style>" + cssCode + "</style>";

    //add js code

    iframe.contentWindow.eval(jsCode);
  };

  return (
    <div className="playground">

      {/* for ide */}

      <div className="left">

         {/* for html */}
        <label> HTML</label>
      <textarea name="html" onChange={(e) =>setHtmlCode(e.target.value)}>
      </textarea>

        {/* for css */}
        <label> CSS</label>
      <textarea name="css" onChange={(e) =>setCssCode(e.target.value)}>

      </textarea>

        {/* for javascript */}
        <label>JavaScript</label>
      <textarea name="javascript" onChange={(e) =>setJsCode(e.target.value)}>

      </textarea>


      </div>

       {/* for output */}

      <div className="right">
        <button onClick ={handleOutput}>Run</button>
        <iframe id="output"></iframe>

      </div>
      
    </div>
  );
};
export default App;
