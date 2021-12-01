import React, { Component } from 'react';

import List from './components/List';

import logo from './images/eda-logo-white.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['this', 'is', 'a', 'list'],
    };
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(item) {
    this.setState({ items: [...this.state.items, item] });
  }

  editItem(itemIndex, item) {
    const items = [...this.state.items];
    items[itemIndex] = item;
    this.setState({ items });
  }

  removeItem(itemIndex) {
    const items = [...this.state.items];
    items.splice(itemIndex, 1);
    this.setState({ items });
  }

  render() {
    return (
      <div className="container">
        <section className="row">
          <div className="col-2">
            <img src={logo} className="bg-dark img-fluid" alt="logo" />
          </div>
          <List
            items={this.state.items}
            addItem={this.addItem}
            editItem={this.editItem}
            removeItem={this.removeItem}
          />
        </section>
      </div>
    );
  }
}

export default App;
