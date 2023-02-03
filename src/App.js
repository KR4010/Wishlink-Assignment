import React from 'react';
import { ReactDOM } from 'react';
import { useState, useEffect } from 'react';



const App = () => {

    
    const [mouseXY, setMouseXY] = useState({ X: null, Y: null });
    useEffect(() => {
        function handle(e) {
        setMouseXY({
            X: e.pageX,
            Y: e.pageY
        });
        }
        document.images[0].addEventListener("click", handle);
    });
    
    const [tags, setTags] = useState([]);

    const addTag = (e) => {
    if (e.key === "Enter") {
        const newVal = e.target.value;
        if (newVal.length > 0) {
            setTags(prevTags => [...prevTags, newVal]);
            e.target.value = '';
        }
        }
    };

    const removeTag = (removedTag) => {
    setTags(prevTags => prevTags.filter((tag) => tag !== removedTag));
    }

    const [display, setDisplay] = useState(false);
    const TextBox = () => {
        return(
        <>
        <input onKeyDown={addTag} className = "textbox" type="text" placeholder="Text" style = {{position: 'absolute', left:mouseXY.X, top:mouseXY.Y}}/>
        </>
        );
    }

    return (
        <div className='App'>
        <h1>hello</h1>
        <TextBox/>
        <span><img src={require("./download.png")} id="img"></img></span> 
        {tags.map((tag, index) => {
          return (
            <div className = "tag" key={tag+index}>
              {tag} <span onClick={() => removeTag(tag)}>x</span>
            </div>
          );
        })}
        </div>
    );

}

export default App;