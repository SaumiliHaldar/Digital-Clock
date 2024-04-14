let section = document.querySelector("section");
icons = document.querySelector(".icons");

icons.onclick = () => {
    section.classList.toggle("dark");
}


// Ctreating a function and calling it every second 
setInterval (() => {
    let date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM"; //if hour is smaller than 12, then it will be AM else it will be PM
    hour = hour > 12 ? hour - 12 : hour; //if hour is greater than 12 , 12will be subtracted (keeping it a 12-hours clock)
    hour = hour == 0 ? hour = 12 : hour ; //if value is 0, then it will be updated to 12 (keeping it a 12-hours clock)

    //adding 0 at the front for values less than 10
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.querySelector(".hour").innerText = hour;
    document.querySelector(".minute").innerText = minute;
    document.querySelector(".second").innerText = second;
    document.querySelector(".am-pm").innerText = d;
}, 1000); 