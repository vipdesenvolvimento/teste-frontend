import React, { Component } from 'react'
import LeadService from '../services/LeadService';

class CreateLeadComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nome: '',
            sobrenome: '',
            data_nascimento: '',
            telefone: ''
        }
        
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeSobrenomeHandler = this.changeSobrenomeHandler.bind(this);
        this.saveOrUpdateLead = this.saveOrUpdateLead.bind(this);
    }
    
    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            LeadService.getLeadById(this.state.id).then( (res) =>{
                let lead = res.data;
                this.setState({nome: lead.nome,
                    sobrenome: lead.sobrenome,
                    data_nascimento: lead.data_nascimento,
                    telefone : lead.telefone
                });
            });
        }        
    }
    saveOrUpdateLead = (e) => {
        e.preventDefault();
        let lead = {nome: this.state.nome, sobrenome: this.state.nome, data_nascimento: this.state.data_nascimento, telefone: this.state.telefone};

        if(this.state.id === '_add'){
            LeadService.createLead(lead).then(res =>{
                this.props.history.push('/leads');
            });
        }else{
            LeadService.updateLead(lead, this.state.id).then( res => {
                this.props.history.push('/leads');
            });
        }
    }
    
    changeNomeHandler= (event) => {
        this.setState({nome: event.target.value});
    }

    changeSobrenomeHandler= (event) => {
        this.setState({sobrenome: event.target.value});
    }

    changeDataNascimentoHandler= (event) => {
        this.setState({data_nascimento: event.target.value});
    }

    changeTelefoneHandler= (e) => {
        const re = /^[0-9\b]+$/;

        if (e.target.value === '' || re.test(e.target.value)) {
            if(e.target.value.length <=11)
                this.setState({telefone: e.target.value});
        }
        
    }

    cancel(){
        this.props.history.push('/leads');
    }

    

    getTitle(){
        if(this.state.id === '_add'){
            return "CRIAR LEAD"
        }else{
            return "EDITAR LEAD"
        }
    }
    getTitleBtn(){
        if(this.state.id === '_add'){
            return "SALVAR"
        }else{
            return "SALVAR EDIÇÃO"
        }
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h2 className="text-center">{this.getTitle()}</h2>
                </div>
                <br></br>
                <div className="container">
                                
                    <div className = "card-body">
                        <form>
                            <div className = "form-group">
                                <label>NOME</label>
                                <input placeholder="Digite um Nome" name="nome" className="form-control" 
                                    value={this.state.nome} onChange={this.changeNomeHandler}/>
                            </div>
                            <div className = "form-group">
                                <label>SOBRENOME</label>
                                <input placeholder="Digite um sobrenome" name="sobrenome" className="form-control" 
                                    value={this.state.sobrenome} onChange={this.changeSobrenomeHandler}/>
                            </div>
                            <div className = "form-group">
                                <label>DATA DE NASCIMENTO</label>
                                <input type="date" name="data_nascimento" className="form-control" 
                                    value={this.state.data_nascimento} onChange={this.changeDataNascimentoHandler}/>
                            </div>

                            <div className = "form-group">
                                <label>TELEFONE</label>
                                <input placeholder="TELEFONE" name="telefone" className="form-control" 
                                    value={this.state.telefone} min="10" max="11" onChange={this.changeTelefoneHandler}/>
                            </div>

                            <button className="btn btn-success" onClick={this.saveOrUpdateLead}>{this.getTitleBtn()}</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>VOLTAR</button>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateLeadComponent