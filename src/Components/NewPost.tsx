import * as React from 'react'
import {FunctionComponent} from "react";
import {TitleUser} from "./TitleUser";
import styles from './UserStyles.module.scss'
export interface NewPostProps {
value:string
}

export const NewPost:FunctionComponent<NewPostProps>=(props)=>{
    return(
        <div className={styles.newPost}>
            <div className={styles.precontainer}>
           <TitleUser/>
           <div className={styles.postContent}>{props.value}</div>
            <div className={styles.postControl}>
                <div>Likes</div>
                <div>Comments</div>
            </div>
            </div>
        </div>
    )
}