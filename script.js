function startProcess() {
    // Show the popup with the progress bar and status message
    const popup = document.getElementById('popup');
    const progressSection = document.getElementById('progressSection');
    const resultImage = document.getElementById('resultImage');
    popup.classList.remove('hidden');

    // Initialize progress and status
    let progressValue = 0;
    const progressBar = document.getElementById('progress');
    const popupMessage = document.getElementById('popupMessage');

    // Set interval to update progress every second
    const interval = setInterval(() => {
        progressValue += 10;
        progressBar.style.width = progressValue + '%';

        // Change status text at different stages
        if (progressValue === 30) {
            popupMessage.textContent = 'Submitting personal information...';
        } else if (progressValue === 60) {
            popupMessage.textContent = 'Almost done...';
        } else if (progressValue === 100) {
            popupMessage.textContent = '';
            
            // Hide the progress bar and show the image
            progressSection.classList.add('hidden');
            resultImage.classList.remove('hidden');
            resulthead.classList.remove('hidden');
            resultdetail.classList.remove('hidden');
            
            clearInterval(interval); // Stop the interval once complete
        }
    }, 1000); // Update every 1 second
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}
