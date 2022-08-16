import axios from "axios";

export default axios.create({
    baseURL:"https://goldenxc.herokuapp.com",
    headers:{
        "Content-type": "application/json"
    }
});