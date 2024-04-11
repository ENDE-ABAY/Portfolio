            /*===== MENU SHOW =====*/ 
            const showMenu = (toggleId, navId) =>{
                const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId)

                if(toggle && nav){
                    toggle.addEventListener('click', ()=>{
                        nav.classList.toggle('show')
                    })
                }
            }
            showMenu('nav-toggle','nav-menu')
            // Text to be typed out
            const text = "Endeabay";
            let index = 0;
            const span = document.querySelector('.home-title-color');

            // Function to type out the text
            function type() {
                if(index < text.length) {
                    span.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, 250); // Adjust typing speed here (milliseconds)
                } else {
                    // If all characters are typed, start backspacing
                    setTimeout(backspace, 1000); // Adjust delay before backspacing starts (milliseconds)
                }
            }


            // Function to simulate backspacing effect
            function backspace() {
                if(index >= 0) {
                    span.textContent = text.substring(0, index);
                    index--;
                    setTimeout(backspace, 300); // Adjust backspacing speed here (milliseconds)
                } else {
                    // If all characters are backspaced, start typing again
                    index = 0;
                    setTimeout(type, 1000); // Adjust delay before typing starts again (milliseconds)
                }
            }

            // Start the typing animation
            setTimeout(type, 1000); // Adjust delay before typing starts (milliseconds)

            /*==================== REMOVE MENU MOBILE ====================*/
            const navLink = document.querySelectorAll('.nav-link')

            function linkAction(){
                const navMenu = document.getElementById('nav-menu')
                // When we click on each nav-link, we remove the show-menu class
                navMenu.classList.remove('show')
            }
            navLink.forEach(n => n.addEventListener('click', linkAction))

            /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
            const sections = document.querySelectorAll('section[id]')

            const scrollActive = () =>{
                const scrollDown = window.scrollY

            sections.forEach(current =>{
                    const sectionHeight = current.offsetHeight,
                        sectionTop = current.offsetTop - 58,
                        sectionId = current.getAttribute('id'),
                        sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
                    
                    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                        sectionsClass.classList.add('active-link')
                    }else{
                        sectionsClass.classList.remove('active-link')
                    }                                                    
                })
            }
            window.addEventListener('scroll', scrollActive)

            /*===== SCROLL REVEAL ANIMATION =====*/
            // Reveal on about
            ScrollReveal().reveal('.image', {
                delay: 500,
                duration: 4000,
                origin: 'right',
                distance: '50px',
                reset: true
            });

            // Initialize ScrollReveal for paragraph
            ScrollReveal().reveal('.about-text', {
                delay: 200,
                duration: 2000,
                origin: 'top',
                distance: '200px',
                reset: true
            });
            ScrollReveal().reveal('.primary-school', {
                delay: 200,
                duration: 2000,
                origin: 'left',
                distance: '200px',
                reset: true
            });

            // Initialize ScrollReveal for unordered list
            ScrollReveal().reveal('.list', {
                delay: 300,
                duration: 7000,
                origin: 'bottom',
                distance: '400px',
            });

            ScrollReveal().reveal('.skills-img', {
                delay: 500,
                duration: 5000,
                origin: 'top',
                distance: '100px',
                reset: true
            });

            const sr = ScrollReveal({
                origin: 'top',
                distance: '60px',
                duration: 1000,
                delay: 200,
            reset: true
            });

            sr.reveal('.home-data, .about-img, .skills-subtitle, .skills-text',{}); 
            sr.reveal('.home-img, .about-subtitle, .image, .about-text, .skills-img, .list',{delay: 400}); 
            sr.reveal('.home-social-icon',{ interval: 100}); 
            sr.reveal('.skills-data, .work-img, .contact-input',{interval: 200});
            sr.reveal('.primary-school ',{interval: 200});

            // Validate For contact form
            function validateForm() {
                // Get form field values
                var nameInput = document.getElementById("name");
                var emailInput = document.getElementById("email");
                var messageInput = document.getElementById("message");

                var name = nameInput.value.trim();
                var email = emailInput.value.trim();
                var message = messageInput.value.trim();

                // Perform validation for name
                if (name === "") {
                    alert("Please enter your name.");
                    nameInput.focus();
                    return false;
                }

                var nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
                if (!nameRegex.test(name)) {
                    alert("Please enter a valid name. The first letter must be capitalized, and it should contain at least three characters.");
                    nameInput.focus();
                    return false;
                }

                // Perform validation for email
                if (email === "") {
                    alert("Please enter your email.");
                    emailInput.focus();
                    return false;
                }

                var emailRegex = /\S+@\S+\.\S+/;
                if (!emailRegex.test(email)) {
                    alert("Please enter a valid email address.");
                    emailInput.focus();
                    return false;
                }

                // Perform validation for message
                if (message === "") {
                    alert("Please enter your message.");
                    messageInput.focus();
                    return false;
                }

                // If all validations pass, the form will be submitted
                return true;
            }