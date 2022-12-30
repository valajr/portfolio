const POSITION = ['presentation', 'skills', 'timeline'];

function verifyPosition() {
    const vh = window.innerHeight;
    let position = document.getElementsByClassName('position')[0];
    let atual = position.innerHTML.toLowerCase().replace(/ /g, '-');
    const atual_position = document.getElementsByClassName(atual)[0].getBoundingClientRect().y;

    let new_index = null;
    if(atual_position > vh/2)
        new_index = POSITION.indexOf(atual) - 1;
    else if(atual_position < -vh/2)
        new_index = POSITION.indexOf(atual) + 1;

    if(new_index != null) {
        position.classList.remove('position');
        void position.offsetWidth;
        position.classList.add('position');
        setTimeout(() => {position.innerHTML = POSITION[new_index].replace(/-/g, ' ');}, 200);
    }
}


async function getPinnedRepos(f) {
    await fetch("https://gh-pinned-repos.egoist.dev/?username=valajr")
    .then((res) => res.json()).then((data) => {
        return f(data);
    });
}

// getPinnedRepos((repos) => {
//     let plist = document.getElementById("pinned-projects");
//     plist.innerHTML = "";
//     for(let r in repos) {
//         let rep = repos[r];
//         plist.appendChild(buildProjectItem(rep.repo, rep.description, rep.link, rep.stars));
//     }
// });

function showProject(id) {
    let projects = document.getElementsByClassName('project');
    let showed = document.getElementById(id);
    // let parent = showed.parentElement.parentElement;
    // if(showed.style.display === 'block') {
    //     showed.style.display = 'none';
    //     parent.classList.remove('showed');
    // }
    // else {
    //     for(let i = 0; i < projects.length; i++) {
    //         projects[i].style.display = 'none';
    //         projects[i].parentElement.parentElement.classList.remove('showed');
    //     }
    //     showed.style.display = 'block';
    //     parent.classList.add('showed');
    //     if(id !== 'chess') {
    //         let comparative = document.getElementById('chess').parentElement.parentElement;
    //         parent.style.setProperty('--element-height', `-${parent.offsetHeight - comparative.offsetHeight}px`);
    //     }
    // }
    if(showed.classList.contains('showed')) 
        showed.classList.remove('showed');
    else {
        for(let i = 0; i < projects.length; i++) 
            projects[i].classList.remove('showed');
        showed.classList.add('showed');
    }
}

window.addEventListener("scroll", verifyPosition);