// 1. Write a function that inserts an element into a list only if the element to be inserted is
// larger than any of the elements currently in the list. Larger can mean either greater than
// when working with numeric values, or further down in the alphabet, when working with textual values.

function insertIfLarger(list, elementToInsert) {
    if (list.length === 0) {
        list.push(elementToInsert);
        return true;
    }

    const allLarger = list.every((existingElement) => {
        if (
            typeof elementToInsert === "number" &&
            typeof existingElement === "number"
        ) {
            return elementToInsert > existingElement;
        } else if (
            typeof elementToInsert === "string" &&
            typeof existingElement === "string"
        ) {
            return elementToInsert.localeCompare(existingElement) > 0;
        }
        return false;
    });

    if (allLarger) {
        list.push(elementToInsert);
        return true;
    }

    return false;
}

const numbers = [10, 20, 30];
insertIfLarger(numbers, 40);

const words = ["apple", "banana", "cherry"];
insertIfLarger(words, "date");

// 2. Write a function that inserts an element into a list only if the element to be inserted
// is smaller than any of the elements currently in the list.

function insertIfLess(list, elementToInsert) {
    if (list.length === 0) {
        list.push(elementToInsert);
        return true;
    }

    const allSmaller = list.every((existingElement) => {
        if (
            typeof elementToInsert === "number" &&
            typeof existingElement === "number"
        ) {
            return elementToInsert < existingElement;
        } else if (
            typeof elementToInsert === "string" &&
            typeof existingElement === "string"
        ) {
            return elementToInsert.localeCompare(existingElement) < 0;
        }
        return false;
    });

    if (allSmaller) {
        list.push(elementToInsert);
        return true;
    }

    return false;
}

const digits = [10, 20, 30];
insertIfLess(digits, 4);

// 3. Create a Person class that stores a person’s name and their gender. Create a list of at least 10 Person objects.
// Write a function that displays all the people in the list of the same gender.
class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

function displayPeople(list, gender) {
    if (list.length === 0) {
        return false;
    }

    if (
        gender === "Male" ||
        gender === "male" ||
        gender === "Female" ||
        gender === "female"
    ) {
        const sameGender = list.filter((item) => item.gender === gender);
        return sameGender;
    }
}

const people = [
    new Person("Masibonge", "Male"),
    new Person("John", "Male"),
    new Person("Jane", "Female"),
    new Person("Daisy", "Female"),
    new Person("Josh", "Male"),
    new Person("Thabo", "Male"),
    new Person("Kirsten", "Male"),
    new Person("Themba", "Male"),
    new Person("Divan", "Male"),
    new Person("Ashley", "Female"),
];

console.log(displayPeople(people, "female"));

// 4. Modify the video-rental kiosk program so that when a movie is checked out it is added
// to a list of rented movies. Display this list whenever a customer checks out a movie.

// Read Contents of File

// Add Contents in Available Movie Array/Lists

// Create Function To Remove Videos From Normal Array to Rented Movies Array

// Display Available Movie && Rented Movies Array/Lists



// 5. Create a check-in function for the video-rental kiosk program so that a returned movies
// is deleted from the rented movies list and is added back to the available movies list.

// Create Check In Fuction to Remove Movie From Rented Movies Array/List

// Then Add Back Available Movie Array/Lists