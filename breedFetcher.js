const request = require("request");
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log("UH OH:", error);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("breed not found");
  } else {
    console.log(typeof data);
    console.log(data);
    console.log(data[0].name);
  }
});