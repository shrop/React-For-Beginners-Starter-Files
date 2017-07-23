import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // A way to bind methods to the component class.
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  // Go to the store URL based on the user input.
  goToStore(event) {
    // Prevent the default form submission so the page doesn't relad.
    event.preventDefault();
    // Get the store input value from the user.
    const storeId = this.storeInput.value;
    // Redirect to the store page.
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        { /* JSX example comment */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

// Add the router to the StorePicker component context.
// The current video in the React for Beginners course says to use
// React.PropTypes, but React now recommends using the prop-types package.
StorePicker.contextTypes = {
  router:PropTypes.object
}

export default StorePicker;
