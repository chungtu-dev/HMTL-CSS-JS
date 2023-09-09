const callApiUser = async () => {
	// https://jsonplaceholder.typicode.com/photos/1
	const apiUrl = await fetch('https://jsonplaceholder.typicode.com/users/1');
	const data = await apiUrl.json()
	return data
}