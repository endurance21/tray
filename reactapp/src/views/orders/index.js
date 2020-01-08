import React from 'react'
import Styles from './main.module.css'
import ChooseCanteen from '../canteens/chooseCanteen';
import {BrowserRouter as Router  , Route} from 'react-router-dom'
import Item from '../items/index'
import Member from '../member/index'
import Order from '../order/index'
var axios  = require('axios')

var canteen_id = '' ;
var order_name = '';
var object = [];
var order_hash = ''
var order_id = ''
var members = [];
var orders = []
export default class OrderPage extends React.Component{
    constructor(props){
        super();
          console.log(props)
        this.state = {
            canteenId:'',
            orderName:'',
            myorders:'',
            members:'',
            orderList:''
        }
    }

    componentDidMount(){

    }

    setCanteenId = (value)=>{

        canteen_id = value;
        console.log(value)
        this.setState({
            canteenId:value
        })

        console.log(this.state.canteenId)

    }

    update = (update, itemId)=>{
           


            object[itemId-1].quantity = update + 1 ;

            console.log(object)
    }
    setOrderName = (value)=>{
        order_name = value;
        console.log(order_name)

        this.setState({
            orderName:value
        })
    }

    createOrder = ()=>{
        console.log(canteen_id)
        let user  = JSON.parse(localStorage.getItem('user'));
        let groups = JSON.parse(localStorage.getItem('groups'));
        let url  = "http://localhost:3005/api/orders/create";
        console.log(order_name);
        
        let data = {
                order_name:order_name,
                user_id:user.userId,
                group_code:groups.groupcode,
                canteen_id:canteen_id,
                item_id:0
        }

        console.log(data)
        axios.post(url, data).then((res)=>{
               console.log(res.data)
        })
        this.fetchItems();
    }

   


    fetchItems =()=>{
       
       


        let url  = "http://localhost:3005/api/canteens/" + "rajeev_item_list";
        let data = {
            canteen_id:(canteen_id+1)
        }
        axios.get(url).then((res)=>{
            // console.log(res);
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

        this.fetchMembers();
        this.fetchOrders();

    }

    getOrderId = ()=>{
        
       
    }


    deleteItem = ()=>{
      
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
           order_name:this.state.orderName
 
         }
         let url3 = "http://localhost:3005/api/orders/delete//'"
 
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
        
        
    }


    fetchMembers = ()=>{
        // this.setState({
        //     members:''
        // })
        members = [];
        let url  = "http://localhost:3005/api/getgroupid2";
        let group_code = JSON.parse(localStorage.getItem('groups')).groupcode;
        let data = {
            group_code:group_code
        }
        console.log(group_code)
        axios.post(url, data).then((res)=>{
            console.log(res)
              let group_id = res.data.group_id;
              let url  = "http://localhost:3005/api/getmembers";
              let data = {
                  group_id:group_id
              }
              console.log(group_id)
              axios.post(url , data).then((res)=>{
                console.log(res.data)
                for (let i = 0; i < res.data.length; i++) {
                    members.push({
                        member_id : res.data[i].member_id ,
                    });
                   
                    this.setState({
                        members:members.map((member,index)=>(
                            <Member memberId = {member.member_id}></Member>
                        ))
                    })
                }
              })
        })
        
    }
    updateList =()=>{
        this.fetchMembers();
    }

    updateOrderList =()=>{
        this.fetchOrders();
    }
    fetchOrders = ()=>{
        orders =[];
        console.log("fetch oreder")
        let url2  = "http://localhost:3005/api/order/orderId";
        let data = {
          order_name:this.state.orderName

        }
           
        axios.post(url2, data).then((res)=>{
            order_id  = res.data[0].order_id;
            let url  = "http://localhost:3005/api/getorders";
            let data = {
                order_id:order_id
            }

            axios.post(url,data).then((res)=>{
                console.log(res.data) 
                for (let i = 0; i < res.data.length; i++) {
                    orders.push({
                        user_id:res.data[i].user_id ,
                        item_id:res.data[i].item_id,
                        quantity:res.data[i].quantity
                    });
                   
                    this.setState({
                        orderList:orders.map((order,index)=>(
                            <Order user_id = {order.user_id} item_id={order.item_id} quantity={order.quantity}></Order>
                        ))
                    })
                }
            })
        })
    }

    render(){
        console.log(this.state.members)
        return (
            <div>
            <Router>
                <Route path="/orderPage" exact>
                <ChooseCanteen setCanteenId = {this.setCanteenId} setOrderName = {this.setOrderName}  createOrder = {this.createOrder}></ChooseCanteen>
                { (this.state.canteenId)?this.state.canteenId:''}
                { (this.state.orderName)?this.state.orderName:''}

            </Route>
            <Route path = "/orderPage/order" exact>

               { (this.props.groupCode)?(<div>YOUR GROUP CODE IS : {this.props.groupCode}</div>):''}
               
                <div> your ORDER NAME IS : {order_name}</div>
             
                <div className={Styles.myorders}>
                  YOUR final Order
                                     {this.state.myorders}
               </div>

               <div className ={Styles.members}>
               <button className ={Styles.submit} onClick= {this.updateList}>update</button>

                <h3>Members List:</h3>
               {this.state.members}
            </div>
                <div className={Styles.itemList}>
                    :::::::CHOOSE YOUR ITEMS ::::::::
                   <ul>
                       {this.state.items}
                   </ul>
                  
               </div>  
               <button className ={Styles.submit} onClick= {this.submit}>SUBMIT MY ORDER</button>
               <div className={Styles.orderList}>
              <button className ={Styles.submit} onClick= {this.updateOrderList}>update</button>
                    ::::ALL ORDERS ::::::
              {this.state.orderList}
              </div>
 
            </Route>
          

          


            </Router>
            
            </div>
        )
    } 
}