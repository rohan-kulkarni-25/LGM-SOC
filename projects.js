fetch('../json/projects.json')
    .then(response => response.json())
    .then(data => {
        let project = data;
        // console.log(project[0].Mentors)
        for (let i = 0; i < project.length; i++) {
            for (let m = 0; m < project[i].Mentors.length; m++) {

                let projectdiv = document.createElement('div');
                projectdiv.innerHTML = `<div id="projectbox"><div id="name">${project[i].ProjectName}</div><div id="pa">${project[i].ProjectAdmin.Name}</div><div id="mentor">${project[i].Mentors[m].Name}</div></div><hr>`;



                document.getElementById('projectlist').appendChild(projectdiv);

                // let mentordiv = document.createElement('div');
                // mentordiv.innerHTML = ``
                // document.getElementById('projectbox').appendChild(mentordiv);

            }

        }
    });