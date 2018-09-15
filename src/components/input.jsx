import React, { Component, Fragment } from "react";

class InputTypehead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      data: props.users,
      filteredData: [],
      selected: "",
      listShow: false
    };
  }

  /*Receive new list of data for the drop down list*/

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.users });
  }

  /*Update the current search term and suggestions drop down*/

  handleChange = e => {
    let data = this.state.data;
    let newData = data.filter(item => {
      if (item.data.startsWith(e.target.value)) {
        return item;
      }
    });
    this.setState({
      filteredData: newData,
      searchTerm: e.target.value,
      listShow: true
    });
  };

  /* When a single item is selected from the drop down, Store the item in selected state locally and pass it back to the parent*/

  handleSelect = item => {
    this.setState({ searchTerm: item.data, selected: item, listShow: false });
  };

  /*Toggle list between show and hide states*/

  toggleList = () => {
    if (this.state.searchTerm.length === 0) {
      this.setState({
        filteredData: this.state.data,
        listShow: !this.state.listShow
      });
    }
    this.setState({ listShow: !this.state.listShow });
  };

  /*Rendering a dynamic toggle button with show and hide terms, button is kept outside in a function for preventing undesired effects in react*/
  toggleButton = () => {
    if (this.state.listShow === true) {
      return <button onClick={this.toggleList}>hide</button>;
    } else {
      return <button onClick={this.toggleList}>show</button>;
    }
  };

  /*Handling submit locally for clearing input fields and passing form data to parent*/

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  };

  /*Render method holds HTML/JSX,JS*/
  render() {
    /*Rendering the drop down list */
    let displayList = this.state.filteredData.map(option => {
      return (
        <li key={option.id} onClick={() => this.handleSelect(option)}>
          {option.data}
        </li>
      );
    });
    return (
      <Fragment>
        <section className="search-input">
          <form onSubmit={this.handleSubmit}>
            <label>{this.props.label}</label>
            <input
              type="text"
              placeholder="Search..."
              onChange={this.handleChange}
              value={this.state.searchTerm}
              onClick={this.toggleList}
            />
            {this.toggleButton()}
            <button type="submit">Submit</button>
            <ul>{this.state.listShow && displayList}</ul>
          </form>
        </section>
      </Fragment>
    );
  }
}
export default InputTypehead;
