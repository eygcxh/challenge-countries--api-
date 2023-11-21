const BASE_URL = 'https://restcountries.com/v2/'

// interface Country {
//   name: string;
//   capital: string;
// independent: boolean;
//   flags: {
//       svg: string;
//   };
//   population: number;
//   region: string;
// }

// interface CountrySearchResults {
//   status: number;
//   message: string;
//   data: Country[];
// }

// interface AlphaCodeFilterResults {
//   status: number;
//   message: string;
//   data: Country[];
// }


export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region'
fetch(ALL_COUNTRIES)
.then(res => res.json())
.then(data => console.log(data))

export const searchByCountry = (name: string): string => BASE_URL + 'name/' + name

export const filterByCode = (codes: string[]): string => BASE_URL + 'alpha?codes=' + codes.join(',')
