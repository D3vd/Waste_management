const axios = require('axios')

function updateLevel(n) {
    let index = 1;
    function request() {
        return axios.post('http://localhost:5000/level', {
          id: index + 1,
          level: Math.floor(Math.random() * 101)
        }).then(() => {
            index++;
            if (index >= n) {
                return 'done'
            }
            return request();
        });

    }
    return request();
}

updateLevel(1000)