const videoInput = document.getElementById("input-download");
const downloadBtn = document.getElementById("start-btn");

// Replace 'YOUR_API_KEY' with your YouTube Data API key
const API_KEY = "AIzaSyC08JJw92NnDE5TW6AxThLIFGKm1j1u3TM";

// Function to fetch video details from YouTube Data API
function fetchVideoDetails(videoId) {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch video details.");
      }
      return response.json();
    })
    .then((data) => {
      if (data.items.length === 0) {
        throw new Error("Video not found.");
      }
      return data.items[0].snippet;
    });
}

// Function to generate a download link for the video
function generateDownloadLink(videoId, title) {
  const url = `https://www.youtube.com/watch?v=${videoId}`;
  const link = document.createElement("a");
  link.href = url;
  link.download = `${title}.mp4`; // Change the file extension if needed
  link.innerHTML = "Click here to download";
  document.body.appendChild(link);
}

// Event listener for download button click
downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const videoId = videoInput.value.trim(); // Get the video ID from the input element

  fetchVideoDetails(videoId)
    .then((snippet) => generateDownloadLink(videoId, snippet.title))
    .catch((error) => console.error("Error:", error.message));
});
