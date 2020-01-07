import React from 'react'
import Styles from './main.module.css'
import Canteen from './index'
// var  axios  =  require('axios');

export default class ChooseCanteen extends React.Component{

    rajeev = ()=>{
        this.props.setCanteen(0);
    }
    cautelya = ()=>{
        this.props.setCanteen(1);
    }
    govind = ()=>{
        this.props.setCanteen(2);
    }
    kasturba = ()=>{
        this.props.setCanteen(3);
    }
    sarojni = ()=>{
        this.props.setCanteen(4);
    }
    
    render(){
        return (

            <div>
                 {/* <button className ={Styles.button} onClick = {this.rajeev} > RAJEEV</button>
                 <button className ={Styles.button} onClick = {this.cautelya}  > CAUTELYA</button>
                 <button className ={Styles.button} onClick = {this.govind} > GOVIND</button>
                 <button className ={Styles.button} onClick = {this.kasturba} > KASTURBA</button>
                 <button className ={Styles.button} onClick = {this.sarojni} > SAROJNI</button> */}

                     {/* <input type = "radio">
                         Rajeev
                    </input>
                    <ul>

                     <li >
                         cautelya
                     </li>

                        govind
                     <li>
                        kasturba
                     </li>

                     <li>
                        sarojni
                     </li>
                     



                 </ul> */}


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
                  
               <button onClick = {this.createOrder}> CREATE ORDER NOW </button>
                </form>



                
            </div>     
        )
    }
}