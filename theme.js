const theme_button = document.getElementById("theme-button")

if (localStorage.getItem("theme") != null){
    document.body.classList.toggle(localStorage.getItem("theme")  + '-theme');
    theme_button.textContent = localStorage.getItem("theme")
}


theme_button.addEventListener("click", async () => {
    document.body.classList.remove('matcha-theme');
    document.body.classList.remove('nord-theme');
    document.body.classList.remove('baddie-theme');
    document.body.classList.remove('barbie-theme');
    document.body.classList.remove('cafe-theme');

 
    if (localStorage.getItem('theme') == "nord"){
        localStorage.setItem('theme', 'matcha');
        document.body.classList.toggle('matcha-theme');
    }
    else if(localStorage.getItem('theme') == "matcha"){
        localStorage.setItem('theme', 'baddie');
        document.body.classList.toggle('baddie-theme');
    }
    else if(localStorage.getItem('theme') == "baddie"){
        localStorage.setItem('theme', 'barbie');
        document.body.classList.toggle('barbie-theme');
    }
    else if(localStorage.getItem('theme') == "barbie"){
        localStorage.setItem('theme', 'cafe');
        document.body.classList.toggle('cafe-theme');
    }
    else{
        localStorage.setItem('theme', 'nord');
        document.body.classList.toggle('nord-theme');
    }

    theme_button.textContent = localStorage.getItem("theme")

});
