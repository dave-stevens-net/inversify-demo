import Child from "./child";

test('child works', () => {
  const child = new Child();
  expect(child.doSomething()).toBe('ok');
})
