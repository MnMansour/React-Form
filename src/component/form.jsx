import React, { Component } from 'react';
import '../App.css';
const validate = (name, email, remail, phone,zip, address, city, country) => {
	const nameReg = /^([a-zA-Z]{1,20}\s)([a-zA-Z]{1,20}\s?)+$/;
    const nameEmail =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const nameRemail =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const namePhone =/^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[.\-\s]?\d\d){4}$/;
    const nameZip =/^(\d{5}([-]\d{4})?)$/
    const nameAddress =/\w/;
    const nameCity =/^[a-zA-Z]{2,}$/;
    const nameCountry =/^[a-zA-Z]{2,}$/
	return {
        name: !nameReg.test(name),
        email: !nameEmail.test(email),
        remail: !nameRemail.test(remail),
        phone: !namePhone.test(phone),
        zip: !nameZip.test(zip),
        address: !nameAddress.test(address),
        city: !nameCity.test(city),
        country: !nameCountry.test(country)
	};
}

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
        hh:"",
        touched:{
            name:"",
            email:"",
            remail:"",
            phone:"",
            zip:"",
            address:"",
            city:"",
            country:""
        }
    }
    handleBlur = this.handleBlur.bind(this);
    showError = this.showError.bind(this);
    handleOnChange = this.handleOnChange.bind(this);


    handleBlur(e) {
		this.setState({
			touched: {
				...this.state.touched,
				[e.target.name]: true,
            }
        });
    }

    handleOnChange(e) {
		this.setState({
				[e.target.name]: e.target.value,
        });
    }
    

    submit = (e)=>{
        e.preventDefault()
        this.setState({name:"", email:"", remail:"", phone:"", address:"", address2:"", 
                       city:"", state:"",   country:"", zip:"", hh:"",touched:{name:"",
                        email:"", remail:"", phone:"", zip:"", address:"", city:"", country:""}})   
    }

    showError() {
		const {name, email, remail, phone,zip, address, city, country, touched } = this.state;
		const errors = validate(name, email, remail, phone,zip, address, city, country);

		return {
			name: errors.name && touched.name,
			email: errors.email && touched.email,
			remail: errors.remail && touched.remail,
			phone: errors.phone && touched.phone,
			zip: errors.zip && touched.zip,
			address: errors.address && touched.address,
            city: errors.city && touched.city,
            country: errors.country && touched.country            
		}
	}
    render() {
        const { name, email, remail, phone, zip, address, city, country, touched } = this.state;
		const errors = validate(name, email, remail, phone, zip, address, city, country);
		const showErrors = this.showError();
        return (
            <form onSubmit={this.submit}>
                <div className="personal">
                <h3>1.Personal information</h3>
                <div className="section">
                    <div className="Q3-width">
                    <input type="text" name="name" placeholder="Full name*"
                        className={`${showErrors.name ? 'invalid' : ''}`}
                        onBlur={this.handleBlur}
                        onChange={this.handleOnChange}
                        value={this.state.name} />
                    {showErrors.name && <span>Pleace Enter valid Full Name</span>}    
                    <input type="text" name="email" placeholder="Email*" 
                        className={`${showErrors.email ? 'invalid' : ''}`}
                        onBlur={this.handleBlur}
                        onChange={this.handleOnChange}
                        value={this.state.email} />
                    {showErrors.email && <span>Pleace Enter valid Email</span>}    
                    <input type="text" name="remail" placeholder="Re-enter email*"
                        className={`${showErrors.remail ? 'invalid' : ''}`}
                        onBlur={this.handleBlur}
                        onChange={this.handleOnChange}
                        value={this.state.remail} />
                        {touched.remail && this.state.email!==this.state.remail&&<span>Emails Not Same</span>}    
                    </div>
                    <div className="Q1-width">
                        <input type="text" name="phone" placeholder="Phone#*"
                            className={`full-width ${showErrors.phone ? 'invalid' : ''}`}
                            onBlur={this.handleBlur}
                            onChange={this.handleOnChange}
                            value={this.state.phone} />
                        {showErrors.phone && <span>Pleace Enter valid Phone Number</span>}
                    </div>
                </div>
                <input type="text" name="address" placeholder="Address*"
                    className={`Q3-width ${showErrors.address ? 'invalid' : ''}`}
                    onBlur={this.handleBlur}
                    onChange={this.handleOnChange}
                    value={this.state.address} />
                {showErrors.address && <span>Pleace Enter valid Address</span>}

                <input className="Q3-width" type="text" name="address2" 
                    onChange={this.handleOnChange}
                    value={this.state.address2}/>

                <div className="section">
                    <div className="Q1-width">
                        <input type="text" name="city" placeholder="City*"
                            className={`full-width ${showErrors.city ? 'invalid' : ''}`} 
                            onBlur={this.handleBlur}
                            onChange={this.handleOnChange}
                            value={this.state.city}/>
                        {showErrors.city && <span>Pleace Enter valid City</span>}
                    </div>

                    <input className="Q1-width" type="text" name="state"  placeholder="State" 
                        onChange={this.handleOnChange}
                        value={this.state.state}/> 

                    <div className="Q1-width">
                        <input  type="text" name="country" placeholder="Country/Region*"
                            className={`full-width ${showErrors.country ? 'invalid' : ''}`} 
                            onBlur={this.handleBlur}
                            onChange={this.handleOnChange}
                            value={this.state.country}/>
                        {showErrors.country && <span>Pleace Enter valid Country</span>}
                    </div> 

                    <div className='Q1-width'>
                    <input type="text" name="zip" placeholder="Zip/Postal codes"
                        className={`full-width ${showErrors.zip ? 'invalid' : ''}`}
                        onBlur={this.handleBlur}
                        onChange={this.handleOnChange}
                        value={this.state.zip}/>
                    {showErrors.zip && <span>Pleace Enter valid Zip code</span>}
                    </div>

                </div>
                <input className="Q3-width" type="text" name="how" placeholder="How did you hear about us" 
                    onChange={(e)=>this.setState({hh:e.target.value})}
                    value={this.state.hh}/>
                </div>
                <input type="submit" 
                    disabled={Object.keys(errors).some((key) => errors[key])} 
                    value="Submit"/>
            </form>
        );
    }
}

export default Form;
