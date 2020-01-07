import React from 'react'
import Styles from './main.module.css'
import  { Link } from 'react-router-dom'
export default class Home extends React.Component{

    createGroup = ()=>{


    }

    joinGroup = ()=>{

    }
    
    render(){
     return (
         <div className = {Styles.main}>

             <div >{ "WELCOME   " + this.props.username} </div> 
             <Link to ="/createGroup"> <button className={Styles.button} onClick = {this.createGroup}>CREATE GROUP </button></Link>
             <Link  to = "/joinGroup"> <button className={Styles.button} onClick = {this.joinGroup}>JOIN GROUP </button> </Link>

         </div>
     )
    }
}