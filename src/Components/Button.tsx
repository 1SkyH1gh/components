import * as React from 'react'
import {FunctionComponent, ReactNode} from "react";
import styles from './ComponentsStyles.module.scss'
import classNames from 'classnames/bind';
import {ButtonEnumBorder} from './ButtonEnum'
export interface ButtonProps{
content:string,

        blackBorder?:string,
        redBorder?:string,
        yellowBorder?:string,
        greenBorder?:string,
        blueBorder?:string,
borderRadius?:string
leftItem?:ReactNode,
rightItem?:ReactNode,
    buttonSize?:string,
    textColor?:string
}

let CN=classNames.bind(styles)

export const Button:FunctionComponent<ButtonProps>=(props)=>{
    let className=CN({
        container:true,
        blackBorder:props.blackBorder,
        redBorder:props.redBorder,
        blueBorder:props.blueBorder,
        littleRadius:props.borderRadius,
        defaultRadius:props.borderRadius,
        superRadius:props.borderRadius,
        noRadius:props.borderRadius
    })


    return(
        <div className={className}>
           <p className={styles.childText}>{props.content}</p>
        </div>
    )

}