document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // YES / NO BUTTON
  // =========================

  const yes = document.getElementById("yesBtn");
  const no = document.getElementById("noBtn");
  const toast = document.getElementById("toast");

  if (yes) {
    yes.addEventListener("click", () => {
      yes.textContent = "yes ♡";
      document.body.classList.add("page-transition");

      setTimeout(() => {
        location.href = "love.html";
      }, 550);
    });
  }

  if (no) {
    const runAway = () => {
      no.classList.add("runaway");

      const pad = 35;

      const x =
        Math.random() *
        Math.max(
          1,
          window.innerWidth - no.offsetWidth - pad * 2
        ) + pad;

      const y =
        Math.random() *
        Math.max(
          1,
          window.innerHeight - no.offsetHeight - pad * 2
        ) + pad;

      no.style.left = `${x}px`;
      no.style.top = `${y}px`;

      if (toast) {
        toast.classList.add("show");

        clearTimeout(window.__toastTimer);

        window.__toastTimer = setTimeout(() => {
          toast.classList.remove("show");
        }, 1800);
      }
    };

    no.addEventListener("mouseenter", runAway);

    no.addEventListener("touchstart", e => {
      e.preventDefault();
      runAway();
    });

    no.addEventListener("click", runAway);
  }


  // =========================
  // LOVE.HTML MUSIC PLAYER
  // =========================

  const play = document.getElementById("playBtn");
  const eq = document.getElementById("equalizer");
  const loveSong = document.getElementById("loveSong");

  if (play && eq && loveSong) {

    play.addEventListener("click", () => {

      if (loveSong.paused) {
        loveSong.play();

        eq.classList.add("playing");
        play.textContent = "❚❚";

      } else {
        loveSong.pause();

        eq.classList.remove("playing");
        play.textContent = "▶";
      }

    });

    loveSong.addEventListener("ended", () => {
      play.textContent = "▶";
      eq.classList.remove("playing");
    });

  }


  // =========================
  // TERMINAL OK BUTTON
  // =========================

  const ok = document.getElementById("okButton");

  if (ok) {

    ok.addEventListener("click", () => {

      const terminal = ok.closest(".terminal-window");

      terminal.style.transform = "scale(.2) rotate(8deg)";
      terminal.style.opacity = "0";
      terminal.style.transition = ".5s";

    });

  }


  // =========================
  // LITTLE-THINGS PLAYLIST
  // =========================

  const miniPlay = document.getElementById("miniPlay");
  const miniPrevious = document.getElementById("miniPrevious");
  const miniNext = document.getElementById("miniNext");

  const playlistAudio =
    document.getElementById("playlistAudio");

  const playlist =
    document.getElementById("playlist");

  const playlistProgress =
    document.getElementById("playlistProgress");

  const playlistProgressFill =
    document.getElementById("playlistProgressFill");


  if (
    miniPlay &&
    miniPrevious &&
    miniNext &&
    playlistAudio &&
    playlist &&
    playlistProgress &&
    playlistProgressFill
  ) {

    const songs = playlist.querySelectorAll("li");

    let currentSong = 0;


    // PLAY A SONG
    function playSong(index) {

      const song = songs[index];

      playlistAudio.src = song.dataset.song;

      playlistAudio.play();

      songs.forEach(item => {
        item.classList.remove("selected");
      });

      song.classList.add("selected");

      miniPlay.textContent = "❚❚";

    }


    // CLICK ON A SONG
    songs.forEach((song, index) => {

      song.addEventListener("click", () => {

        currentSong = index;

        playSong(currentSong);

      });

    });


    // PLAY / PAUSE
    miniPlay.addEventListener("click", () => {

      if (playlistAudio.paused) {

        playSong(currentSong);

      } else {

        playlistAudio.pause();

        miniPlay.textContent = "▶";

      }

    });


    // PREVIOUS SONG
    miniPrevious.addEventListener("click", () => {

      currentSong--;

      if (currentSong < 0) {
        currentSong = songs.length - 1;
      }

      playSong(currentSong);

    });


    // NEXT SONG
    miniNext.addEventListener("click", () => {

      currentSong++;

      if (currentSong >= songs.length) {
        currentSong = 0;
      }

      playSong(currentSong);

    });


    // UPDATE PROGRESS BAR
    playlistAudio.addEventListener("timeupdate", () => {

      if (!playlistAudio.duration) {
        return;
      }

      const percentage =
        (playlistAudio.currentTime /
          playlistAudio.duration) *
        100;

      playlistProgressFill.style.width =
        `${percentage}%`;

    });


    // CLICK ON PROGRESS BAR
    playlistProgress.addEventListener("click", event => {

      if (!playlistAudio.duration) {
        return;
      }

      const width =
        playlistProgress.clientWidth;

      const clickPosition =
        event.offsetX;

      const percentage =
        clickPosition / width;

      playlistAudio.currentTime =
        percentage * playlistAudio.duration;

    });


    // SONG ENDS → NEXT SONG
    playlistAudio.addEventListener("ended", () => {

      currentSong++;

      if (currentSong >= songs.length) {
        currentSong = 0;
      }

      playSong(currentSong);

    });

  }


  // =========================
  // RANDOM CAT
  // =========================
  // =========================
  // RANDOM CAT
  // =========================

  const catButton =
    document.getElementById("catButton");

  const bigCat =
    document.querySelector(".big-cat");

  const catImage =
    document.getElementById("catImage");

  const cats = [
    "images/cat1.jpeg",
    "images/cat2.jpeg",
    "images/cat3.jpeg",
    "images/cat4.jpeg",
    "images/cat5.jpeg"
  ];

  if (catButton && bigCat && catImage) {

    catButton.addEventListener("click", () => {

      const randomCat =
        cats[Math.floor(Math.random() * cats.length)];

      catImage.src = randomCat;

      bigCat.animate(
        [
          {
            transform: "scale(.6) rotate(-8deg)"
          },
          {
            transform: "scale(1.1) rotate(5deg)"
          },
          {
            transform: "scale(1)"
          }
        ],
        {
          duration: 450,
          easing: "cubic-bezier(.2,.8,.2,1)"
        }
      );

    });

  }
  // =========================
  // PAGE TRANSITIONS
  // =========================

  document.querySelectorAll("a[href]").forEach(link => {

    link.addEventListener("click", e => {

      const href =
        link.getAttribute("href");

      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http")
      ) {
        return;
      }

      e.preventDefault();

      document.body.style.opacity = "0";
      document.body.style.transition =
        "opacity .25s";

      setTimeout(() => {
        location.href = href;
      }, 250);

    });

  });

  // =========================
  // MIDNIGHT MUSIC PLAYER
  // =========================

  const nightPlay = document.getElementById("nightPlay");
  const nightPrevious = document.getElementById("nightPrevious");
  const nightNext = document.getElementById("nightNext");

  const nightSong =
    document.getElementById("nightSong");

  const nightWave =
    document.getElementById("nightWave");

  const nightProgress =
    document.getElementById("nightProgress");

  const nightProgressFill =
    document.getElementById("nightProgressFill");


  if (
    nightPlay &&
    nightPrevious &&
    nightNext &&
    nightSong &&
    nightWave &&
    nightProgress &&
    nightProgressFill
  ) {

    // PLAY / PAUSE
    nightPlay.addEventListener("click", () => {

      if (nightSong.paused) {

        nightSong.play();

        nightPlay.textContent = "❚❚";
        nightWave.classList.add("playing");

      } else {

        nightSong.pause();

        nightPlay.textContent = "▶";
        nightWave.classList.remove("playing");

      }

    });


    // PREVIOUS = restart song
    nightPrevious.addEventListener("click", () => {

      nightSong.currentTime = 0;
      nightSong.play();

      nightPlay.textContent = "❚❚";
      nightWave.classList.add("playing");

    });


    // NEXT = restart song for now
    nightNext.addEventListener("click", () => {

      nightSong.currentTime = 0;
      nightSong.play();

      nightPlay.textContent = "❚❚";
      nightWave.classList.add("playing");

    });


    // UPDATE PROGRESS
    nightSong.addEventListener("timeupdate", () => {

      if (!nightSong.duration) {
        return;
      }

      const percentage =
        (nightSong.currentTime / nightSong.duration) * 100;

      nightProgressFill.style.width =
        `${percentage}%`;

    });


    // CLICK ON PROGRESS BAR
    nightProgress.addEventListener("click", event => {

      if (!nightSong.duration) {
        return;
      }

      const rect =
        nightProgress.getBoundingClientRect();

      const clickPosition =
        event.clientX - rect.left;

      const percentage =
        clickPosition / rect.width;

      nightSong.currentTime =
        percentage * nightSong.duration;

    });


    // SONG ENDS
    nightSong.addEventListener("ended", () => {

      nightPlay.textContent = "▶";
      nightWave.classList.remove("playing");
      nightProgressFill.style.width = "0%";

    });

  }


});