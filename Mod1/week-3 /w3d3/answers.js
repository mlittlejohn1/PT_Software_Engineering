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

const studentNames_Locations = [
    {name: 'Mekia', location: 'Columbus, Oh', favTvShows: ['The Resident', 'Power', 'Insecure']}, 
    {name: 'Chris', location: 'Columbus, Oh', favTvShows: ['The Simpsons', 'ER', 'Dave']},
    {name: 'Bruce', location: 'Columbus, Oh', favTvShows: ['Superman', 'Batman', 'Thor']}

]
console. log(studentNames_Locations);


