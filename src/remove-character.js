function removeCharacterFromPage() {
    setInterval(()=> {
        const element = document.querySelector('.container p');
        element.parentNode.removeChild(element);
    }, 50);
}

module.exports = {init: removeCharacterFromPage};