import React from 'react'
// import './script.js'
import './style.css'

// export function AddLibrary(urlOfTheLibrary) {
//     const script = document.createElement('script');
//     script.src = urlOfTheLibrary;
//     script.async = true;
//     document.body.appendChild(script);
// }

export default class Basic extends React.Component {
    constructor(props){
        super(props)
        this.ref = React.createRef();
        console.log("hello")
    }
    fileInput = document.querySelector(".file-input");
    previewImg = document.querySelector(".preview-img img");
    loadImage ()  {
        console.log("load image");
        let file = fileInput.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {
        resetFilterBtn.click();
        document.querySelector(".container").classList.remove("disable");
    });
    }
    render(){
        return(
        <div className="container">
        <h2>Basic Editor</h2>
        <div className="wrapper">
            <div className="editor-panel">
                <div className="filter">
                    <label className="title">Filters</label>
                    <div className="options">
                        <button id="brightness" className="active">Brightness</button>
                        <button id="saturation">Saturation</button>
                        <button id="inversion">Inversion</button>
                        <button id="grayscale">Grayscale</button>
                    </div>
                    <div className="slider">
                        <div className="filter-info">
                            <p className="name">Brighteness</p>
                            <p className="value">100%</p>
                        </div>
                        <input type="range" value="100" min="0" max="200"/>
                    </div>
                </div>
                <div className="rotate">
                    <label className="title">Rotate & Flip</label>
                    <div className="options">
                        <button id="left"><i className="fa-solid fa-rotate-left"></i></button>
                        <button id="right"><i className="fa-solid fa-rotate-right"></i></button>
                        <button id="horizontal"><i className='bx bx-reflect-vertical'></i></button>
                        <button id="vertical"><i className='bx bx-reflect-horizontal' ></i></button>
                    </div>
                </div>
            </div>
            <div className="preview-img">
                <img src="icon.png" alt="preview-img"/>
            </div>
        </div>
        <div className="controls">
            <button className="reset-filter" onClick={this.loadImage} ref={this.ref}>Reset Filters</button>
            <div className="row">
                <input type="file" className="file-input" accept="image/*" hidden/>
                <button className="choose-img">Choose Image</button>
                <button className="save-img">Save Image</button>
            </div>
        </div>
        {/* {AddLibrary('./components/script.js')} */}
    </div>
        )
    }
}