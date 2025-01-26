export default class Timer {
  constructor() {
    this.start = 0;
    this.count = '';
    this.isTimerActive = false;
    this.time = 0;
    this.timerInterval;
  }
  play() {
    if (!this.isTimerActive) {
      this.isTimerActive = true;
      this.start = Date.now();

      this.timerInterval = setInterval(() => {
        this.time = Date.now() - this.start;
      }, 1000);
    }
  }

  stop() {
    if (this.isTimerActive) {
      const time = this.time;

      this.time = 0;
      this.isTimerActive = false;
      clearInterval(this.timerInterval);
      return time;
    }
  }
}
