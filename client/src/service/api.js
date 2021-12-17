import axios from 'axios';
const URL = "http://localhost:8000";


export const saveprofile = async (profile) => {
    try {
        return await axios.post(`${URL}/profile`, profile);
    } catch (error) {
        console.log("Error while calling saveprofile API", error);
    }
}

export const loginprofile = async (email) => {
    try {

        let response = await axios.get(`${URL}/login/${email}`, { withCredentials: true });
        // const token = await response.generateAuthToken();
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error while calling loginprofile API", error);
    }
}

export const getprofile = async (param) => {
    try {
        console.log(param);
        let response = await axios.get(`${URL}/userprofile${param}`, { withCredentials: true });
        // console.log(response.status);
        return response;
    } catch (error) {
        console.log('Error while calling getprofile API ', error)
    }
}


export const logout = async () => {
    try {
        return await axios.get(`${URL}/logout`, { withCredentials: true });
    } catch (error) {
        console.log("Error while calling  logout API", error)
    }
}


export const updatepost = async (id, post) => {
    try {

        return await axios.post(`${URL}/update/${id}`, post, { withCredentials: true });
    } catch (error) {
        console.log("Error while calling updatepost API", error);
    }
}

export const createpost = async (post) => {
    try {
        return await axios.post(`${URL}/create`, post, { withCredentials: true });
    } catch (error) {
        console.log("Error while calling createpost API", error)
    }
}
export const userpost = async () => {
    try {
        let response = await axios.get(`${URL}/userpost`, { withCredentials: true });
        return response;
    } catch (error) {
        console.log("Error while  calling userpost API", error)
    }
}

export const createappointt = async (post) => {
    try {
        return await axios.post(`${URL}/appoint`, post, { withCredentials: true });
    } catch (error) {
        console.log("Error while calling createpost API", error)
    }
}

export const userappoint = async () => {
    try {
        let response = await axios.get(`${URL}/userappoint`, { withCredentials: true });
        return response;
    } catch (error) {
        console.log("Error while  calling userpost API", error)
    }
}

export const deletepost = async (id) => {
    try {
        await axios.delete(`${URL}/delete/${id}`, { withCredentials: true });
    } catch (error) {
        console.log("Error while calling updatepost API", error);
    }
}


export const deleteappointment = async (id) => {
    try {
        await axios.delete(`${URL}/deleteappoint/${id}`, { withCredentials: true });
    } catch (error) {
        console.log("Error while calling updatepost API", error);
    }
}