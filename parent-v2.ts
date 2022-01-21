import { injectable, inject } from "inversify";
import { IChild } from "./child-v2";

export interface IParent {
  doSomething(): string;
}

@injectable()
export default class ParentV2 implements IParent {
  private child: IChild;

  constructor(@inject('IChild') child: IChild) {
    this.child = child;
  }

  doSomething(): string {
    this.child.doSomething();
    return 'parent ok';
  }
}
