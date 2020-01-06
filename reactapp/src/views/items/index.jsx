import React from 'react'
import Styles from './main.module.css'
export default class Item extends React.Component {
    constructor() {
        super();
        this.itemId = this.props.itemId;
        this.price = this.props.price;
        this.description = this.props.description;
        this.image = this.props.image;
    }




    render() {
        return (
            <div>
                <div className={Styles.itemId}>
                    {this.itemId}
                </div>
                <div className={Styles.price}>
                    {this.price}
                </div>
                <div className={Styles.description}>
                    {this.description}
                </div>
                <div className={Styles.image}>
                    <img src={this.image}> </img>
                </div>
            </div>

        )
    }
}