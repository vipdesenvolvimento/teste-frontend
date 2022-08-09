import axios from 'axios';

const LEAD_API_BASE_URL = "http://localhost:8080/leads";

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