const add = (a, b) => a + b;
const greeting = (name) => `Hello ${name}!`;

test('Adding two numbers together', () => {
const result = add(3, 4);

if (result !== 7) { 
  throw new Error(`You added two numbers, it should have been 7. Your result was ${result}`);
  }
}
);

test('greeting with name', ()=> {
    const mike = greeting('Mike'); 
    expect(mike).toBe('Hello Mike!')
})