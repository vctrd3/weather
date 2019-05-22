import React, {Component} from 'react';
import './index.css';

class Form extends Component {
    render(){
    return(
            <div className="container center">
                <form onSubmit={this.props.getWeather}>
                    <div className="row">
                    <div className="input-field col s8 offset-s2">
                        <label>Enter City</label>
                        <input type="text" name="city"></input>
                    </div></div>
                    <button className="btn">Submit</button>
                </form>
            </div>
    )
    }
}

export default Form;