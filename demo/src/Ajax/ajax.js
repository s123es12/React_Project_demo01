import axios from 'axios'

export default function ajax(url,data={},type="GET"){
    if(type==="POST"){
        return axios.post(url,data)
    }else{
        
    }
}


