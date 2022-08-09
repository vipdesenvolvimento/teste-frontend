import React, { Component } from 'react'
import LeadService from '../services/LeadService'

class ViewLeadComponent extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.match);
        this.state = {
            id: this.props.match.params.id,
            lead: {}
        }
    }

    componentDidMount(){
        LeadService.getLeadById(this.state.id).then( res => {
            this.setState({lead: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Lead Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Lead First Name: </label>
                            <div> { this.state.lead.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Lead Last Name: </label>
                            <div> { this.state.lead.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Lead Email ID: </label>
                            <div> { this.state.lead.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewLeadComponent