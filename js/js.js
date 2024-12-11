  var select = document.getElementById('select');
  document.getElementById('name-city').innerText ='Al Madīnah al Munawwarah';

    let cities = [ 
      'Al Madīnah al Munawwarah','Ar Riyāḑ','Makkah al Mukarramah','Tabūk'
    ]
    for ( let cite of cities){

      let content = `
      
            <option>${cite}</option>

      `
      select.innerHTML += content;
    }
    select.addEventListener('change',function() {
      var valSelect = this.value

      if(this.value == valSelect){
        grtPryerTime(valSelect)
      }
 
      document.getElementById('name-city').innerText =valSelect;
    })

    function grtPryerTime(city){
      let param = {
        country:"SA",
        city: city
    }
  axios.get('https://api.aladhan.com/v1/timingsByCity', {
      params:param
    })
    .then(function (response) {
      
  const timings = response.data.data.timings;
  const dateDay = response.data.data.date.readable;
  const day = response.data.data.date.hijri.weekday.en;
  const dayx = ` ${day} :  ${dateDay} `; 
  document.getElementById('Fajr-time').innerHTML = timings.Fajr
  document.getElementById('Sunrise-time').innerHTML = timings.Sunrise
  document.getElementById('Dhuhr-time').innerHTML = timings.Dhuhr
  document.getElementById('Asr-time').innerHTML = timings.Asr
  document.getElementById('Maghrib-time').innerHTML = timings.Maghrib
  document.getElementById('Isha-time').innerHTML = timings.Isha
  document.getElementById('date-day').innerHTML = dayx ;
  console.log(response);

  })
  
    .catch(function (error) {
      console.log(error);
    })
    }

    grtPryerTime('Makkah al Mukarramah')
    
// Asr: "15:10"
// Dhuhr: "11:38"
// Fajr: "04:01"
// Firstthird: "21:44"
// Imsak: "03:51"
// Isha: "19:26"
// Lastthird: "01:32"
// Maghrib: "17:56"
// Midnight: "23:38"
// Sunrise: "05:20"
// Sunset: "17:56"