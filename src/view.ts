import { Handlers } from "./triggers";

export default class CardsHandler implements Handlers {
  private cardsWrapper: HTMLDivElement;
  private overlay: HTMLDivElement;

  constructor() {
    this.cardsWrapper = document.getElementById(
      "main-wrapper"
    ) as HTMLDivElement;
    this.overlay = document.querySelector("overlay") as HTMLDivElement;
    console.log(this.overlay);
    console.log(this.cardsWrapper);
    this.init();
  }

  init() {
    console.log("create cradHandler init");
    this.setEventListener();
  }

  private setEventListener() {
    this.cardsWrapper.addEventListener("mousemove", this.handleMouseEvent);
  }

  private handleMouseEvent = (e: MouseEvent): void => {
    let x = e.offsetX;
    let y = e.offsetY;

    let rotateY = -1.5 * x + 20;
    let rotateX = (4 / 30) * y - 20;

    this.cardsWrapper.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    this.overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;
  };
}
