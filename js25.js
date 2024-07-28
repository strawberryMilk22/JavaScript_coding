// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function longestCountryName(countries) {
    let longestName = "";

    for (let country of countries) {
        if (country.length > longestName.length) {
            longestName = country;
        }
    }

    return longestName;
}

const countryList = ["Australia", "Germany", "United States of America"];
const longestCountry = longestCountryName(countryList);
console.log(longestCountry); // Output: "United States of America"
