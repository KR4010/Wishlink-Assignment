import React from 'react';
import PropTypes from 'prop-types';
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
    const [Visibility, setVisibility] = useState('hidden')
    const [tags, setTags] = useState([{value:null,X:null,Y:null}]);

    const addTag = (e) => {
    if (e.key === "Enter") {
        const newVal = e.target.value;
        if (newVal.length > 0) {
            setTags(prevTags => [...prevTags, {value:newVal, X:mouseXY.X, Y:mouseXY.Y}]);
            e.target.value = '';
            setVisibility('hidden');
        }
        }
    };

    const removeTag = (removedTag) => {
    setTags(prevTags => prevTags.filter((tag) => tag !== removedTag));
    }

    const TextBox = () => {
        return(
        <>
        <input onKeyDown={addTag} className = "textbox" type="text" placeholder="" style = {{position: 'absolute', left:mouseXY.X, top:mouseXY.Y}}/>
        </>
        );
    }

    return (
        <div className='App'>
        <span><img 
        src={("https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg") } 
        id="img" onClick={()=>setVisibility('visible')} style={{height: 500, width: 600}}></img></span> 
        {Visibility=='visible'? <TextBox/> : <div/>}
        {tags.map((tag, index) => {
          return (
            <div className = "tag" key={tag+index}>
              {tag.value} {tag.X} {tag.Y}
              {tag.X!=null ? <span onClick={() => removeTag(tag)}> x </span> : <div/>}
            </div>
          );
        })}
        </div>
    );

}

export default App;