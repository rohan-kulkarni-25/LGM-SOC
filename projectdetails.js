fetch('../json/projects.json')
    .then(response => response.json())
    .then(data => {
        let project = data;
        // console.log(project[0].Mentors)
        for (let i = 0; i < project.length; i++) {



            let projectdiv = document.createElement('div');
            projectdiv.className = 'project';
            projectdiv.id = i;
            projectdiv.innerHTML = `<div class="projectbox"><p>${project[i].ProjectName}</p><a href="https://www.github.com/${project[i].Repository}"><img class="github" src="../assets/images/github.png" alt=""></a></div><div class="pabox"><p>${project[i].ProjectAdmin.Name} (PA)</p><a href="${project[i].ProjectAdmin.GitHub}"><img class="github" src="../assets/images/github.png" alt=""></a></div>`

            document.getElementById('details').appendChild(projectdiv);


        }

        for (let i = 0; i < project.length; i++) {
            for (let m = 0; m < project[i].Mentors.length; m++) {
                let mentorlist = document.createElement('div');
                mentorlist.className = 'mentorlist';
                mentorlist.innerHTML = `<div class="mentorbox" id="mentorbox"><div class="mbox"><p>${project[i].Mentors[m].Name} (M)</p>
                <a href="${project[i].Mentors[m].GitHub}"><img class="github" src="../assets/images/github.png" alt=""></a></div></div>`;
                document.getElementById(i).appendChild(mentorlist);
            }
        }
    });




