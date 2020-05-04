const axios = require('axios')

function checkUndefined() {
	axios.get('http://localhost:5000/bins').then(res => {
		res.data.bins.forEach((bin,index) => {
			if (bin.lat === undefined || bin.lng === undefined) console.log(bin.name, bin.lat, bin.lng, index)
		})
	})
}

checkUndefined()
