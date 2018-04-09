//1

const name = 'Keith';

const printName = function () {
  console.log(`My name is ${ name }`);
}

printName();

//prints 'My name is Keith' to the terminal. name is a constant which can be seen outwith printName.
//therefore printName can see that name = 'Keith'. the constant printName is a function
// which prints out 'My name is' plus whatever the constant name has been assigned to be, hence
//we can see in the terminal 'My name is Verity'.

//2

const score = 5;

const result = function () {
  const score = 3;
  return score;
}

console.log(result());

//will print 3. the constant result is a function which returns another constant, named score, which
//is equal to 3. although outside of the function there is a constant equal to 5, this has been redeclared,
//and effectively overwritten by the function. hence we can see in the terminal the number 3.

//3

const myAnimals = ['Chickens', 'Cats', 'Rabbits'];

const listAnimals = function () {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];

  for (const i = 0; i < myAnimals.length; i++) {
    console.log(`${ i }: ${ myAnimals[i] }`);
  }
}

listAnimals();

//this episode throws up an error. this is because the constant listAnimals attempts to reassign the constant
//myAnimals. this is not allowed so JS stops it from happening. the difference between this and what's
//happening in episode 2 is that score was redeclared, i.e. becomes a whole new constant, whereas here
// myAnimals is still the original constant.

//4

const suspectOne = 'Jay';
const suspectTwo = 'Val';
const suspectThree = 'Keith';
const suspectFour = 'Rick';

const allSuspects = function () {
  const suspectThree = 'Harvey';
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
}

allSuspects();
console.log(`Suspect three is: ${ suspectThree }`);

//prints 'Suspects include: Jay, Val, Harvey, Rick' followed by 'Suspect three is: Keith'
//the constant allSuspects is a function which prints a list of all the suspects to the terminal.
//however before this, it redeclares the constant suspectThree to be Harvey as opposed to Keith.
//hence why Keith is not included when allSuspects is called. outside of the constant allSuspects,
//suspectThree remains as Keith, hence why the second statement in the terminal states the
//third suspect to be Keith.

//5

const detective = {
  name: 'Ace Ventura',
  pet: 'monkey'
};

const printName = function (detective) {
  return detective.name;
}

const detectiveInfo = function () {
  detective['name'] = 'Poirot';
  return printName(detective);
}

console.log(detectiveInfo());

//prints 'Poirot' to the terminal. the constant detectiveInfo reassigns the name of the Object
//detective to be Poirot. it then calls the constant printName which returns the name of the passed
//in detective, hence we see Poirot in the terminal.

//6

const murderer = 'rick';

const outerFunction = function () {
  const murderer = 'marc';

  const innerFunction = function () {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log(`The murderer is: ${ murderer }`);

//this episode throws up an error because the outerFunction calls the innerFunction which attempts
//to reassign the value of murderer, which cannot be done as murderer is a constant.
