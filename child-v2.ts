export interface IChild {
  doSomething(): string;
}

export default class ChildV2 implements IChild {
  private logger: Console;

  constructor(logger: Console) {
    this.logger = logger; // inject our dependencies at the constructor level
  }

  doSomething(): string {
    this.logger.log('say hello v2');
    return 'ok';
  }
}
