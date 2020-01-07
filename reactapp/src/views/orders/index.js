import React from 'react'
import Styles from './main.module.css'
import ChooseCanteen from '../canteens/chooseCanteen';

export default class OrderPage extends React.Component{
    constructor(){
        super();

        this.state = {
            canteenId:''
        }
    }

    setCanteen = (value)=>{
        this.setState({
            canteenId:value
        })
      console.log(value)
    }

    render(){
        return (
            <ChooseCanteen setCanteen = {this.setCanteen} ></ChooseCanteen>
        )
    } 
}