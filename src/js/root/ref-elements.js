export class RefElements {

  constructor() {
    this.html = document.querySelector('html');
    this.body = document.querySelector('body');
  }

  disableScroll() {
    this.html.classList.add('gm-scroll-hide');
    this.body.classList.add('gm-scroll-hide');
  }

  enableScroll() {
    this.html.classList.remove('gm-scroll-hide');
    this.body.classList.remove('gm-scroll-hide');
  }

  checkElementInDOM(elm, func) {
    if (typeof (elm) != 'undefined' && elm != null) {
      return func()
    }
  }
}
