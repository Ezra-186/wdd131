const temp = 68;
const speed = 5;
function calculateWindChill(t, v) {
    return 35.74 + 0.6215 * t - 35.75 * v ** 0.16 + 0.4275 * t * v ** 0.16;
}
let windchillText = 'N/A';
if (temp <= 50 && speed > 3) {
    windchillText = calculateWindChill(temp, speed).toFixed(1);
}
document.getElementById('temp').textContent = temp;
document.getElementById('speed').textContent = speed;
document.getElementById('windchill').textContent = windchillText;
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
