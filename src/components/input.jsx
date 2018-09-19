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

  /*Handling submit locally for clearing input fields and passing form data to parent*/
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.searchTerm);
    this.setState({ searchTerm: "", listShow: false });
  };

  render() {
    /*Rendering the drop down list */
    let displayList = this.state.filteredData.map(option => {
      return (
        <li
          key={option.id}
          className="search-bar__list-item"
          onClick={() => this.handleSelect(option)}
        >
          {option.data}
        </li>
      );
    });
    return (
      <Fragment>
        <div className="search-bar">
          <form>
            <label>{this.props.label}</label>
            <fieldset className="col-lg-12 col-sm-12">
              <div className="search-bar__input--wrapper">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={this.handleChange}
                  value={this.state.searchTerm}
                  onClick={this.toggleList}
                />
                <i
                  className="search-bar__drop-down--icon"
                  onClick={this.toggleList}
                />
                <ul className={"search-bar__list--" + this.state.listShow}>
                  {this.state.listShow && displayList}
                </ul>
              </div>
            </fieldset>
            <button type="submit" name="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}
export default InputTypehead;
