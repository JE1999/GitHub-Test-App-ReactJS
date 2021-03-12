import Axios from 'axios'

export const getData = async (query: string) => {

    const baseUrl = process.env.REACT_APP_API_URL
    
    const { data } = await Axios.get<any>(baseUrl + query) 

    return data;
}