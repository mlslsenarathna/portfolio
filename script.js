        const mainProjects = document.querySelectorAll('.project-main .project-card');
        const thumbs = document.querySelectorAll('.project-thumbnails .thumb');
        let currentIndex = 0;

        function showProject(index) {
        mainProjects.forEach((proj, i) => proj.classList.toggle('active', i === index));
        thumbs.forEach((thumb, i) => thumb.classList.toggle('active', i === index));
        currentIndex = index;
        }
        
        document.querySelectorAll(".ripple-text").forEach(el => {
        const content = el.textContent;
        el.textContent = "";
        [...content].forEach((char, i) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.animationDelay = `${i * 0.1}s`;
            el.appendChild(span);
        });
        });


        document.querySelector('.project-main').addEventListener('wheel', (e) => {
        e.preventDefault();
        if(e.deltaY > 0) {
            let next = (currentIndex + 1) % mainProjects.length;
            showProject(next);
        } else {
            
            let prev = (currentIndex - 1 + mainProjects.length) % mainProjects.length;
            showProject(prev);
        }
        });
        thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            showProject(parseInt(thumb.dataset.index));
        });
        });
        document.addEventListener('DOMContentLoaded', function() {
            var typed = new Typed(".auto-type", {
            
                strings: ["Hello..Welcome to my portfolio..", "I'm a Software Engineer","I'm a UI/UX Designer","Let's build something great!"],
                typeSpeed: 75,    
                backSpeed: 55,    
                backDelay: 1500,  
                loop: true,       
                showCursor: true, 
                cursorChar: '|'  
            });
        });
        document.addEventListener('DOMContentLoaded', () => {
            const introOverlay = document.querySelector('.intro-overlay');
            introOverlay.addEventListener('animationend', () => {
                introOverlay.style.display = 'none';
            });
        });
   
    const glowingBox = document.getElementById('glowingBox');
    let hue = 0;

    function updateGlow() {
        hue = (hue + 1) % 360;
        const color = `hsl(${hue}, 100%, 50%)`;
        
        glowingBox.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
        
        requestAnimationFrame(updateGlow);
    }
    updateGlow();