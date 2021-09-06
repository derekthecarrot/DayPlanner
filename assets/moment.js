let renderClock = function() {
    document.getElementById("clock-div").innerHTML = 
    `
    <h5>${moment().format('MMMM Do YYYY, h:mm:ss a')}</h5>
    `;
};

renderClock();
setInterval(renderClock, 1000)