// const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "86dc532026mshba3e32b66071604p134a47jsn2c072518ae6d",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   },
// };

// try {
//   // const response = await fetch(url, options);
//   // const result = await response.text();
//   // console.log(result);
// } catch (error) {
//   console.error(error);
// }

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "86dc532026mshba3e32b66071604p134a47jsn2c072518ae6d",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}


export const  calculateCarRent =(city_mpg:number, year:number)=>{
	const basePricePerDay= 50;

	const mileageFactor = 0.1;

	const agefactor = 0.05;

	const mileageRate= city_mpg * mileageFactor;

	const ageRate=(new Date().getFullYear()-year)*agefactor;

	const rentalRatePerDay = basePricePerDay+mileageRate+ageRate;

	return rentalRatePerDay.toFixed(0);
}