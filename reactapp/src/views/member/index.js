import React from 'react'
import Styles from './main.module.css'
 export default class Member extends React.Component{

    render(){
        return (
            <div className={Styles.container}>

                <div className ={Styles.memberId}>
                  MEMBER ID==>{this.props.memberId}
                </div>

                <div className = {Styles.username}>
                {this.props.username} 
                </div>
            </div>
        )
    }
 }