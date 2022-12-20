const INDEX = {
    'presentation': 0,
    'timeline': 1
};

const POSITION = ['presentation', 'timeline'];

function verifyPosition() {
    const vh = window.innerHeight;
    let position = document.getElementsByClassName('position')[0];
    let atual = position.innerHTML.toLowerCase().replace(/ /g, '-');
    const atual_position = document.getElementsByClassName(atual)[0].getBoundingClientRect().y;

    let new_index = null;
    if(atual_position > vh/2)
        new_index = INDEX[atual] - 1;
    else if(atual_position < -vh/2)
        new_index = INDEX[atual] + 1;

    if(new_index != null) {
        position.innerHTML = POSITION[new_index].replace(/-/g, ' ');
        console.log(new_index);
    }
}

window.addEventListener("scroll", verifyPosition);