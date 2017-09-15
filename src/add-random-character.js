function getRandomCharacter() {
    var character = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 1; i++)
      character += possible.charAt(Math.floor(Math.random() * possible.length));

    return character;
}

function addCharacterToPage() {
    setInterval(() => {
        const container = document.querySelector('.container');
        const text = document.createElement('p');
        text.innerHTML = getRandomCharacter();
        container.appendChild(text);
    }, 25);
}

module.exports = {init: addCharacterToPage};
