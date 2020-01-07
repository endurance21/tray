import React from 'react'
import Styles from './main.module.css'
import Canteen from './index'
import { Redirect  } from 'react-router-dom' 
// var  axios  =  require('axios');

export default class ChooseCanteen extends React.Component{
   
        constructor(){
            super();
            this.state = {
               redirect:false
            }
        }


    redirectToOrderPage = ()=>{
        
    

    
      let inputs = window.document.querySelectorAll('input');
       inputs.forEach((item,index)=>{
        if(item.checked){

        this.props.setCanteenId(item.value)
        this.props.setOrderName(this.refs.orderName.value);
        this.props.createOrder();

        this.setState({
            redirect:<Redirect to="/orderPage/order"/>
        });

        }

     });



    }

    // componentDidMount(){

    // }

    
    
    render(){
        console.log("hello")
        return (

            <div>
           

                <form>
                <div className = {Styles.input}  >
                <input id = "rajeev" type="radio" name="gender" value="0" checked/><label for = "rajeev"> Rajeev </label>
                </div>
                <div className = {Styles.input}>
                <input  id = "cautelya" type="radio" name="gender" value="1"/> <label for = "cautelya">cautelya </label>
                </div>
                <div className = {Styles.input}>
                <input id = "kasturba" type="radio" name="gender" value="2"/> <label for = "kasturba">kasturba</label>
                </div>
                <div className = {Styles.input}>
                <input id = "govind" type="radio" name="gender" value="3" /><label for = "govind"> govind</label> 
                </div>
                <div className = {Styles.input}>
                <input id = "sarojni" type="radio" name="gender" value="4"/> <label for = "sarojni">  sarojni</label>
                </div>
                <div className = {Styles.input}>
                <input id = "azaad" type="radio" name="gender" value="5"/> <label for = "azaad"> azaad</label>
                </div>
                <label for="ordername"> NAME OF ORDER</label><input  id ="ordername" ref = "orderName" />
                </form>
                {/* <Link to = ""> */}
                          <button onClick = {this. redirectToOrderPage}> CREATE ORDER NOW </button> 
                    {/* </Link> */}

                    {this.state.redirect}
                    {/* <Redirect to ="/asdf"/> */}





                
            </div>     
        )
    }
}