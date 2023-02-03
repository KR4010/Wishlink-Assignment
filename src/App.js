import React from 'react';
import { ReactDOM } from 'react';
import { useState } from 'react';

const TextBox = () => {
    return (
        <>
        <input className = "textbox" type="text" placeholder="Text"/>
        </>
    );
}

const App = () => {
    
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

  
    return (
        <div className='App'>
        <h1>hello</h1>
        <span><img src={require("./download.png")}></img></span>
        {tags.map((tag, index) => {
          return (
            <div key={tag+index}>
              {tag} <span onClick={() => removeTag(tag)}>x</span>
            </div>
          );
        })}
        <input onKeyDown={addTag} />
        </div>
    );

}

export default App;