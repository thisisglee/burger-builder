import React, { Component } from 'react';

import Aux from '../../../hoc/Auxilliary/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // componentDidUpdate() {
  //   console.log('[OrderSummary] Component Did update');
  // }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{' '}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>Price: ${this.props.price.toFixed(2)}</p>
        <p>Tax: ${(this.props.price * 0.13).toFixed(2)}</p>
        <p>
          <strong>Total Price: ${(this.props.price * 1.13).toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchasedCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchasedContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
