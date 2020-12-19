interface Person {
  name: string,
  age: number
}

const person : Person = {
  name: 'Raphael Collin',
  age: 18
};

async function printDetails() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  console.log(person.name);
  console.log(person.age);
}

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

printDetails();

const title = document.querySelector('h1')! as HTMLElement;

title.addEventListener('click', () => {
  title.style.color = `#${getRandomColor()}`
})
