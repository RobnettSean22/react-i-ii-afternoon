import React, {Component} from 'react';
import data from './data'

export default class Profile extends Component{
    constructor(){
        super()
        this.state={ 
            profiles: data
           
        }
    }
    access(data){
        this.setState({
            profiles:
        })
    }
   
    
   
    render(){
        let showPeople = this.state.profiles.map((people,index)=>{return <h1 key={index}>{people.city}</h1>})
        return(
            <div>
            <div>{showPeople}</div>
            <div></div>
            <div></div>
            <div></div>
            <div>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
            
            </div>
        )
    }
}