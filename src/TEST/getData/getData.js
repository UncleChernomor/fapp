const axios = require('axios');

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        return response.data.map((user) => user.id);

    } catch (error) {

    }

}

module.exports = getData;