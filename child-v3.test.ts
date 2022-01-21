import "reflect-metadata";
import ChildV3 from "./child-v3";

test('child v2 works', () => {
  const mockConsole = {
    log: (msg: string) => { return }
  } as Console
  const child = new ChildV3(mockConsole);
  expect(child.doSomething()).toBe('ok');
})
