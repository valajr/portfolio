const POSITION = ['presentation', 'timeline'];

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

    if(new_index != null)
        position.innerHTML = POSITION[new_index].replace(/-/g, ' ');
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
    let projects = document.getElementsByClassName('project-description');
    let showed = document.getElementById(id);
    if(showed.style.display === 'block')
        showed.style.display = 'none';
    else {
        for(let i = 0; i < projects.length; i++) {
            projects[i].style.display = 'none';
        }
        showed.style.display = 'block';
    }
}

window.addEventListener("scroll", verifyPosition);