import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"],
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this)
  //   }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return this.state.tags.map((tag, index) => <li key={index}>{tag}</li>);
  }

  //   bind event handler using function we use other way also constructor in above like in normal method


  render() {
    return (
      <React.Fragment>
        <div>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formateCount()}
          </span>
          <button
            onClick={() => this.props.handleIncrement(this.props.counter)}
            className="btn btn-primary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.handleDecrement(this.props.counter)}
            className="btn btn-primary btn-sm m-2"
            disabled={this.decrementDisable()}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger m-2 btn-sm"
          >
            X
          </button>
          {/* <ul>{this.renderTags()}</ul> */}
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 text-bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  decrementDisable() {
    const { value } = this.props.counter;
    return value <= 0 ? true : false;
  }

  styles = {
    fontWeight: "bold",
  };
}

export default Counter;
