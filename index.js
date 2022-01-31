window.addEventListener('load', function() {
  renderVideos();
});

function renderVideos() {
  const videoList = this.document.getElementById('video-list');
  let userAvatarId = 1;
  let thumbnailId = 10;

  for (let i = 0; i < 12; i++) {
    userAvatarId++;
    thumbnailId++;

    videoList.insertAdjacentHTML('beforeend', `
      <article class="video-container">
        <div class="thumbnail-container">
          <img
            src="https://picsum.photos/id/${thumbnailId}/360/202"
            alt="Thumbnail"
            class="thumbnail"
            width="360"
            height="202"
          />
          <span class="time">10:00</span>
        </div>
        <div class="details">
          <img
            src="https://i.pravatar.cc/36?img=${userAvatarId}"
            alt="Channel"
            class="user-avatar"
            width="36"
            height="36"
          />
          <div class="metadata-container">
            <h3>Video name</h3>
            <div class="metadata">
              <span>Channel name</span>
              <div class="metadata-line">
                <span class="metadata-views">100 views</span>
                <span class="metadata-timestamp">4 months ago</span>
              </div>
            </div>
          </div>
        </div>
      </article>
  `.trim());
  }
}
