document.querySelectorAll('a.nav-link').forEach(anchor => { 
    anchor.addEventListener('click', function(event) { 
        event.preventDefault(); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth' 
        }); 
    }); 
}); 
