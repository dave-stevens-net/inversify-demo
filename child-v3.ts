import { injectable, inject } from "inversify";
import { IChild } from "./child-v2";

@injectable()
export default class ChildV3 implements IChild {
  private logger: Console;

  constructor(@inject('Console') logger: Console) {
    this.logger = logger;
  }

  doSomething(): string {
    this.logger.log('say hello v2');
    return 'ok';
  }
}
