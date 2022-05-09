const candidates = [
    {
        img: "./images/unconcious.jpg",
        name: "Namoral Thy",
        job: "Front-End Developer",
        info: "Hi! I'm currently a first year Mathematics and Computer Science. I love to study about web development in my free times and I'm very enjoyed doing projects!"
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        name: "Stacy Davey",
        job: "Software Engineer",
        info: "I have been in the software engineering business for seven years, delivering new and innovative solutions for a myriad of different compaines."
    },
    {
        img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        name: "Bryony Roman",
        job: "UX/UI designer",
        info: "Hello! I am a UX/UI Designer with a background in architecture and editorial, who loves exploring complex problems in search of delightful user experiences."
    },
    {
        img: "https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
        name: "Janae Francis",
        job: "Data Scientist",
        info: "I am pursing Master Degree in Business Analytics at Simon Business School, University of Rochester. I am currently a Machine Learning Research Intern at Skim AI."
    }
]

// select Element from HTML
const img = document.querySelector('#img-1');
const personName = document.querySelector('.name');
const job = document.querySelector('.job');
const info = document.querySelector('.info');
const nextButton = document.querySelector('.nextButton');
const prevButton = document.querySelector('.prevButton');
const randomButton = document.querySelector('.random');

let currentCandidate = 0;   // array index

// change all property's content function
const showCandidate = function(index) {
    const eachOne = candidates[index];
    img.src = eachOne.img;
    personName.textContent = eachOne.name;
    job.textContent = eachOne.job;
    info.textContent = eachOne.info;
}

// reload webpage
window.addEventListener('DOMContentLoaded',() => {
    showCandidate(0);
})

// next button function
nextButton.addEventListener('click',() => {
    currentCandidate++;
    if(currentCandidate > candidates.length - 1){
        currentCandidate = 0;
    }
    showCandidate(currentCandidate);
})

// previous button function
prevButton.addEventListener('click',() => {
    currentCandidate--;
    if(currentCandidate < 0){
        currentCandidate = candidates.length - 1;
    }
    showCandidate(currentCandidate);
})

// random button function
randomButton.addEventListener('click',() => {
    currentCandidate = Math.floor(Math.random() * candidates.length);
    showCandidate(currentCandidate);
})