import React, { Component } from 'react';
import '../App.css';
import {items} from '../data'
import {places} from '../data'

class Form2 extends Component {

state={
    primaryDesign:items,
    otherDiscriplines:items,
    places,
    newDiscip:"",
    newDiscips:[],
    removeItems:[],
    selectedPlace:[],
    selectedDiscrip:[],
    selectedPrimary:''
}

remove = (x) =>{
    
    let arr = this.state.otherDiscriplines.filter((item)=> item!==x)
    this.setState({
        otherDiscriplines:arr,
        removeItems:this.state.removeItems.concat([x])
    })
    
}

removeS = (x) =>{
    const removed =this.state.removeItems
    const arr = this.state.primaryDesign
        .concat(this.state.newDiscips)
        .filter((item)=> item !== x )
        .filter((item)=> !removed.includes(item));

    this.setState({otherDiscriplines:arr});
}

addItems = () =>{
    let newItem = this.state.newDiscip;
    let newItems = this.state.newDiscips.concat([newItem])

    this.setState({
        newDiscip:"",
        newDiscips:newItems,
        otherDiscriplines:this.state.otherDiscriplines.concat([newItem])
    })
}

submit = (e)=>{
    e.preventDefault();
    console.log('selectedDiscrip',this.state.selectedDiscrip);
    console.log('selectedPlace',this.state.selectedPlace)
    console.log('selectedPrimary:',this.state.selectedPrimary)
    this.setState({
        otherDiscriplines:items,
        newDiscips:[],
        removeItems:[],
        selectedPlace:[],
        selectedDiscrip:[],
        selectedPrimary:''
    })
    
}

render() {
    const radioItems = this.state.primaryDesign.map((item,i)=>{
        return(
            <div className="Q1-width" key={i}>
                <input type="radio" name="primaryDesign" id={i} value={item}
                 checked={this.state.selectedPrimary === item}
                 onChange={()=>this.setState({selectedPrimary:item})}/>
                <label className="bord" htmlFor={i} onClick={()=>this.removeS(item)}>{item}</label>
            </div>
        )
    })
    const checkItems = this.state.otherDiscriplines.map((item,i)=>{
        return(
            <div key={i}>
                <input type="checkbox" id={i+'x'} 
                checked={this.state.selectedDiscrip.includes(item)}
                onChange={(e)=>this.setState({selectedDiscrip: this.state.selectedDiscrip.includes(item)? 
                this.state.selectedDiscrip.filter(i=>i!==item):this.state.selectedDiscrip.concat(item)})}
                />
                <label htmlFor={i+'x'} ><div className="siq"></div>{item}</label>
                <i onClick={()=>this.remove(item)} className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
        )
    })
    const places = this.state.places.map((item,i)=>{
        return(
            <div key={i}>
                <input type="checkbox" id={i+'y'}
                checked={this.state.selectedPlace.includes(item)}
                onChange={(e)=>this.setState({selectedPlace: this.state.selectedPlace.includes(item)? 
                    this.state.selectedPlace.filter(i=>i!==item):this.state.selectedPlace.concat(item)})}/>
                <label htmlFor={i+'y'}><div className="siq"></div>{item}</label>
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
