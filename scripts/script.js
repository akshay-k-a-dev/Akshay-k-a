// Simulate a loader until the page loads
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const mainContent = document.querySelector('.hero-section');
    
    setTimeout(() => {
        loader.classList.remove('show-loader');
    }, 1500); // Time for loader to disappear

    // Typing animation logic
    const texts = [
        "I am a Frontend Developer.",
        "I am a Linux Enthusiast.",
        "I am a Digital Marketing Expert.",
        "I am a Cyber Security Enthusiast.",
        "I am a Software Developer."
    ];

    let currentIndex = 0;
    const typingElement = document.getElementById("animatedText");

    function typeText(text) {
        let i = 0;
        typingElement.textContent = "";

        const typingInterval = setInterval(() => {
            typingElement.textContent += text[i];
            i++;

            if (i === text.length) {
                clearInterval(typingInterval);
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % texts.length;
                    typeText(texts[currentIndex]);
                }, 2000); // Delay before typing the next line
            }
        }, 100); // Speed of typing effect
    }

    typeText(texts[currentIndex]);
});
