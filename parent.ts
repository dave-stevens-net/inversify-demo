import { IChild } from "./child-v2";

export default class Parent {
  private child: IChild;

  constructor(child: IChild) {
    this.child = child;
  }
  doSomething(): string {
    this.child.doSomething();
    return 'parent ok';
  }
}
