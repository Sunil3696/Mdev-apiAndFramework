const apiKey = 'h8sYi9uYiUuBmbvlwM35CiyAQHN5J71k';

function searchGIFs() {
  const searchInput = document.getElementById('searchInput').value;
  const limit = document.getElementById('limitInput').value || 5;
  if (limit < 1) {
    alert("Please provide a valid limit to fetch GIFs.");
    return;
  }

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchInput}&limit=${limit}`;

  fetch(url)
    .then(function(response) {
      return response.json(); 
    })
    .then(function(data) {
      const gifContainer = document.getElementById('gifContainer');
      gifContainer.innerHTML = ''; 
      data.data.forEach(function(gif) {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        gifContainer.appendChild(img); 
      });
    })
    .catch(function(error) {
      console.error('Error fetching GIFs:', error); 
    });
}
function resetSearch() {
  document.getElementById('searchInput').value = ''; 
  document.getElementById('limitInput').value = ''; 
  document.getElementById('gifContainer').innerHTML = ''; 
}
document.getElementById('searchButton').addEventListener('click', searchGIFs);
document.getElementById('resetButton').addEventListener('click', resetSearch);
