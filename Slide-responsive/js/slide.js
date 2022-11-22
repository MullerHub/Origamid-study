export default class slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)
  };

  onStart(event) {
    event.preventDefault()
    this.wrapper.addEventListener('mousemove')
  };

  onMove(event) {

  }

  onEnd(event) {
    this.wrapper.addEventListener('mousemove', this.onMove)
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousemove', this.onEnd)
  };

  bindEvents() {
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onEnd = this.onEnd.bind(this)
  };

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  };



}