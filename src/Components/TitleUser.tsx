import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './UserStyles.module.scss'
export interface TitleUserProps {

}

export const TitleUser:FunctionComponent<TitleUserProps>=()=>{
    return(
        <div className={styles.titleUser}>

         <div className={styles.User_info}>
            <h3 className={styles.user_nickname}>NickName</h3>
            <p className={styles.user_tag}>@tag</p>
         </div>

            <p className={styles.user_date}>18:26</p>

        </div>
    )
}