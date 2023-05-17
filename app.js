setInterval(() => {
     tDate = new Date();
     tHour = tDate.getHours();
     tMinutes = tDate.getMinutes();
     tSeconds = tDate.getSeconds();
     hRotation = 30 * tHour + tMinutes / 2;
     mRotation = 6 * tMinutes;
     sRotation = 6 * tSeconds;
    // var hour = document.getElementById("hour");
    // var minute = document.getElementById("minute");
    // var second = document.getElementById("second");
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);
