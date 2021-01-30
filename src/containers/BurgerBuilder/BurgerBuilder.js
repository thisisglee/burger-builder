import React, { Component } from 'react';

import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';

export class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
