import axios from "axios";

const params = {
    headers: {
        Authorization: `bearer  + ${process.env.STRAPI_TOKEN_KEY}`,
    }
}

// `http://localhost:1337${url}`
export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`http://localhost:1337${url}`, params)
        return data
    } catch (error) {
        // console.log(error);
        return error;
    }
}