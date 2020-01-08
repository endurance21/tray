import React from 'react'
import Styles from './main.module.css'


export default class Order extends React.Component{
    constructor(props){
        super();
        this.user_id = props.user_id;
        this.item_id = props.item_id;
        this.quantity = props.quantity;
    }

    render(){
        return (
            <div className ={Styles.container}>
               <div className ={Styles.user_id}>
                 USER ID::{this.user_id}
               </div>
               <div className ={Styles.item_id}>
                 ITEM ID::{this.item_id}
               </div>
               <div className ={Styles.quantity}>
                QUANTITY::{this.quantity}
               </div>
            </div>
        )
    }
}



