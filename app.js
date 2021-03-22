//Super Class - Common Elements: title(string), isCheckedOut(boolean, initially false), rattings(array, initially empty), getAverageRating(method), toggleCheckOutStatus(method), addRating(method)
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title(){
      return this._title;
    }
  
    get isCheckedOut(){
      return this._isCheckedOut;
    }
  
    get ratings(){
      return this._ratings;
    }
  
  /*
    set isCheckedOut(checkOutStatus){
      this._isCheckedOut = checkOutStatus;
    }
  */
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
      return ratingsSum / this.ratings.length;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut //
    }
  
    addRatings(rating) {
      this.ratings.push(rating);
    }
  }
  
  //Book class with Media class inheritance
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author(){
      return this._author;
    }
  
    get pages(){
      return this._pages;
    }
  }
  
  //Movie class with Media class inheritance
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director(){
      return this._director;
    }
  
    get runTime(){
      return this._runTime;
    }
  }
  
  //CD class with Media class inheritance
  class CD extends Media {
    constructor(title, artist, runTime) {
      super(title);
      this._artist = artist;
      this._runTime = runTime;
    }
  
    get artist(){
      return this._artist;
    }
  
    get runTime(){
      return this._runTime;
    }
  }
  
  //Test CD class with Media class inheritance.
  const CD1 = new CD('Man on The Moon', 'Kid Cudi', 30); //declare new CD object using classes and extension, save to CD1 variable.
  CD1.toggleCheckOutStatus(); // bangs _isCheckedOut
  console.log(CD1.isCheckedOut); // reads true
  CD1.addRatings(5); // pushes 5 to Ratings array
  CD1.addRatings(4); // pushes 4 to Ratings array
  console.log(CD1.ratings); // reads [5, 4]
  console.log(CD1.getAverageRating()); // reads 4.5
  
  //Test Book class with Media class inheritance
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut); // reads true
  historyOfEverything.addRatings(5);
  historyOfEverything.addRatings(5);
  historyOfEverything.addRatings(4);
  console.log(historyOfEverything.getAverageRating()); // reads 4.666
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut); // reads true
  speed.addRatings(5);
  speed.addRatings(1);
  speed.addRatings(1);
  console.log(speed.getAverageRating()); // reads 2.333
  
  // Forum Questions
  /*
  https://discuss.codecademy.com/t/library-project-confused-by-logic-of-setters-getters-and-methods-used-to-manipulate-keys/577918
  */
  
  //Return to complete the following:
  /*
  - Add more properties to each class (movieCast, songTitles, etc.)
  Create a CD class that extends Media.
  - In .addRating(), make sure input is between 1 and 5.
  - Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
  - Create class called Catalog that holds all of the Media items in our library.
  */