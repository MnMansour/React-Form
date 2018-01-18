import React, { Component } from 'react';
import '../App.css';

class Form extends Component {
    state={
        name:"",
        email:"",
        remail:"",
        phone:"",
        address:"",
        address2:"",
        city:"",
        state:"",
        country:"",
        zip:"",
        hh:""
    }
    submit = (e)=>{
        e.preventDefault()
        console.log(this.state)
        this.setState({
            name:"",
            email:"",
            remail:"",
            phone:"",
            address:"",
            address2:"",
            city:"",
            state:"",
            country:"",
            zip:"",
            hh:""
        })
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <div className="personal">
                <h3>1.Personal information</h3>
                <div className="section">
                    <div className="Q3-width">
                    <input type="text" name="full-name" placeholder="Full name*" 
                    onChange={(e)=>this.setState({name:e.target.value})}
                    value={this.state.name} />
                    <input type="text" name="email" placeholder="Email*" 
                    onChange={(e)=>this.setState({email:e.target.value})}
                    value={this.state.email} />
                    <input type="text" name="r-email" placeholder="Re-enter email*" 
                    onChange={(e)=>this.setState({remail:e.target.value})}
                    value={this.state.remail} />
                    </div>
                    <input className="Q1-width" type="tel" name="phone" placeholder="Phone#*" 
                    onChange={(e)=>this.setState({phone:e.target.value})}
                    value={this.state.phone} />  
                </div>
                <input className="F-width" type="text" name="address" placeholder="Address*" 
                onChange={(e)=>this.setState({address:e.target.value})}
                value={this.state.address} />
                <input className="F-width" type="text" name="sec-address" 
                onChange={(e)=>this.setState({address2:e.target.value})}
                value={this.state.address2}/>
                <div className="section">

                    <input className="Q1-width" type="text" name="city" placeholder="City*" 
                    onChange={(e)=>this.setState({city:e.target.value})}
                    value={this.state.city}/> 

                    <input className="Q1-width" type="text" name="state"  placeholder="State" 
                    onChange={(e)=>this.setState({state:e.target.value})}
                    value={this.state.state}/> 

                    <input className="Q1-width" type="text" name="country" placeholder="Country/Region*" 
                    onChange={(e)=>this.setState({country:e.target.value})}
                    value={this.state.country}/> 

                    <input className="Q1-width" type="text" name="zip" placeholder="Zip/Postal codes"
                    onChange={(e)=>this.setState({zip:e.target.value})}
                    value={this.state.zip}/>
                </div>
                <input className="F-width" type="text" name="how" placeholder="How did you hear about us" 
                onChange={(e)=>this.setState({hh:e.target.value})}
                value={this.state.hh}/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Form;
