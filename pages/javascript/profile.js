\
function link(dest) {
  window.location.href = dest + ".html";
}

document.addEventListener('DOMContentLoaded', () => {
    const textSizeSlider = document.getElementById('text-size');
    textSizeSlider.addEventListener('input', () => {
        // text slider
        const size = textSizeSlider.value;
        document.documentElement.style.setProperty('--text-size', size + 'rem');
    });

    // Sound Toggle
    const soundToggle = document.getElementById('sound-toggle');
    soundToggle.addEventListener('change', () => {
        if(soundToggle.checked) {
            console.log('Sound enabled');
        } else {
            console.log('Sound disabled');
        }
    });

    // Animations Toggle
    const animationsToggle = document.getElementById('animations-toggle');
    animationsToggle.addEventListener('change', () => {
        if(animationsToggle.checked) {
            console.log('Animations enabled');
            document.body.classList.remove('reduce-animations');
        } else {
            console.log('Animations disabled');
            document.body.classList.add('reduce-animations');
        }
    });

    // Color Blindness Toggle
    const colorBlindnessToggle = document.getElementById('color-blindness-toggle');
    colorBlindnessToggle.addEventListener('change', () => {
        if(colorBlindnessToggle.checked) {
            console.log('Color Blindness mode enabled');
            document.body.classList.add('color-blindness-mode');
        } else {
            console.log('Color Blindness mode disabled');
            document.body.classList.remove('color-blindness-mode');
        }
    });

    // for the health log button
    document.getElementById('health-log').addEventListener('click', () => {
        window.location.href = 'healthlog.html'; 
    });
    
});
