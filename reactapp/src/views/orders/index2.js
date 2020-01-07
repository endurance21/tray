import React from 'react'
import Styles from './main.module.css'
import {BrowserRouter as Router  , Route} from 'react-router-dom'
import Item from '../items/index'
var axios  = require('axios')
var canteen_id = '' ;
var order_name = '';
var object = [];
var order_hash = ''
var order_id = ''
export default class OrderPage2 extends React.Component{
    constructor(props){
        super();
        this.state= {
            myorders:'',
            items:''
        }
    }
    update = (update, itemId)=>{
    
        object[itemId-1].quantity = update + 1 ;

        console.log(object)
}
    fetchItems =()=>{
        let url  = "http://localhost:3005/api/canteens/" + "rajeev_item_list";
        let data = {
            canteen_id:(canteen_id+1)
        }
        axios.get(url).then((res)=>{
            for (let i = 0; i < res.data.length; i++) {
                object.push({
                    item_id : res.data[i].item_id ,
                    item_name : res.data[i].item_name,
                    item_price : res.data[i].item_price,
                    quantity:0
                });
               
                this.setState({
                    items: object.map((object,index)=>(
                        <Item itemId = {object.item_id} price = {object.item_price} description = {object.item_name}  update = {this.update}></Item>
                    ))
                })
            }
        })
    }
    submit  = ()=>{


        this.setState({
            myorders:object.map((item,index)=>(
                <li> {item.item_name} :{item.quantity}</li>
            ))
        });
        let url  = "http://localhost:3005/api/orders/additem" ;
        let user =  JSON.parse(localStorage.getItem('user'));
       //  this.getOrderId();
        let url2  = "http://localhost:3005/api/order/orderId";
        let data = {
          order_name:order_name

        }
        // let url3 = "http://localhost:3005/api/orders/delete//'"

        axios.post(url2, data).then((res)=>{
                 order_id  = res.data[0].order_id;

                 object.map((item, index)=>{
                   let data = {
                       order_id:order_id,
                       user_id:user.userId,
                       canteen_id:canteen_id,
                       item_id:(index+1),
                       quantity:item.quantity
                   } ;
                   axios.post(url,data).then((res)=>{
                       console.log(res.data);
                   })
                })
       

        })
       
       // this.getOrderId();
       
   }


    render(){
        return (

            <div>
                <div> your ORDER NAME IS : {this.props.order_name}</div>
                <div className={Styles.myorders}> 
                Final Order Will APPEAR HERE
                   {this.state.myorders}
               </div>
                <div className={Styles.itemList}>
                    :::::::CHOOSE YOUR ITEMS ::::::::
                   <ul>
                       {this.state.items}
                   </ul>
                  
               </div>

   
               <button className ={Styles.submit} onClick= {this.submit}>SUBMIT MY ORDER</button>
       </div>
        )
    }
}
