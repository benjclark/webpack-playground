function getFlexDirectionValue(iteration) {
    const flexDirections = ['column', 'column-reverse'];
    return flexDirections[iteration];
}

function changeDirectionAndSpin() {
    let i = 0;
    let deg = 0;
    setInterval(() => {
        const container = document.querySelector('.container');
        container.setAttribute('style', 'flex-direction:' + getFlexDirectionValue(i) + ";" + 'transform:' + "rotate(" + deg + "deg)");
        if(deg < 359) {deg += 1;} else {deg = 0;}
    }, 25);
    setInterval(() => {
        if(i === 0) {i = 1;} else if(i === 1) {i = 0;}
    }, 1500);
}

module.exports = {init: changeDirectionAndSpin};