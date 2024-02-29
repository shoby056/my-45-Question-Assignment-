function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

var result1 = city_country('Lahore', 'Pakistan');
var result2 = city_country('New York', 'USA');
var result3 = city_country('Sydney', 'Australia');

console.log(result1);
console.log(result2);
console.log(result3);
