const cityName=document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');

const city_name=document.getElementById('city_name');

const getInfo=  async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;

    if(cityVal===""){
        city_name.innerText=`Please write the City name before search`;

    }else{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=agra&units=metric&appid=47a6b9088d31536c121629a2006cfd33`;
        const response=await fetch(url);

    }

}

submitBtn.addEventListener('click',getInfo);







