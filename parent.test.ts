import "reflect-metadata";

import { IChild } from "./child-v2";
import Parent from "./parent";

test('parent works', () => {
  const child:IChild = {
    doSomething: () => 'ok'
  }
  const parent = new Parent(child);
  expect(parent.doSomething()).toBe('parent ok');
})
