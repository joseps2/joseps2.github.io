function link(dest) {
    window.location.href = dest + ".html";
}

function startMeditation(meditationType) {
    console.log(`Starting ${meditationType} meditation`);
}

function loadMindfulnessLibrary() {
    const library = [
        { name: 'Bedtime Meditation', duration: '10 minutes' },
        { name: 'Deep Breathing Exercises', duration: '15 minutes' },
        { name: 'Quick Meditation Session', duration: '5 minutes' }
    ];

    const libraryElement = document.querySelector('.mindfulnessLibrary ul');
    libraryElement.innerHTML = '';

    library.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Time: ${item.duration}`;
        listItem.onclick = () => startMeditation(item.name);
        libraryElement.appendChild(listItem);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadMindfulnessLibrary(); 

    const dailyExerciseButton = document.querySelector('.dailyMindfulness');
    if (dailyExerciseButton) {
        dailyExerciseButton.addEventListener('click', () => startMeditation('Guided Meditation'));
    }
});
