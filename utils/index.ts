const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Key': '86dc532026mshba3e32b66071604p134a47jsn2c072518ae6d',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'	
	}
};

try  {
	// const response = await fetch(url, options);
	// const result = await response.text();
	// console.log(result);
} catch (error) {
	console.error(error);
}


export async function fetchCars(){
      const headers={
        'X-RapidAPI-Key': '86dc532026mshba3e32b66071604p134a47jsn2c072518ae6d',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
}