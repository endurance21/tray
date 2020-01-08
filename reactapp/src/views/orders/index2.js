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
            items:'',
            userData:''
        }
    }
    update = (update, itemId)=>{
    
        object[itemId-1].quantity = update + 1 ;

        console.log(object)
}
    fetchItems =()=>{

        let url2 = "http://localhost:3005/api/getgroupid";
        var user =  JSON.parse(localStorage.getItem('user'));
       let data2 ={
           member_id:user.userId
       }

       axios.post(url2 ,data2).then((res)=>{
           let group_id = res.data.group_id;
           let url = "http://localhost:3005/api/getinfo";
           axios.post(url,{group_id:group_id}).then((res)=>{
               let data  = res.data;
               this.setState({
                   userData:data
               })

               let url  = "http://localhost:3005/api/canteens/" + "rajeev_item_list";
               let data2 = {
                canteen_id:data.canteen_id
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



           })
       })


        
        
    }
    componentDidMount(){
        this.fetchItems();

    }
    submit  = ()=>{


        this.setState({
            myorders:object.map((item,index)=>(
                <li> {item.item_name} :{item.quantity}</li>
            ))
        });
        // let user =  JSON.parse(localStorage.getItem('user'));
       //  this.getOrderId();
        

        let url2 = "http://localhost:3005/api/getgroupid";
        var user =  JSON.parse(localStorage.getItem('user'));
       let data2 ={
           member_id:user.userId
       }
       axios.post(url2 ,data2).then((res)=>{
        let group_id = res.data.group_id;
        console.log(res.data)

        let url = "http://localhost:3005/api/getinfo";
        axios.post(url,{group_id:group_id}).then((res)=>{
            console.log(res)
            let data  = res.data;
            let url3  = "http://localhost:3005/api/order/orderId";
            let data3 = {
              order_name:order_name
    
            }
            console.log(data)

            axios.post(url3, data3).then((res)=>{
                let url  = "http://localhost:3005/api/orders/additem" ;

                object.map((item, index)=>{
                  let data4 = {
                      order_id:(data[0].order_id+1),
                      user_id:user.userId,
                      canteen_id:data[0].canteen_id,
                      item_id:(index+1),
                      quantity:item.quantity
                  } ;
                  axios.post(url,data4).then((res)=>{
                      console.log(res.data);
                      alert(res.data)
                  })
               })
      

       })

        })
    });

       
       
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
