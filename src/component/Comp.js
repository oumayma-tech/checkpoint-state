import React from "react";


class Comp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          FullName: "Albert",
          bio: "Albert Einstein, (born March 14, 1879, Ulm, Württemberg, Germany—died April 18, 1955, Princeton, New Jersey, U.S.), German-born physicist who developed the special and general theories of relativity and won the Nobel Prize for Physics in 1921 for his explanation of the ",
          profession: "physist",
          imgSrc: (
            <img
              style={{ width: "240px", borderRadius: "20px" }}
              src="https://cdn.radiofrance.fr/s3/cruiser-production/2021/02/47e96b54-e6a6-4b36-b36f-2b85a7097056/838_753px-albert_einstein_colourised_portrait.jpg"
              alt=" photo"
            />
          ),
          date: new Date()
        };
}


componentDidMount=() =>{
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );}
  tick() {
    this.setState({
      date: new Date()
    });
  }
  
   componentWillUnmount=()=>{
     clearInterval(this.timerID);
   }


render() {
    
    return (
      
        <div className="main">
          <div className="string">
          <div> {this.state.imgSrc} </div>
            <h1>{this.state.FullName}</h1>,<h1>{this.state.profession}</h1>
            <h2>{this.state.bio}</h2>
            <h2> Time :{this.state.date.toLocaleTimeString()}.</h2>
            </div>
          </div>
         
        
    );
     
    
    }
     
}
export default Comp