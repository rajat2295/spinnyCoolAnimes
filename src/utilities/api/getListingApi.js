
// API to get search data from the Db ==>
export const fetchSearchData = (url,query='',page='1') => {
	let resData = fetch(url, {
		method: 'GET'
	})
		.then(response => response.json())
		.then(data => {
			return data;
		})
		.catch(err => console.log('Fetcherr', err));

	return resData;
};