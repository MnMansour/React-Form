import React, { Component } from 'react';
import '../App.css';

class Form3 extends Component {

    state={
        link:"",
        text:""
    }

render() {
    return(
        <form>
            <h3>3.Portfolio</h3>
            <h6>Prove you're IBM's next great designer by showing us who you are. What you've done. How you think. Tell us your story.</h6>
            <input className="Q3-width" type="text"  placeholder="Portfolio link*" 
            value={this.state.link}
            onChange={(e)=>this.setState({link:e.target.value})}/>
            <textarea name="anotherlink" rows="10"  placeholder="Anything else (another link, availability, ect.)?"
            value={this.state.text}
            onChange={(e)=>this.setState({text:e.target.value})}/>
            <input type="submit" value="Submit"/>
        </form>
    )
  }
}

export default Form3;