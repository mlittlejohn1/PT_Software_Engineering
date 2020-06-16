
//Datatypes Refresher
//For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:  

// 1. A light switch that can be either on or off. 
//Datatype: Boolean
/*Data Structure:*/ const lightSwitch = true;

// 2. A user's email address.
//Datatype: String
/*Data Structure*/ const userEmail = 'mlittlejohn200@gmail';

// 3. A spaceship with a hull, laser blasters, tractor beam, and wrap drive
//Datatype: Array & String
/*Data Structure:*/ const spaceship = ['hull', 'laser blaster', 'tractor beam', 'wrap drive'];

// 4. A list of student names from our class.
//Datatype: Array & String
/*Data Structure:*/ const studentNames = ['Mekia', 'Chris', 'Bruce'];

// 5. A list of student names from our class, each with a location.
//Data Structure: Array of Objects
/*Data structure:*/ 

const studentNames_Locations = [
  {name: 'Mekia', location: 'Columbus, Oh'}, 
  {name: 'Chris', location: 'Columbus, Oh'},
  {name: 'Bruce', location: 'Columbus, Oh'}
]
console.log(studentNames_Locations);  

// 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
//Data Structure: Array of objects with Array
/*Data Structure:*/

const studentNames_Locations1 = [
    {name: 'Mekia', location: 'Columbus, Oh', favTvShows: ['The Resident', 'Power', 'Insecure']}, 
    {name: 'Chris', location: 'Columbus, Oh', favTvShows: ['The Simpsons', 'ER', 'Dave']},
    {name: 'Bruce', location: 'Columbus, Oh', favTvShows: ['Superman', 'Batman', 'Thor']}

]
console. log(studentNames_Locations1);


///Take it easy//

//1. Make an array that holds all of the colors of the rainbow.

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log(rainbowColors);

//2. Write code that will access "blue" from the rainbow array.

console.log(rainbowColors [4]);

//3. Make an object that is called your name and holds the information about your favorite food,Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
     
const mekia = {

        favoriteFood: 'pasta',
        hobby: 'family',
        hometown: 'columbus',
        favoriteDataType: 'undecided'
} ;

//4. Write code that will access your hobby from the object that you just created.

    console.log(mekia.hobby);


    
///Crazy Object///

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }
  

 //Use crazy Object to log the following.
 //"omg my mouth is burning"
 console.log(crazyObject.taco[1].salsa[5]);

 //"Pretty pretty prettayyyyy good"
 console.log(crazyObject.larry.quotes[0]);

 //"Swearing at Larry and Jeff"
 console.log(crazyObject.larry.characters[2].favourtieHobby);

 //"Chicken Teriyaki Boyyyyyy"
 console.log(crazyObject.larry.nicknames[1]);

 //The object the contains the name funkhauser
 console.log(crazyObject.larry.characters[1].name);

 //Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.

 crazyObject.larry.quotes.push('I\'m trying to elevate small talk to medium talk');
 
 console.log(crazyObject.larry);