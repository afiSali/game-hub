import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '8e9593f4c88b454c8bfb862ff49c94d5'
    }
})