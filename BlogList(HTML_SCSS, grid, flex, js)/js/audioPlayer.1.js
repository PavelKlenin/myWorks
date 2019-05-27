document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('.audio-data');
  const audioPlayBtn =  document.querySelector('.audio-play-btn');
  const audioPauseBtn = document.querySelector('.audio-pause-btn');
  const audioMuteBtn = document.querySelector('.audio-mute');
  const audioVolumeBtn = document.querySelector('.audio-vol');
  const audioProgress = document.querySelector('.audio-progress');
  const audioVolLevel = document.querySelector('.audio-volume-level');
  
  
  function OneSongPlayer(song, playBtn, pauseBtn, volBtn, muteBtn) {
    const progressBarPadding = 3; // padding для точного вычисления прогрессбара
    
    // в каждом новом случае придется менять классы, чтобы переменные работали
    let currentTime = document.querySelector('.audio-current-time');
    let fullTime = document.querySelector('.audio-full-time');
    let currentVol = document.querySelector('.audio-current-volume');
    let currentProgress = document.querySelector('.audio-current-progress');


    this.init = () => {
      song.addEventListener('loadedmetadata', () => {
        setCurrentTime();
        setFullTime();
      })
  }

    // смена иконок play/pause
    const toggleBtn = (btn1, btn2) => {
      btn1.classList.toggle('hidden');
      btn2.classList.toggle('hidden');
    }

    this.play = () => {
      runProgress();
    }
  
    this.pause = () => {
      stopProgress();
    }


    this.setVolume = (percentVol = 100) => {
      song.volume = percentVol / 100; // громкость от 0 до 1
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
      let percentTime = percent ? percent : (song.currentTime / song.duration * 100); 
      // и задаем ширину прогрессбара
      currentProgress.style.width = (percent == 0) ? `0` : `${percentTime}%`;
      // если percent задан, считаем текущее время по %
      if (percent) {
        song.currentTime = percentTime / 100 * song.duration;
      }
      currentTime.innerHTML = (percentTime==100) ? timeFormat(0) : timeFormat(song.currentTime);
    }

    const runProgress = () => {
      song.play();
      toggleBtn(playBtn, pauseBtn);
      song.addEventListener('timeupdate', () => {
        this.setProgress();
        // если песня закончилась, обнуляем прогресс и останавливаем песню
        if (song.ended) {
          stopProgress();
          this.setProgress(0);
        }
      })
    }

    const stopProgress = () => {
      song.pause();
      toggleBtn(playBtn, pauseBtn);
    }

    const timeSize = (time) => {
      return time = (time < 10) ? ('0' + time) : time; // для дополнительного "0" перед числом, если оно меньше 10
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
      currentTime.innerHTML = timeFormat(song.currentTime);
    }

    const setFullTime = () => {
      fullTime.innerHTML = timeFormat(song.duration);
    }
  
  }

  const player = new OneSongPlayer(audio, audioPlayBtn, audioPauseBtn, audioVolumeBtn, audioMuteBtn);
  player.init();

  audioPlayBtn.addEventListener('click', (e) => {
    e.preventDefault();
    player.play();
  })

  audioPauseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    player.pause();
  })

  audioVolumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    player.setVolume(0);
  })

  audioMuteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    player.setVolume(100);
  })

  audioVolLevel.addEventListener('click', (e) => {
    let newPercent = player.progressBar(e, audioVolLevel);
    player.setVolume(newPercent);
  })

  audioProgress.addEventListener('click', (e) => {
    let newPercent = player.progressBar(e, audioProgress);
    player.setProgress(newPercent);
  })
  
})