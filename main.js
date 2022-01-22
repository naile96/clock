let UserName = prompt ("Lütfen Kullanıcı Adınızı Giriniz:")
let myName = document.querySelector("#myName");
myName.innerHTML = `${UserName}`


function showTime(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getHours();
    var second = now.getSeconds();

    var day = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();
    var days = now.getDay();


    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    if (days == 1){
        days = "Pazartesi"
    }else if (days == 2){
        days = "Salı"
    }else if (days == 3){
        days = "Çarşamba"
    }else if (days == 4){
        days = "Perşembe"
    }else if (days == 5){
        days = "Cuma"
    }else if (days == 6){
        days = "Cumartesi"
    }else if (days == 0){
        days = "Pazar"
    }
    
    
let time = hour + ":" + minute + ":" + second 
document.getElementById("myClock").innerText = time
document.getElementById("date").innerText=day+" / "+ month +" / "+year+"  "+days;
}

setInterval(function(){showTime();},1000);

