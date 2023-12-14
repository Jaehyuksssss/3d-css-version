import { Handlers } from "../triggers";

export class A implements Handlers {
  // must init -> useEffect
  init(): void {
    console.log("create A init");
  }
}
