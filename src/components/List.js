import React, { Component } from 'react';

import ListItem from './list/ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    this.props.addItem('something');
  }

  render() {
    return (
      <div>
        <h1>List</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {this.props.items.map((item, index) => {
            return (
              <ListItem
                key={index}
                item={item}
                editItem={this.props.editItem}
                deleteItem={this.props.deleteItem}
              />
            );
          })}
        </div>
        <button className="btn btn-primary" onClick={this.addItem}>
          Add Item
        </button>
      </div>
    );
  }
}

export default List;
