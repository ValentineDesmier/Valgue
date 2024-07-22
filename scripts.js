
document.addEventListener('DOMContentLoaded', function() {
    const floatingImgs = document.querySelectorAll('.floating-img');

    function moveImage(image) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 20 + 10; // Random duration between 10s and 30s

        // Correct syntax for CSS properties
        image.style.transition = `transform ${duration}s linear`;
        image.style.transform = `translate(${x}px, ${y}px)`;
        
        setTimeout(() => {
            image.style.transition = 'none';
            image.style.transform = 'translate(0, 0)';
            setTimeout(() => {
                image.style.transition = `transform ${duration}s linear`;
                moveImage(image);
            }, 100); // Brief pause before restarting the animation
        }, duration * 1000);
    }

    floatingImgs.forEach(img => {
        moveImage(img);
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');
    const videoOverlay = document.getElementById('video-overlay');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    const closeVideo = document.getElementById('close-video');

    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video');
            if (videoUrl) {
                videoSource.src = videoUrl;
                videoPlayer.load();
                videoOverlay.classList.remove('hidden');
            }
        });
    });

    closeVideo.addEventListener('click', function() {
        videoOverlay.classList.add('hidden');
        videoPlayer.pause();
    });

    // Hide video overlay when clicking outside the video
    videoOverlay.addEventListener('click', function(event) {
        if (event.target === videoOverlay) {
            videoOverlay.classList.add('hidden');
            videoPlayer.pause();
        }
    });

    // Artistic scrolling effect
    const projectList = document.querySelector('.project-list');
    projectList.addEventListener('wheel', function(event) {
        event.preventDefault();
        projectList.scrollBy({
            top: event.deltaY,
            left: 0,
            behavior: 'smooth'
        });
    });

   
    
});



document.addEventListener('DOMContentLoaded', function() {
    const floatingImgs = document.querySelectorAll('.floating-img');

    function moveImage(image) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 20 + 10; // Random duration between 10s and 30s

        image.style.transition = `transform ${duration}s linear`;
        image.style.transform = `translate(${x}px, ${y}px)`;
        
        setTimeout(() => {
            image.style.transition = 'none';
            image.style.transform = `translate(0, 0)`;
            setTimeout(() => {
                image.style.transition = `transform ${duration}s linear`;
                moveImage(image);
            }, 100); // Brief pause before restarting the animation
        }, duration * 1000);
    }

    floatingImgs.forEach(img => {
        moveImage(img);
    });
});








