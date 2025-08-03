// 1. Create a grades object that stores a set of student grades in an object.
// (a) Provide a function for adding a grade
// (b) and a function for displaying the student’s grade average.

const grades = {
    studentGrades: [10, 20, 30, 40, 50],
    addGrade: function (newGrade) {
        this.studentGrades.push(newGrade);
        console.log(`Added ${newGrade}`);
        console.log(`Current data: ${this.studentGrades}`);
    },
    calcGradeAverage: function () {
        let sum = 0;
        for (let i = 0; i < this.studentGrades.length; i++) {
            sum += this.studentGrades[i];
        }

        console.log(">>>> Grade Average");
        console.log(sum / this.studentGrades.length);

        return sum / this.studentGrades.length;
    },
};

const newValue = grades.addGrade(20);
const average = grades.calcGradeAverage();

// 2. Store a set of words in an array and display the contents both forward and backward.
const words = ["Masi", "Sisipho", "Khanyisile", "BetSoftware"];
console.log(">>> Display Words Forward");
for (var i = 0; i < words.length; i++) {
    console.log(words[i]);
}

console.log(">>> Display Words Backward");
for (var i = words.length - 1; i >= 0; i--) {
    console.log(words[i]);
}

// 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array.
// (a) Create functions to display the monthly average
// (b) a specific week’s average
// (c) and all the weeks’ averages.

const weeklyTemps = {
    dataStore: [
        [72, 75, 79, 79, 81, 81, 73], 
        [73, 76, 78, 80, 82, 85, 84], 
        [70, 71, 74, 78, 79, 80, 77],
        [68, 70, 72, 74, 76, 78, 80],
    ],
    calcMonthlyAverage: function () {
        let total = 0;
        let count = 0;
        let average = 0.0;

        for (var row = 0; row < this.dataStore.length; ++row) {
            for (var col = 0; col < this.dataStore[row].length; ++col) {
                total += this.dataStore[row][col];
                count++;
            }
        }

        average = total / count;
        console.log("Monthly Average: " + average.toFixed(2));
    },
    calcSpecificWeekAverage: function (weekNumber) {
        if (weekNumber < 1 || weekNumber > this.data.length) {
            return "Invalid week number";
        }
        let week = this.data[weekNumber - 1];
        let total = week.reduce((sum, temp) => sum + temp, 0);
        return (total / week.length).toFixed(2);
    },
    calcAllWeeksAverage: function () {
        for (let i = 0; i < this.data.length; i++) {
            let avg = this.weeklyAverage(i + 1);
            console.log("Week " + (i + 1) + " average: " + avg);
        }
    },
};

console.log("Monthly average:", weeklyTemps.monthlyAverage());
console.log("Week 2 average:", weeklyTemps.weeklyAverage(2));
weeklyTemps.allWeeklyAverages();

// 4. Create an object that stores individual letters in an array
// (a) and has a function for displaying the letters as a single word.

const letters = {
    data: ["a", "b", "c", "d", "e"],
    displayLetters: function () {
        console.log(">>> Single Word");
        for (var i = 0; i < this.data.length; i++) {
            console.log(this.data[i]);
        }
    },
};

const displayArrayLetters = letters.displayLetters();
