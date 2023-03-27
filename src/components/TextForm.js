import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText]=useState('');
   const [words, setWords] = useState(0);
    const handleClick=()=>{
        console.log("uppercase was called");
        let newtext=text.toLocaleUpperCase();
        setText(newtext);
        props.alertOf.showAlert("uppercase was called","success");
        console.log(props);
    }
    const handleClickLower=()=>{
        console.log("uppercase was called");
        let newtext=text.toLocaleLowerCase();
        setText(newtext);
        props.alertOf.showAlert("lowercase was called","success");
        console.log(props);
    }
    const handleonChange=(e)=>{
            // let words=0;
            setText(e.target.value);
            let flag=false;
            let i;
            let wordcount=0;
            for(i=0;i<text.length;i++){
                if(flag===true && text.charAt(i)===' '){
                    // wordcount++;
                    flag=false;
                }
                else if(flag===false && text.charAt(i)!=' '){
                    flag=true;
                    wordcount++;
                }
            }
            setWords(wordcount);
    }
    const handleClickalt=()=>{
        console.log("alt was called");
        let newtext="";
        for(let i=0;i<text.length;i++){
            if(i%2!=0){
                newtext+=text.charAt(i).toLocaleUpperCase();
            }
            else{
                newtext+=text.charAt(i).toLocaleLowerCase();
            }
        }
        // console.log(newtext);
        setText(newtext);
        props.alertOf.showAlert("alternating button was called","success");
    }
    return (
    <>
        <div className="mb-3">
            <h1 className={`text-${props.mode=='light'?'dark':'light'}`}>{props.heading}</h1>
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="3"></textarea>
            <button className="btn btn-primary my-2" onClick={handleClick}>Covert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClickalt}>Covert to alternating case</button>
        </div>
        <div className="mb-3">
            <button className="btn btn-primary" onClick={handleClickLower}>Covert to lowercase</button>
        </div>
        <div className="container my-2">
            <h1 className={`text-${props.mode=='light'?'dark':'light'}`}>your text summary</h1>
            <p className={`text-${props.mode=='light'?'dark':'light'}`}>{text.length==0?0:words} words, {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something in textbox above"}</p>
        </div>
    </>
  )
}
