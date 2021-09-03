const API_key=`c87287c86714681ac4fb8ca397f0aa48`
const forClick = () =>{
    const city=document.getElementById('for-city').value;
    forClick.Value='';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    fetch(url)
       .then(res=>res.json())
       .then(data=>displayTem(data))

    }

const setInnerText=(id, text)=>{
    document.getElementById(id).innerText=text;
}


const displayTem=temparature=>{
    setInnerText('city',temparature.name);
    setInnerText('tempreture',temparature.main.temp)
    setInnerText('condition',temparature.weather[0].main)
    const url=`https://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`
     const ingIcon=document.getElementById('forImg');
     ingIcon.setAttribute('src',url)
    console.log(temparature)

}