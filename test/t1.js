let data = null
onconnect = e =>{
	let port = e.ports[0]
	port.onmessage = e =>{
		if (e.data === 'get-data'){
			return port.postMessage(data)
		}
		data = e.data
		port.postMessage(data)
	}
}