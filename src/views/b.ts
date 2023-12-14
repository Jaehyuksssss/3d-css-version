import { Handlers } from "../triggers";

export class B implements Handlers {
  init(): void {
    console.log("create B init");
  }
}
