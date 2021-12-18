const cities = ['New Delhi', 'Goa', 'Mumbai', 'Gujarat', 'Uttrakhand', 'Punjab', 'Uttar Pradesh', 'Chennai', 'Kolkata', 'Rajasthan'];

var y = 0;
var x = 1;
var z = 5;
let colors = ['darkBlue', 'darkGreen', 'darkMagenta', 'red', 'black', 'salmon', 'darkOrange', 'brown', 'violet', 'darkCyan'];

document.getElementById('main').style.display = 'none';


// Setting interval for repeating code every 1000ms:
setInterval(() => {
    let loadEle = document.getElementById('loader');
    loadEle.innerHTML = `Loading page in ${z} seconds...`
    z--
    if (z < 0) {
        loadEle.style.display = 'none'
    }
}, 1000);


// Setting timeout for using function only one time:
setTimeout(() => {
    document.getElementById('main').style.display = 'flex';
    for (let i = 0; i < cities.length; i++) {
        var id = `city${x}`
        let city = document.getElementById(id);
        setTimeout(() => {
            city.innerHTML = cities[i]
            city.style.color = colors[y];
            y++
        }, 500);
        x++
    }
}, 6000);

