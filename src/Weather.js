import React, {Component} from 'react';
import Icons from './Icons'

class Weather extends Component {

render(){ 

    const iconStyle={
        fontSize: '50px',
        backgroundColor: '#bfd8d5',
        borderRadius: '50%',
        padding:'30px'
    }
    
return(
    
    <div className="container">
        <div><h1>{this.props.location}</h1></div>
        <div><h4>{this.props.desc}</h4></div>
        <div>{this.props.temp && <i className={Icons(this.props.id)} style={iconStyle}></i>}</div>
        <div>{this.props.temp && <h2>{this.props.temp} °F</h2>}</div>
        <div className=" red-text accent-1 "><h5>{this.props.error} </h5></div>  
    </div>

)
}
}

export default Weather;