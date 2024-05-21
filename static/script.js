function downloadVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const resultDiv = document.getElementById('result');

    if (videoUrl === '') {
        alert('Please enter a YouTube video URL');
        return;
    }

    const apiUrl = `/download?url=${encodeURIComponent(videoUrl)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                const downloadLink = document.createElement('a');
                downloadLink.href = data.download_url;
                downloadLink.textContent = 'Download Video';
                downloadLink.className = 'download-link';
                resultDiv.innerHTML = '';
                resultDiv.appendChild(downloadLink);
            } else {
                resultDiv.textContent = 'Error: ' + data.message;
            }
        })
        .catch(error => {
            resultDiv.textContent = 'An error occurred: ' + error.message;
        });
}
