import React, { useState} from 'react';
import {Button} from "./Components/Button";
import styles from './Components/ComponentsStyles.module.scss'
import {ButtonEnumBorder} from './Components/ButtonEnum'
import {TitleUser} from "./Components/TitleUser";
import {NewPost} from "./Components/NewPost";
import {CreatePost} from "./Components/CreatePost";

export const posts:any=[]
const App: React.FC = () => {
  const [formValue,setFormValue]=useState()

  const handleChange=(e:any)=>{
    setFormValue(e.target.value)

  }

  const handleClick=()=>{
      posts.push(formValue)
    setFormValue("")
  }
  return (
    <div>
      <Button content={"text"} blueBorder={ButtonEnumBorder.blueBorder}  />
      {posts.map((date: string)=>
      <NewPost value={date}/>
      )}
        <CreatePost handleChange={handleChange}  value={formValue} handleClick={handleClick}/>

    </div>
  );
}

export default App;
