/*  Get the countries in asia - filter  */

var request = new XMLHttpRequest()
var url_string = 'https://restcountries.eu/rest/v2/all';

// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true) 
request.send();

request.onload = function() {
var data = JSON.parse(this.response);
var hdata = data.filter((a)=>a.region == "Asia");
console.log(hdata);
}