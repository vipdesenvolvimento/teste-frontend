import React, { Component } from 'react'
import LeadService from '../services/LeadService'

class ListLeadComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                leads: []
        }
        this.addLead = this.addLead.bind(this);
        this.editLead = this.editLead.bind(this);
        this.deleteLead = this.deleteLead.bind(this);
    }

    deleteLead(id){
        LeadService.deleteLead(id).then( res => {
            this.setState({leads: this.state.leads.filter(lead => lead.id !== id)});
        });
    }
    viewLead(id){
        this.props.history.push(`/view-lead/${id}`);
    }
    editLead(id){
        this.props.history.push(`/add-lead/${id}`);
    }

    componentDidMount(){
        LeadService.getLeads().then((res) => {
            this.setState({ leads: res.data});
        });
    }

    addLead(){
        this.props.history.push('/add-lead/_add');
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h2 className="text-center">LISTAR LEADS</h2>
                </div>
                <div className = "row">
                    <div className="col mt-2">
                        <center>
                            <button className="btn btn-primary" onClick={this.addLead}>Novo Lead</button>
                        </center>
                    </div>
                </div>
                <br></br>
                <div className="container">
                    {
                        this.state.leads.map(
                            lead => 
                                <div className="lista">
                                    <div className = "row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-7">
                                                    <label className="nome">
                                                        {lead.nome} {lead.sobrenome}
                                                    </label>
                                                </div>
                                                <div className="col-5">
                                                    <a onClick={ () => this.editLead(lead.id)} className="editar">EDITAR</a>
                                                    <a style={{marginLeft: "10px"}} onClick={ () => this.deleteLead(lead.id)} className="excluir">EXCLUIR</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                        
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ListLeadComponent