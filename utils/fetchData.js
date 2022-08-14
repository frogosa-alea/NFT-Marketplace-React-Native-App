export const options = {
    method: 'GET',
    params: {order_direction: 'desc', limit: '50', include_orders: 'false'},
    headers: {
      'X-RapidAPI-Key': 'df98fcf707msh668a93c76fcea3bp12b40fjsnb31fc19ea3fc',
      'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}