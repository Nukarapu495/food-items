
import React, { Component } from "react";

class TableList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };

  this. developer = [
      { id: 1, name: "Ramu", role: "react developer" },
      { id: 2, name: "Raja", role: "java developer" },
      { id: 3, name: "Ravi", role: "fullstack developer" },
      { id: 4, name: "Annaya", role: "java developer" },
      { id: 5, name: "venkat", role: "java developer" },
      { id: 6, name: "Krishna", role: "react developer" },
      { id: 7, name: "prakash", role: "react developer" },
      { id: 8, name: "sai", role: "fullstack developer" },
      { id: 9, name: "subbu", role: "fullstack developer" },
    
    ];
  }

  handler1 = () => {
    const filteredData = this.developer.filter((ele) => (ele.role === "react developer"
    ));
    this.setState({ data: filteredData });
  };

  handler2 = () => {
    const filteredData = this.developer.filter((ele) => ( ele.role === "java developer"
    ));
    this.setState({ data: filteredData });
  };

  handler3 = () => {
    const filteredData = this.developer.filter
    ((ele) => (ele.role === "fullstack developer"
    ));
    this.setState({ data: filteredData });
  };

  handler4 = () => {
    this.setState({ data: this.developer });
  };

  render() {
    return (
      <div>
        <button onClick={this.handler1}>React Developer</button>
        <button onClick={this.handler2}>Java Developer</button>
        <button onClick={this.handler3}>Fullstack Developer</button>
        <button onClick={this.handler4}>All Developer</button>

     <table style={{ width: "100%" }} className="table w-50">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>role</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((ele) => (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.role}</td>
              </tr>
            ))
          }
          </tbody>
        </table> 
      </div>
    );
  }
}
export default TableList;
