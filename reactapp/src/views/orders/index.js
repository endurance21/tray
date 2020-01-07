import React from 'react'
import Styles from './main.module.css'
import ChooseCanteen from '../canteens/chooseCanteen';
import {BrowserRouter as Router  , Route} from 'react-router-dom'
import Item from '../items/index'
var axios  = require('axios')

var canteen_id = '' ;
var order_name;
export default class OrderPage extends React.Component{
    constructor(props){
        super();
          console.log(props)
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
        order_name = value;
        console.log(order_name)

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
            console.log(res.body)
        })
    }

    render(){
        console.log(this.props.groupCode)
        return (
            <div>
            <Router>
                <Route path="/orderPage" exact>
                <ChooseCanteen setCanteenId = {this.setCanteenId} setOrderName = {this.setOrderName}  createOrder = {this.createOrder}></ChooseCanteen>
                { (this.state.canteenId)?this.state.canteenId:''}
                { (this.state.orderName)?this.state.orderName:''}

            </Route>
            <Route path = "/orderPage/order" exact>
                  {/* {this.fetchItems()} */}
               { (this.props.groupCode)?(<div>YOUR GROUP CODE IS : {this.props.groupCode}</div>):''}
               
                <div> your ORDER NAME IS : {order_name}</div>

                <div className={Styles.itemList}>
                    :::::::CHOOSE YOUR ITEMS ::::::::
                  <Item itemId = "1" price = "50rs" description = "pizza" ></Item>
                  <Item itemId = "2" price = "100rs" description = "burger" ></Item>
                  <Item itemId = "3" price = "20rs" description = "asdf" ></Item>
                  <Item itemId = "4" price = "500rs" description = "akjasf" ></Item>
               </div>
               <button className ={Styles.submit}>SUBMIT MY ORDER</button>

            </Route>
            </Router>
            
            </div>
        )
    } 
}