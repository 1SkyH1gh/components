import * as React from 'react'
import { FunctionComponent} from "react";
import styles from './CreatePostStyles.module.scss'
export interface CreatePostProps {
handleChange:(e:any)=>void,
    value:string,
    handleClick:()=>void
}

export const CreatePost:FunctionComponent<CreatePostProps>=(props)=>{
    return(
        <div className={styles.createPost}>
           <div className={styles.margin}>
            <div className={styles.writePost}>
              <form className={styles.formPost}>
                <input className={styles.textarea} onChange={props.handleChange} value={props.value}/>
                 </form>
            </div>
            <div className={styles.control}>
                <div className={styles.add}>
                    <p>A</p>
                    <p>B</p>
                    <p>+</p>
                 </div>
            <div className={styles.send} onClick={props.handleClick}>Send</div>
            </div>
           </div>
        </div>
    )
}