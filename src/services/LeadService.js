import axios from 'axios';
require('dotenv').config()

const LEAD_API_BASE_URL = process.env.REACT_APP_LEAD_API_BASE_URL;
console.log(LEAD_API_BASE_URL);

class LeadService {

    getLeads(){
        return axios.get(LEAD_API_BASE_URL+"/sort/name");
    }

    createLead(lead){
        return axios.post(LEAD_API_BASE_URL, lead);
    }

    getLeadById(leadId){
        return axios.get(LEAD_API_BASE_URL + '/' + leadId);
    }

    updateLead(lead, leadId){
        return axios.put(LEAD_API_BASE_URL + '/' + leadId, lead);
    }

    deleteLead(leadId){
        return axios.delete(LEAD_API_BASE_URL + '/' + leadId);
    }
}

export default new LeadService()