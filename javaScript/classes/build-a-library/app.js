class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckOut() {
    return this._isCheckedOut;
  }
  get rating() {
    return this._ratings;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  getAverageRating() {
    let ratingsSum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    const lengthOfRating = this._ratings.length;
    return (ratingsSum / lengthOfRating).toFixed(2);
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  addRating(newRating) {
    this._ratings.push(newRating);
  }
}
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
}
class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }
}
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
}

const historyOfEverything = new Book(
  'A Short History of Nearly Everything',
  'Bill Bryson',
  544
);
console.log(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
