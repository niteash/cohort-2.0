const reels = [
  {
    isMuted: true,
    username: "nicky.dev",
    likesCount: 1240,
    isLiked: false,
    commentsCount: 89,
    caption: "Learning JavaScript DOM manipulation 🚀",
    video:
      "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_720/7_ljgs7x.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 45,
    isFollowed: true,
  },
  {
    isMuted: true,
    username: "code.with.arya",
    likesCount: 980,
    isLiked: true,
    commentsCount: 56,
    caption: "React basics every beginner should know 💡",
    video:
      "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_720/v1769432730/2_a9grys.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1727107047534-99afc152baf7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 30,
    isFollowed: false,
  },
  {
    isMuted: true,
    username: "tech.monk",
    likesCount: 3421,
    isLiked: false,
    commentsCount: 210,
    caption: "Dark mode or light mode? 🤔",
    video:
      "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_720/v1769432728/10_xcxhil.mp4",
    userProfile:
      "https://plus.unsplash.com/premium_photo-1673758901565-c527094485f5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 120,
    isFollowed: true,
  },
  {
    isMuted: true,
    username: "frontend.fairy",
    likesCount: 765,
    isLiked: true,
    commentsCount: 34,
    caption: "CSS animations make UI alive ✨",
    video:
      "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_720/v1769432727/5_ghshzo.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 18,
    isFollowed: false,
  },
  {
    isMuted: true,
    username: "js.journey",
    likesCount: 1890,
    isLiked: true,
    commentsCount: 102,
    caption: "Event bubbling explained simply 👌",
    video:
      "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_720/v1769432726/1_khc5iy.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1604771968376-e6f1f321be5d?q=80&w=1069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 67,
    isFollowed: true,
  },
  {
    isMuted: true,
    username: "daily.dev.tips",
    likesCount: 2210,
    isLiked: false,
    commentsCount: 140,
    caption: "One VS Code shortcut you must know 🔥",
    video:
      "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_720/v1769432726/1_khc5iy.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 95,
    isFollowed: true,
  },
  {
    isMuted: true,
    username: "ui.ux.lab",
    likesCount: 540,
    isLiked: true,
    commentsCount: 22,
    caption: "Good design is invisible 🎨",
    video:
      "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_720/v1769432725/8_gswnra.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1586078130702-d208859b6223?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 12,
    isFollowed: false,
  },
  {
    isMuted: true,
    username: "backend.buddy",
    likesCount: 1640,
    isLiked: true,
    commentsCount: 88,
    caption: "REST API vs GraphQL – quick comparison ⚙️",
    video:
      "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_720/v1769432724/9_htvfst.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1736014630284-3c21ee0ea3aa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 54,
    isFollowed: true,
  },
  {
    isMuted: true,
    username: "student.coder",
    likesCount: 410,
    isLiked: false,
    commentsCount: 19,
    caption: "Coding late night hits different 🌙",
    video:
      "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_720/v1769432723/4_dm7eij.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1717632762988-d8bb99938943?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 9,
    isFollowed: false,
  },
  {
    isMuted: true,
    username: "fullstack.flow",
    likesCount: 2980,
    isLiked: false,
    commentsCount: 175,
    caption: "From frontend to backend – full stack grind 💪",
    video:
      "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_720/v1769432723/3_wms5po.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1745517105098-8a00ded18bf6?q=80&w=961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 110,
    isFollowed: true,
  },
];

var allReels = document.querySelector(".all-reels");

function addData() {
  var sum = "";
  reels.forEach((elem, idx) => {
    sum =
      sum +
      `
   <div class="reel">
   <div class="mute" id=${idx}>
      ${elem.isMuted ? '  <i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-line"></i>'}
      </div>
            <video autoplay loop playsinline preload="metadata" ${elem.isMuted ? "muted" : ""} src="${elem.video}"></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${elem.userProfile}"
                  alt=""
                  srcset=""
                />

                isMuted : true,
                <h4>${elem.username}</h4>
                <button id=${idx} class="follow">${elem.isFollowed ? "Unfollow" : "Follow"}</button>
              </div>
              <h3>
               ${elem.caption}
              </h3>
            </div>
            <div class="right">
              <div id=${idx} class="like">
                <h4 class="like-icon icon">${elem.isLiked ? '<i class="love ri-heart-fill"></i>' : '<i class=" ri-heart-line"></i>'}</h4>
                <h6>${elem.likesCount}</h6>
              </div>
              <div class="comment">
                <h4 class="comment-icon icon">
                  <i class="ri-chat-3-line"></i>
                </h4>
                <h6>${elem.commentsCount}</h6>
              </div>
              <div class="share">
                <h4 class="share-icon icon">
                  <i class="ri-share-forward-line"></i>
                </h4>
                <h6>${elem.shareCount}</h6>
                </div>
                
                <div class="menu">
                <h4 class="menu-icon icon"><i class="ri-more-2-line"></i></h4>
                </div>
                </div>
                </div>
                `;
  });

  allReels.innerHTML = sum;
}

addData();

allReels.addEventListener("click", (dets) => {
  if (dets.target.className == "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likesCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likesCount--;
      reels[dets.target.id].isLiked = false;
    }
    addData();
  }

  if (dets.target.className == "follow") {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true;
    } else {
      reels[dets.target.id].isFollowed = false;
    }

    addData();
  }

  if (dets.target.className == "mute") {
    if (!reels[dets.target.id].isMuted) {
      reels[dets.target.id].isMuted = true;
    } else {
      reels[dets.target.id].isMuted = false;
    }

    addData();
  }
});
