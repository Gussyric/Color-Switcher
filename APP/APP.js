const newColorBtnElement = document.getElementById(
    'new-color-button'
);

const currentColorElement = document.getElementById(
    'current-color'
);

//0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F

const colorNames = [
    'red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 
    'brown', 'gray', 'black', 'white', 'cyan', 'magenta', 'lime',
    'maroon', 'navy', 'olive', 'teal', 'violet'
];

function getRandomColorName() {
    const randomIndexPosition = Math.floor(
        Math.random() * colorNames.length
    );

    return colorNames[randomIndexPosition];

}


newColorBtnElement.addEventListener('click', function() {
    const randomColorName = getRandomColorName(6);
    
    document.body.style.setProperty(
        'background-color' ,
         randomColorName
    );

    currentColorElement.textContent = randomColorName;
});