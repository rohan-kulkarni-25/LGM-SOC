function tile1no() {
    document.getElementById('1').innerHTML = `<p>Nice Joke 🤣</p>
    <div class="btnbox">
        <button id="back" onclick="goback()">GO BACK 😅</button>
    </div>`;
    document.getElementById('faq').classList.add('hide');
    document.getElementById('faqs').classList.add('hide');
};


function goback() {
    document.getElementById('1').innerHTML = `<p>Have you registered for LGM SOC 21 as Participant ? ( Take it Lightly 😅)</p>
    <div class="btnbox">
        <button id="1y" onclick="tile1yes()">YES 😍</button>
        <button id="1n" onclick="tile1no()">NO 🙄</button>
    </div>`
    document.getElementById('faq').classList.remove('hide');

};

function tile1yes() {
    document.getElementById('faq').classList.add('hide');
    document.getElementById('faqs').classList.add('hide');
    document.getElementById('1').classList.add('hide');
    document.getElementById('2').classList.remove('hide');

};

function tile2no() {
    document.getElementById('2').innerHTML = `<p>Please Join Us On Discord Right Now !</p>
    
    <div class="btnbox">
    <a class="dlink" href="https://discord.com/invite/QMmShus2K5" target="_blank">JOIN DISCORD <img src="../node_modules/bootstrap-icons/icons/discord.svg" alt="" class="boot"></a>
        <button onclick="tile2yes()">JOINED ? LET'S GO AHEAD ! 😀</button>

    </div>`
}

function tile2yes() {
    document.getElementById('2').classList.add('hide');
    document.getElementById('3').classList.remove('hide');

}


function tile3no() {
    // document.getElementById('3').classList.add('hide');
    // document.getElementById('3').classList.remove('hide');
    document.getElementById('3').innerHTML = `<p>If you have not changed nickname please change it ! <br>You can take participant role from #project-selfrole channel on server</p>
    <div class="btnbox">
        <button onclick="nickname()">How to Change Nickname ? 🤔</button>
        <button onclick="takerole()">How to Take Role ? 🤔</button>
        <button onclick="tile3yes()">Done Both 😎</button>
    </div>`

}

function tile3yes() {
    document.getElementById('nick').classList.add('hide');
    document.getElementById('role').classList.add('hide');
    document.getElementById('3').classList.add('hide');
    document.getElementById('4').classList.remove('hide');

}

function tile4no() {
    document.getElementById('4').innerHTML = `<p>You have to select the project on your own on basic of your tech stack !<br> If you don't know how to select project you can have a look on How to Select Project section !!</p>
    <div class="btnbox">
        <button onclick="selectproj()">How to Select Project ? 🤔</button>
        <a href="https://rohan-kulkarni-25.github.io/LGM-SOC/pages/projectdetails.html" target="_blank">Project List 📃</a>
        <button onclick="tile4yes()">I have Selected Project 🤩</button>
    </div>`
}

function tile4yes() {

    document.getElementById('4').classList.add('hide');
    document.getElementById('5').classList.remove('hide');
    document.getElementById('proj').classList.add('hide');
}

function tile5no() {
    document.getElementById('5').innerHTML = `<p>You can get connected with Project Admin & Mentors of the project you selected on discord !<br>If you don't know who is PA or mentor for project you selected have a look at project list once again</p>
    <div class="btnbox">
    <a href="https://rohan-kulkarni-25.github.io/LGM-SOC/pages/projectdetails.html" target="_blank">Project List 📃</a>
        <button onclick="tile5yes()">Got Connected 🤝🏻</button>
    </div>`

}

function tile5yes() {
    document.getElementById('5').classList.add('hide');
    document.getElementById('6').classList.remove('hide');
}

function tile6no() {
    document.getElementById('6').innerHTML = `<p>For Working on any project you have to setup that on your Laptop/PC !<br>For this you can have a talk with PA or mentor or with the participant who have sucessfully setup the particular project.<br>You can also read the readme.md file of project that will help you in setting up the project for sure</p>
    <div class="btnbox">
        <button onclick="tile6yes()">Project Setup Done 🔥</button>
    </div>`

}

function tile6yes() {
    document.getElementById('6').classList.add('hide');
    document.getElementById('7').classList.remove('hide');
}

function tile7no() {
    document.getElementById('7').innerHTML = `<p>This section varies project to project.You can check for general instruction in How to start contribution section</p>
    <div class="btnbox">
        <button onclick="contib()">How to Start Contribution ? 🤔</button>
        <button onclick="tile7yes()">Got It ✅</button>
    </div>`

}

function tile7yes() {
    document.getElementById('faq').classList.remove('hide');
    document.getElementById('7').classList.add('hide');
    document.getElementById('8').classList.remove('hide');
    document.getElementById('contrib').classList.add('hide');

}

function nickname() {
    document.getElementById('nick').classList.remove('hide');

    document.getElementById('role').classList.add('hide');

}

function takerole() {
    document.getElementById('role').classList.remove('hide');

    document.getElementById('nick').classList.add('hide');
}

function selectproj() {
    let projdiv = document.createElement('div');
    projdiv.innerHTML = `<div class="step" id="proj">
    <p>How to select the project ?</p>
    <ul>
    <li>You have to select the project on basic of your tech stack</li>
    <li>You can visit github repository of the project and have a look which technologies are used in that project.</li>
    <li>You can select as many project you want to contribute</li>
    </ul>
    
</div>`
    document.getElementById('sheet').appendChild(projdiv);

}

function contib() {
    let contribdiv = document.createElement('div');
    contribdiv.innerHTML = `<div class="step" id="contrib">
    <p>How to start Contribution to selected project ?</p>
    <ul>
    <li>You can have a discussion on project channel in discord about feature/bug</li>
    <li>You can visit github repository of the project and have a look which issues are open & not assigned you can ask for assignment politely.</li>
    <li>You can also create new issue if you like to add some new feature or found any bug in project.</li>
    <li>Make Sure you read Contribution Guidelines before starting to contribute</li>
    </ul>
    
</div>`
    document.getElementById('sheet').appendChild(contribdiv);

}

function seefaq() {
    document.getElementById('faqs').classList.remove('hide');
}