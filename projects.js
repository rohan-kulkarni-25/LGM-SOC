fetch('../json/projects.json')
    .then(response => response.json())
    .then(data => {
        let project = data;
        // console.log(project[0].Mentors)
        for (let i = 0; i < project.length; i++) {
            for (let m = 0; m < project[i].Mentors.length; m++) {

                let projectdiv = document.createElement('div');
                projectdiv.innerHTML = `<div id="projectbox"><div id="name"><a href="https://www.github.com/${project[i].Repository}">${project[i].ProjectName}<a></div><div id="pa"><a href="${project[i].ProjectAdmin.GitHub}">${project[i].ProjectAdmin.Name}</a></div><div id="mentor"><a href="${project[i].Mentors[m].GitHub}">${project[i].Mentors[m].Name}</a></div></div><hr>`;



                document.getElementById('projectlist').appendChild(projectdiv);

                // let mentordiv = document.createElement('div');
                // mentordiv.innerHTML = ``
                // document.getElementById('projectbox').appendChild(mentordiv);

            }

        }
    });