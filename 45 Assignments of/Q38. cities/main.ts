function describe_city(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

describe_city('Karachi', 'Pakistan');
describe_city('Makka', 'Saudia');
describe_city('italy', 'Germany'); // No country provided, uses default value
