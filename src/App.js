import React from "react";
import { Button } from "react-bootstrap";
import Comp from "./component/Comp.js";

class App extends React.Component {
  state = {
    show: true,
  };

  
  

  render() {
    return (
      <div>
        {this.state.show && <Comp />}
        <Button onClick={() => this.setState({ show: !this.state.show })}>
          Click{" "}
        </Button>
        
      </div>
    );
  }
}
export default App;
