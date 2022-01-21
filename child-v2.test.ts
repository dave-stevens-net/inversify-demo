import ChildV2 from "./child-v2";

test('child v2 works', () => {
  // Now I can mock my dependency!
  const mockConsole = {
    log: (msg: string) => { return }
  } as Console

  // And insert it during the constructor.
  const child = new ChildV2(mockConsole);
  expect(child.doSomething()).toBe('ok');
})
