import "reflect-metadata";

import { IChild } from "./child-v2";
import ParentV2 from "./parent-v2";

test('parent works', () => {
  const child:IChild = {
    doSomething: () => 'ok'
  }
  const parent = new ParentV2(child);
  expect(parent.doSomething()).toBe('parent ok');
})
