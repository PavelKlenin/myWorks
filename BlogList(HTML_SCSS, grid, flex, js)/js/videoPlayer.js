document.addEventListener('DOMContentLoaded', () => {
  const videoClip = document.querySelector('.video-data');
  const videoPlay =  document.querySelector('.video-play');

  const videoMute = document.querySelector('.video-mute');
  const videoVolume = document.querySelector('.video-vol');
  const videoProgress = document.querySelector('.video-progress');
  const videoVolLevel = document.querySelector('.video-volume-level');
  const videoControls = document.querySelector('.video-controls');


  function OneVideoPlayer(video, playBtn, volBtn, muteBtn) {
    const progressBarPadding = 3; // padding для точного вычисления прогрессбара
    
    // в каждом новом случае придется менять классы, чтобы переменные работали
    let fullTime = document.querySelector('.video-full-time');
    let currentTime = document.querySelector('.video-current-time');
    let currentVol = document.querySelector('.video-current-volume');
    let currentProgress = document.querySelector('.video-current-progress');


    this.init = () => {
      video.addEventListener('loadedmetadata', () => {
        setCurrentTime();
        setFullTime();
      })
    }

    this.play = () => {
      runProgress();
    }

    this.pause = () => {
      stopProgress();
    }


    this.setVolume = (percentVol = 100) => {
      video.volume = percentVol / 100; // громкость от 0 до 1
      currentVol.style.width = (percentVol == 0) ? `0` : `${percentVol}%`; // ширина блока текущей громкости
      // смена иконок vol/mute
      if (percentVol > 0) {
        volBtn.classList.contains('hidden') ? volBtn.classList.remove('hidden') : null;
        muteBtn.classList.add('hidden');
      } else {
        muteBtn.classList.contains('hidden') ? muteBtn.classList.remove('hidden') : null;
        volBtn.classList.add('hidden');
      }
    }

    this.setProgress = (percent = null) => {
      // если percent == null, считаем % по текущему времени
      let percentTime = percent ? percent : (video.currentTime / video.duration * 100); 
      // и задаем ширину прогрессбара
      currentProgress.style.width = (percent == 0) ? `0` : `${percentTime}%`;
      // если percent задан, считаем текущее время по %
      if (percent) {
        video.currentTime = percentTime / 100 * video.duration;
      }
      currentTime.innerHTML = (percentTime==100) ? timeFormat(0) : timeFormat(video.currentTime);
    }

    const runProgress = () => {
      playBtn.classList.add('hidden');
      videoControls.classList.remove('hidden');
      video.style.cursor = 'pointer';
      video.play();
      video.addEventListener('timeupdate', () => {
        this.setProgress()
        if (video.ended) {
          stopProgress();
          this.setProgress(0);
        }
      })
    }

    const stopProgress = () => {
      playBtn.classList.remove('hidden');
      videoControls.classList.add('hidden');
      video.style.cursor = 'auto';
      video.pause();
    }
    
    // для дополнительного "0" перед числом, если оно меньше 10
    const timeSize = (time) => {
      return time = (time < 10) ? ('0' + time) : time; 
    }

    // установка формата времени 00:00
    const timeFormat = (time = 0) => {
      let min = Math.floor(time / 60);
      let sec = Math.round(time % 60);
      return `${timeSize(min)}:${timeSize(sec)}`; 
    }

    // вычисляет новый % при нажатии на прогрессбар
    this.progressBar = (e, progressBarItem) => {
      e.preventDefault();
      let startCoordX = e.target.getBoundingClientRect().left; // начальная координата элемента по оси Х
      // вычисление % с учетом паддинга родительского блока (задается вручную)
      let newPercent = (e.clientX - (startCoordX + progressBarPadding)) / (progressBarItem.clientWidth - progressBarPadding * 2) * 100; //e.clientX - координата щелчка по оси Х
      // выставляем %, если щелчок мыши попал в padding
      if (newPercent > 100) {newPercent = 100}
      if (newPercent < 0) {newPercent = 0}
      return newPercent;
    }

    const setCurrentTime = () => {
      currentTime.innerHTML = timeFormat(video.currentTime);
    }

    const setFullTime = () => {
      fullTime.innerHTML = timeFormat(video.duration);
    }

  }

  const videoPlayer = new OneVideoPlayer(videoClip, videoPlay, videoVolume, videoMute);
  videoPlayer.init();

  videoPlay.addEventListener('click', (e) => {
    e.preventDefault();
    videoPlayer.play();
  })

  videoClip.addEventListener('click', (e) => {
    e.preventDefault();
    videoPlayer.pause();
  })

  videoVolume.addEventListener('click', (e) => {
    e.preventDefault();
    videoPlayer.setVolume(0);
  })

  videoMute.addEventListener('click', (e) => {
    e.preventDefault();
    videoPlayer.setVolume(100);
  })

  videoVolLevel.addEventListener('click', (e) => {
    let newPercent = videoPlayer.progressBar(e, videoVolLevel);
    videoPlayer.setVolume(newPercent);
  })

  videoProgress.addEventListener('click', (e) => {
    let newPercent = videoPlayer.progressBar(e, videoProgress);
    videoPlayer.setProgress(newPercent);
  })
})