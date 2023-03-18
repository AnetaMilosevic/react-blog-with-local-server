export const SelectGreeting = () => {
  const rand = Math.random();
  return rand < 0.5 ? <p>cao kole</p> : <p>cao aneta</p>;
};
