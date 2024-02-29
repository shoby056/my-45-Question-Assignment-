function describe_city(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi', 'Pakistan');
describe_city('Makka', 'Saudia');
describe_city('italy', 'Germany'); // No country provided, uses default value
