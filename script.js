// ===== JavaScript for filtering videos =====

function filterVideos(category) {

  let videos = document.querySelectorAll(".video-card");

  videos.forEach(video => {

    if (category === "all") {

      video.style.display = "block";

    } else {

      if (video.classList.contains(category)) {

        video.style.display = "block";

      } else {

        video.style.display = "none";

      }

    }

  });

}