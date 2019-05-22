import React, {Component} from 'react';
import Weather from './Weather'
import Form from './Form'
import axios from 'axios';
import './index.css';

class App extends Component {
    capitalize = (str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
        };

    toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }

    state={
        location:null,
        temp:null,
        error:null,
        icon:null,
        desc:null,
        id:null,
    }

    getWeather = (e) => {
        e.preventDefault();
        
        let city= e.target.city.value;
        if(city){
        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&APPID=0e25ca7b600cae8be4d83fffd5f5cef3'
        axios.get(url)
        .then(res=>{
            console.log(res)
            
            this.setState({
                location:res.data.name,
                temp:res.data.main.temp,
                error:null,
                icon:res.data.weather[0].icon,
                desc:this.toTitleCase(res.data.weather[0].description),
                id:res.data.weather[0].id,
            })
        })
        .catch(err=>{
            console.log(err)
            this.setState(
                {
                    location:null,
                    temp:null,
                    icon:null,
                    desc:null,
                    id:null,
                    error:'Please enter a valid city',
                }
            )
        })
    }

    e.target.reset();
    }

    render(){
        
        return(
            <div className="container z-depth-2">
                <div className="center">
                <h1><p><i className="fas fa-sun"></i> Weather</p></h1>
                    <Form getWeather={this.getWeather}/>
                    <Weather 
                    location={this.state.location}
                    temp={this.state.temp}
                    icon={this.state.icon}
                    desc={this.state.desc}
                    id={this.state.id}
                    error={this.state.error}/>
                </div>
            </div>
        )
    }
}

export default App;