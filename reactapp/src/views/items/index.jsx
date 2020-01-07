import React from 'react'
import Styles from './main.module.css'


export default class Item extends React.Component {
    constructor(props) {
        super();
        this.itemId = props.itemId;
        this.price = props.price;
        this.description = props.description;
        this.image = props.image;
        this.quantity = 0;

        this.state ={
            counter:0,

        }
    }


 increase = ()=>{
 this.setState((state, props)=>{
   return {   counter:state.counter + 1}
 })

  this.props.update(this.state.counter , this.itemId)
 }

 decrease = ()=>{
     if(this.state.counter > 0)
    this.setState((state, props)=>{
        return {   counter:state.counter - 1}
      })

 this.props.update(this.state.counter , this.itemId)
 }

    render() {

        console.log(this.state)

        return (
            <div className={Styles.container}>
                <div className={Styles.itemId}>
                    ITEM ID: {this.itemId}
                </div>
                <div className={Styles.price}>
                    PRICE:  {this.price}
                </div>
                <div className={Styles.description}>
                   ABOUT: {this.description}
                </div>
                {/* <div className={Styles.image}>
                    <img src={this.image}> </img>
                </div> */}

                <div className ={Styles.counter}>
                    {this.state.counter}
                </div>

                <button  onClick ={ this.increase} className={Styles.button}>
                    +
                </button>
                <button  onClick = {this.decrease} className={Styles.button}>
                    -
                </button>
            </div>

        )
    }
}