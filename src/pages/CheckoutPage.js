import React, { Component } from 'react';
import { Steps, Icon } from 'antd';
const Step = Steps.Step;


class CheckoutPage extends Component {
  render() {
    return (
      <div className="App">
        <Steps>
            <Step status="finish" title="My cart" icon={<Icon type="shopping-cart" />} />
            <Step status="finish" title="Login" icon={<Icon type="user" />} />
            <Step status="finish" title="Prescription" icon={<Icon type="solution" />} />
            <Step status="process" title="Pay" icon={<Icon type="home" />} />
            <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
          </Steps>

      </div>
    );
  }
}

export default CheckoutPage;
