import React from 'react'
import Styles from './main.module.css'
import ChooseCanteen from '../canteens/chooseCanteen';
import {BrowserRouter as Router  , Route} from 'react-router-dom'
import Item from '../items/index'
var axios  = require('axios')

var canteen_id = '' ;
var object = [];
export default class OrderPage extends React.Component{
    constructor(){
        super();

        this.state = {
            canteenId:'',
            orderName:''
        }
    }

    setCanteenId = (value)=>{

        canteen_id = value;
        console.log(value)
        this.setState({
            canteenId:value
        })

        console.log(this.state.canteenId)

    //   console.log(value)
    }

    createOrder = ()=>{
        console.log(canteen_id)
        let user  = JSON.parse(localStorage.getItem('user'));
        let groups = JSON.parse(localStorage.getItem('groups'));
        let url  = "http://localhost:3005/api/orders/create";
        // console.log(user, groups);
        
        let data = {
                order_name:this.state.orderName,
                user_id:user.userId,
                group_code:groups.groupcode,
                canteen_id:canteen_id,
                item_id:0
        }

        console.log(data)
        axios.post(url, data).then((res)=>{
               console.log(res.body)
        })
        this.fetchItems();
    }

    setOrderName = (value)=>{
        this.setState({
            orderName:value
        })
    }


    fetchItems =()=>{
        let url  = "http://localhost:3005/api/canteens/" + "rajeev_item_list";
        let data = {
            canteen_id:(canteen_id+1)
        }
        axios.get(url).then((res)=>{
            console.log(res);
            for (let i = 0; i < res.data.length; i++) {
                object.push({
                    item_id : res.data[i].item_id ,
                    item_name : res.data[i].item_name,
                    item_price : res.data[i].item_price,
                });
                console.log(object);

                // var Items = function(){
                //     return(
                //         object.map((object,index)=>(
                //             <Item itemId = {Object.item_id} price = {Object.item_price} description = {Object.item_name} ></Item>
                //         ))
                //     )
                // }
                this.setState({
                    items: object.map((object,index)=>(
                        <Item itemId = {object.item_id} price = {object.item_price} description = {object.item_name} ></Item>
                    ))
                })
            }
        })
    }

    render(){
        return (
            <div>
            <Router>
                <Route path="/orderPage" exact>
                {/* { (this.props.groupCode)?(<div>YOUR GROUP CODE IS : {this.props.groupCode}</div>):''} */}
                <ChooseCanteen setCanteenId = {this.setCanteenId} setOrderName = {this.setOrderName}  createOrder = {this.createOrder}></ChooseCanteen>
                { (this.state.canteenId)?this.state.canteenId:''}
                { (this.state.orderName)?this.state.orderName:''}

            </Route>
            <Route path = "/orderPage/order" exact>
                  {/* {this.fetchItems()} */}
                <div> your ORDER NAME IS : {this.state.orderName}</div>

                <div className={Styles.itemList}>
                    :::::::CHOOSE YOUR ITEMS ::::::::
                   
                   {this.state.items}
                  
                  {/* <Item itemId = "2" price = "100rs" description = "burger" ></Item>
                  <Item itemId = "3" price = "20rs" description = "asdf" ></Item>
                  <Item itemId = "4" price = "500rs" description = "akjasf" ></Item> */}
               </div>

            </Route>
            </Router>
            
            </div>
        )
    } 
}