document.addEventListener('DOMContentLoaded', () => {

    // Select the navigation list container, sections, and initialize an empty array for navLinks
    const navList = document.getElementById('nav-list');
    const sections = document.querySelectorAll('.section');
    const navLinks = [];
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // creating the nav links
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionTitle = sectionId; // Use the section ID as the title 
        const listItem = document.createElement('li'); // Create list item for navigation
        const aList = document.createElement('a'); // Create anchor tag for the navigation item
        aList.textContent = sectionTitle;
        aList.href = `#${sectionId}`;
        aList.classList.add('nav-link');
        listItem.appendChild(aList);
        navList.appendChild(listItem);
        navLinks.push(aList);
    });

    const highlightCurrentSection = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const id = section.getAttribute('id');

            if (rect.top >= 0 && rect.top < window.innerHeight * 0.6) { // Section is in view
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    // Attach scroll event listener
    window.addEventListener('scroll', () => {
        highlightCurrentSection();

        // Show or hide scroll-to-top button
        if (window.scrollY > window.innerHeight) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });


    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // scroll function to go up
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Handle collapsible content buttons
    const collapseButtons = document.querySelectorAll('.collapse-button');
    collapseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling; // Get the content right after the button
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block'; // Show content
                button.textContent = 'Hide Content'; // Change button text
            } else {
                content.style.display = 'none'; // Hide content
                button.textContent = 'Show Content'; // Change button text
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tryNowButton = document.getElementById('try-now');
    const exploreButton = document.getElementById('explore');
    tryNowButton.addEventListener('click', () => {
        alert('Hello Udacity Testers!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.getElementById('explore');
    exploreButton.addEventListener('click', () => {
        const featuresSection = document.getElementById('Home');
        featuresSection.classList.add('show');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.getElementById('explore');
    const headerText = document.querySelector('#home-content h1');
    exploreButton.addEventListener('click', () => {
        headerText.classList.add('show');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset;

        // Hide the header when scrolling down and show when scrolling up
        if (currentScroll > lastScrollTop) {
            header.style.top = `-200px`;
        } else {
            header.style.top = '0';
        }

        // If at the top of the page, show the header
        if (currentScroll <= 0) {
            header.style.top = '0';
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});
