
function Search(){
  let input = document.querySelector('input').value
  console.log(input);
  Weatherdetails(input)

}

function Weatherdetails(city){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1750c3433a0df097355e4e02c80d42fe`)
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.main.temp)
        console.log(data.main.humidity);
        console.log(data.wind.speed);


        
      })
      .catch((error) => {
        console.log(error);
      });

}