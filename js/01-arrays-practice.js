/* eslint-env browser */

//STEP 1 : STRING ARRAY
//var favoriteMovies = ["The Mission", "Goodfellas", "Mujeres al borde de un ataque de nervios", "The Princess Bride", "Young Frankenstein"];
//window.console.log(favoriteMovies[1]);

//STEP 2 : FUNCTION CONSTRUCTOR
//var Movies = new Array(5);
//Movies[0] = "The Mission";
//Movies[1] = "Goodfellas";
//Movies[2] = "Mujeres al borde de un ataque de nervios";
//Movies[3] = "The Princess Bride";
//Movies[4] = "Young Frankenstein";
//window.console.log(Movies[0]);

//STEP 3 : ADD ELEMENT & SHOW LENGTH
//var Movies = new Array(5);
//Movies[0] = "The Mission";
//Movies[1] = "Goodfellas";
//Movies[2] = "Mujeres al borde de un ataque de nervios";
//Movies[3] = "The Princess Bride";
//Movies[4] = "Young Frankenstein";
//
//Movies[5] = "Little Miss Sunshine";
//window.console.log(Movies.length);

//STEP 4 : LITERAL NOTATION & DELETE OPERATOR
//var movies = ["The Mission", "Goodfellas", "Mujeres al borde de un ataque de nervios", "The Princess Bride", "Young Frankenstein"];
//delete movies[0];
//window.console.log(movies);

//STEP 5 : LITERAL NOTATION & FOR LOOP
//var i;
//var movies = ["The Others", "Hedwig and the Angry Inch", "The Orphanage", "Charade", "To Catch a Thief", "Stalag 17", "Muriel's Wedding"];
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log(movies[i]);
//}

//STEP 6 : LITERAL NOTATION & FOR IN LOOP
//var i;
//var movies = ["The Others", "Hedwig and the Angry Inch", "The Orphanage", "Charade", "To Catch a Thief", "Stalag 17", "Muriel's Wedding"];
//for (i in movies) {
//    if (movies.hasOwnProperty(i)) {
//        window.console.log(movies[i]);
//    }
//}

//STEP 7 : FOR IN LOOP & SORT() METHOD ***** Recheck this one *****
//var i;
//var movies = ["The Others", "Hedwig and the Angry Inch", "The Orphanage", "Charade", "To Catch a Thief", "Stalag 17", "Muriel's Wedding"];
//for (i in movies) {
//    if (movies.hasOwnProperty(i)) {
//        window.console.log(movies.sort()[i]);
//    }
//}

//STEP 8 : USE JOIN() METHOD
//var favoriteMovies = ["The Others", "Hedwig and the Angry Inch", "The Orphanage", "Charade", "To Catch a Thief", "Stalag 17", "Muriel's Wedding"];
//var leastFavMovies = ["The Blind Side", "Crash", "La La Land"];
//window.console.log("Movies I love to watch when on:\n" + "\n" + favoriteMovies.join("\n") + "\n" + "...\n");
//window.console.log("Movies I would avoid watching again:\n" + "\n" + leastFavMovies.join("\n") + "\n" + "...\n");

//STEP 9 : CONCAT(), REVERSE(), & SORT() METHODS
//var favoriteMovies = ["The Others", "Hedwig and the Angry Inch", "The //Orphanage", "Charade", "To Catch a Thief", "Stalag 17", "Muriel's Wedding"];
//var leastFavMovies = ["The Blind Side", "Crash", "La La Land"];
//var movies = favoriteMovies.concat(leastFavMovies);
//window.console.log(movies.reverse(movies.sort()));

//STEP 10 : SHOW LAST ELEMENT 
//var favoriteMovies = ["The Others", "Hedwig and the Angry Inch", "The Orphanage", "Charade", "To Catch a Thief", "Stalag 17", "Muriel's Wedding"];
//var leastFavMovies = ["The Blind Side", "Crash", "La La Land"];
//var movies = favoriteMovies.concat(leastFavMovies);
//var fullList = movies.length;
//window.console.log(movies[fullList-1]);

//STEP 11 : SHOW FIRST ELEMENT
//var favoriteMovies = ["The Others", "Hedwig and the Angry Inch", "The Orphanage", "Charade", "To Catch a Thief", "Stalag 17", "Muriel's Wedding"];
//var leastFavMovies = ["The Blind Side", "Crash", "La La Land"];
//var movies = favoriteMovies.concat(leastFavMovies);
//window.console.log(movies[0]);

//STEP 12 : REMOVE & REPLACE 
//var favoriteMovies = ["The Others", "Hedwig and the Angry Inch", "The Orphanage", "Charade", "To Catch a Thief", "Stalag 17", "Muriel's Wedding"];
//var leastFavMovies = ["The Blind Side", "Crash", "La La Land"];
//var movies = favoriteMovies.concat(leastFavMovies);
//
//for(i = 0; i < movies.length; i++) {
//    if(movies[i] === leastFavMovies[0]){
//        var moviePos1 = i;
//        window.console.log(moviePos1);
//    }
//}
//
//for(i = 0; i < movies.length; i++) {
//    if(movies[i] === leastFavMovies[1]){
//        var moviePos2 = i;
//        window.console.log(moviePos2);
//    }
//}
//
//for(i = 0; i < movies.length; i++) {
//    if(movies[i] === leastFavMovies[2]){
//        var moviePos3 = i;
//        window.console.log(moviePos3);
//    }
//}
//
//for(i = 0; i < movies.length; i++) {
//    movies.splice(7,leastFavMovies.length,"Spy Games", "Office Space", "Shawshank Redemption")
//}
//window.console.log(movies);


//STEP 13 : ASSOCIATIVE ARRAYS
//var employee1 = [];
//employee1["id"] = 02271932;
//employee1["name"] = "Elizabeth Taylor";
//employee1["title"] = "Actor";
//employee1["department"] = "Dead Thespians";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 11101925;
//employee2["name"] = "Richard Burton";
//employee2["title"] = "Actor";
//employee2["department"] = "Dead Thespians";
//employee2["isCurrent"] = true;
//
//var employees = [employee1, employee2];
//
//window.console.log(employees[1]["name"]);

////STEP 14 : SHOW NAMES OF ALL EMPLOYEES

//var i;
//var employee1 = [];
//employee1["id"] = 02271932;
//employee1["name"] = "Elizabeth Taylor";
//employee1["title"] = "Actor";
//employee1["department"] = "Dead Thespians";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 11101925;
//employee2["name"] = "Richard Burton";
//employee2["title"] = "Actor";
//employee2["department"] = "Dead Thespians";
//employee2["isCurrent"] = true;
//
//var employees = [employee1, employee2];
//for (i in employees) {
//    if (employees.hasOwnProperty(i)) {
//        window.console.log(employees[i]["name"]);	
//    }
//}
  
//STEP 15 : SHOW ONLY EMPLOYEES IN CURRENT STATUS
//var i;
//var employee1 = [];
//employee1["id"] = 02271932;
//employee1["name"] = "Elizabeth Taylor";
//employee1["title"] = "Actor";
//employee1["department"] = "Dead Thespians";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 11101925;
//employee2["name"] = "Richard Burton";
//employee2["title"] = "Actor";
//employee2["department"] = "Dead Thespians";
//employee2["isCurrent"] = true;
//
//var employees = [employee1, employee2];
//
//var employee3 = [];
//    employee3["id"] = 07011916;
//    employee3["name"] = "Olivia de Havilland";
//    employee3["title"] = "Actor";
//    employee3["department"] = "Dead Thespians";
//    employee3["isCurrent"] = false; 
//
//employees.push(employee3);
//
//for (employee in employees) {
//    if (employees[employee]["isCurrent"] === true) {
//        window.console.log(employees[employee]);	
//    } 
//}
  
//STEP 16 : .FILTER() OUT MOVIE TITLES BASED ON DATATYPE
//var moviesRanked = [
//    ["A Little Romance", 1],
//    ["Volver", 2],
//    ["Elizabeth", 3],
//    ["El secreto de sus ojos", 4],
//    ["The Lives of Others", 5]
//];
//
//function showTitles(movie) {
//    "use strict";
//    var value;
//    for(value in movie) {
//        if (typeof movie[value] === "string") {
//            window.console.log(movie[value]);
//        }
//    }
//}
//moviesRanked.filter(showTitles);

//STEP 17 : PASS ARRAY INTO FUNCTION AS PARAMETER
//var i;
//var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
//
//function showEmployee(employees) {
//    "use strict";
//    for (i = 0; i < employees.length; i += 1) {
//        return showEmployee();
//    }
//}
//window.console.log("Employees:\n" + "\n" + employees.join("\n"));

//STEP 18 : FILTER FALSE, NULL, 0 and BLANK VALUES FROM ARRAY
//          >>> Remember that zero is false... <<<

//var values = [58, '', 'abcd', true, null, false, 0];
//
//function filterItems(value) {
//    "use strict";
//    if (value !== null) {
//        if (value > 0 || typeof value === "string") {
//            if(value !== "") {
//                window.console.log(value);
//            }
//        }
//    }
//}
//values.filter(filterItems);

////STEP 19 : GET A RANDOM ITEM
//OPTION 1
//var i, random, len, zodiac = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
//
//len = zodiac.length;
//random = Math.floor(Math.random() * len);
//for (i = 0; i < len; i += 1) {
//    window.console.log(zodiac[random]);
//}

//OPTION 2
//var i, index, random, len, zodiac = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
//function randomIndex() {
//    "use strict";
//    len = zodiac.length;
//    random = Math.floor(Math.random() * len);
//    return random;
//}
//
//index = randomIndex();
//for (i = 0; i < len; i += 1) {
//    window.console.log(zodiac[index]);
//}

//
//STEP 20
var numbers = [14, 27, 81, 3, 56, 38, 72];

function largestNumber() {
    "use strict";
    var orderNumbers;
    orderNumbers = numbers.sort();
    window.console.log(orderNumbers.slice(-1));
}
largestNumber();
    
// OR Math.max()

// OR
//function largestNumber() {
//    "use strict";
//    for (i = 0; i < numbers.length; i++) {
//        num = numbers[i];
//            if (num <= numbers[i]) {
//                max = num;
//            } else {
//  
//            }
//    }
//    window.console.log(max);
//}
