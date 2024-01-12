const sayHello = () => {
    return "Hello";
};
console.log(sayHello());
const sayHelloToPerson = (greeter, person) => {
    return greeter() + " " + person;
};
console.log(sayHelloToPerson(sayHello, "jack"));
const greeterMaker = greeting => {
    return person => {
        return greeting + " " + person;
    };
};
const sayHiToPerson = greeterMaker("Hi")
console.log(sayHiToPerson("jane"))
const sayHowdyToperson = greeterMaker("Howdy");
console.log(sayHowdyToperson("Bob"));