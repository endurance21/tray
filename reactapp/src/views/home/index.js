import React from 'react'
import Styles from './main.module.css'
export default class Home extends React.Component{

    render(){
     return (
         <div className = {Styles.main}>

              <div >{ "WELCOME   " + this.props.username} </div> 
             <button className={Styles.button}>CREATE GROUP </button>
             <button className={Styles.button}>JOIN GROUP </button>
         </div>
     )
    }
}