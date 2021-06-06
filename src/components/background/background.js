import React from 'react'
import './style.css';
class Background extends React.Component{
    constructor(props){
        super(props);

        this.state={
            selectedcolor: '#fff'
        }
    }
    changebackgroundcolor=(event) => {



        
        this.setState({
            selectedcolor:event.target.value
        })
    

    };
    render = () => {
        return (
            <div style={
                {
                    backgroundColor: this.state.selectedcolor
                }
                }className="back-container">
                 <div className="color-box">
                    <h2>Choose a color</h2>
                    <input onChange ={this.changebackgroundcolor}type="color"/>
                    <p>{this.state.selectedcolor}</p>

                </div>

            </div>
        );
    }
}
export default Background;