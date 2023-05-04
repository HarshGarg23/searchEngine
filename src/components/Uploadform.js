import React, { useState } from 'react'
import Progressbar from './Progressbar';

const Uploadform = () => {

    const[file,setfile]=useState(null);
    const types=['image/png','image/jpg','image/jpeg  '];
    const[error,seterror]=useState(null);

    const changehandler=(e)=>{

        console.log('changed');
        let selected=e.target.files[0];
        if(selected && types.includes(selected.type)){
            setfile(selected);
            seterror('')
        }else{
            setfile(null);
            seterror('please select an image file (png or jpg)');
        }
        console.log(selected);
    }
  return (
    <form>
        <label>
        <input type='file' onChange={changehandler}/>
        <span>+</span>
        </label>
        <div className='output'>
            {error && <div className='error'>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <Progressbar file={file} setfile={setfile}/>}
        </div>
    </form>
  )
}

export default Uploadform