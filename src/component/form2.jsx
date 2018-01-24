import React, { Component } from 'react';
import '../App.css';
import {primaryDiscriplines} from '../data'
import {otherDiscriplines} from '../data'
import {places} from '../data'

class Form2 extends Component {

state={
    primaryDiscriplines,
    otherDiscriplines,
    places,
    newDiscip:'',
    newDiscips:[],
}


remove = (x) =>{ 
    const arr = this.state.otherDiscriplines.filter(({label,checked})=>x!==label)
    const arr1 = this.state.newDiscips.filter(({label,checked})=>x!==label)
    this.setState({
        otherDiscriplines:arr,
        newDiscips:arr1
    })
}

removeChoosenRadio = (x) =>{
    const arr = this.state.primaryDiscriplines.map(({label,checked})=>{return{label,checked:false}})
    .concat(this.state.newDiscips)
    .filter((item)=> item.label!==x)
    this.setState({otherDiscriplines:arr})
}

addItems = () =>{
    const newDiscip = this.state.newDiscip;
    const newItem = {label:newDiscip,checked:true}
    const newItems = this.state.newDiscips.concat(newItem)

    this.setState({
        newDiscip:"",
        newDiscips:newItems,
        otherDiscriplines:this.state.otherDiscriplines.concat([newItem])
    })
}

submit = (e)=>{
    e.preventDefault();
    console.log('Primary Discriplines',this.state.primaryDiscriplines)
    console.log('Other Discriplines',this.state.otherDiscriplines)
    console.log("Places", this.state.places)
    this.setState({
        primaryDiscriplines,
        otherDiscriplines,
        places,
        newDiscip:'',
        newDiscips:[],
        removeItems:[]
    })
}


radioItemsOnChange = (label,checked,i)=> {
    const arr = this.state.primaryDiscriplines.map(({label,checked})=>{return{label,checked:false}})
    const newItem = {label, checked: !checked}
    const primaryDiscriplines = [...arr.slice(0,i),newItem, ...arr.slice(i+ 1)]
    this.setState({primaryDiscriplines})
    this.removeChoosenRadio(label)
}

checkItemsOnChange = (label, checked,i) => {
    const newItem = {label, checked: !checked}
    const otherDiscriplinesN = [...this.state.otherDiscriplines.slice(0,i),newItem, ...this.state.otherDiscriplines.slice(i + 1)]
    this.setState({otherDiscriplines:otherDiscriplinesN})
}

placesOnChange = (label, checked,i) => {
    const newItem = {label, checked: !checked}
    const newPlaces = [...this.state.places.slice(0,i),newItem, ...this.state.places.slice(i + 1)]
    this.setState({places:newPlaces})
}


render() {
    const radioItems = this.state.primaryDiscriplines.map(({label,checked},i)=>{
        return(
            <div className="Q1-width" key={i}>
                <input type="radio" name="primaryDiscriplines" id={i}
                 checked={checked}
                 onChange={()=>this.radioItemsOnChange(label,checked,i)}/>
                <label className="bord" htmlFor={i}>{label}</label>
            </div>
        )
    })
    const checkItems = this.state.otherDiscriplines.map(({label,checked},i)=>{
        return(
            <div key={i}>
                <input type="checkbox" id={i+'x'} 
                checked={checked}
                onChange={()=>this.checkItemsOnChange(label, checked,i)}
                />
                <label htmlFor={i+'x'} ><div className="siq"></div>{label}</label>
                <i onClick={()=>this.remove(label)} className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
        )
    })
    const places = this.state.places.map(({label,checked},i)=>{
            return(
            <div key={i}>
                <input type="checkbox" id={i+'y'}
                checked={checked}
                onChange={()=>this.placesOnChange(label, checked,i)}/>
                <label htmlFor={i+'y'}><div className="siq"></div>{label}</label>
            </div>
        )
    })
    return (
        <form onSubmit={this.submit}>
            <h3>2.Skills and location</h3>
            <h6> which is your primary design discripline?*</h6>
            <div className="section">
                {radioItems}
            </div>
            <div className="section">
                <div className="check1">
                    <h6> Do you have experience with any other disciplines?</h6>
                    {checkItems}
                    <div>
                        <input className="Q1-width" type="text"
                        onChange={(e)=>this.setState({newDiscip:e.target.value})}
                        value={this.state.newDiscip}/>
                        <a onClick={()=>this.addItems()}>Add</a>
                    </div>
                </div>
                <div className="check2">
                    <h6>Where are you interested in working?*</h6>
                    {places}
                </div>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    );
  }
}

export default Form2;
