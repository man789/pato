let date_index = new Date();
let day = document.querySelector('.day');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

day.innerHTML = date_index.getUTCDate();
hour.innerHTML = date_index.getHours();
minute.innerHTML = date_index.getMinutes();
second.innerHTML = date_index.getSeconds();




