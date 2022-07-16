class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(check) {
    this._isCheckedOut = check;
  }

  toggleCheckedOutStatus() {
    this._isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true; 
  }

  getAverageRating() {
    const ratingSum = this.ratings.reduce((acc, rating) => {
      return acc + rating;
    })
      return ratingSum / this.ratings.length;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

// Book Class
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

// Movie Class
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// CD Class
class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
  
  /*
  // Work in progress
  shuffle() {
    this._songs = ['Take It Out On Me', 'Frontline', 'The Goodness', 'Revolutionary', 'Colored People'];
    const randomSong = Math.floor(Math.random() * 5);
    return this.songs[randomSong];
  }
  */
}


// Book Instances
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4, 5, 5);
console.log(historyOfEverything.getAverageRating());


// Movie Instances
const speed = new Movie('Jan De Bont', 'Speed', 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1, 1, 5);
console.log(speed.getAverageRating());


// CD Instances
const mix = new CD('Thousand Foot Crutch', 'The Art Of Breaking', ['Absolute', 'The Art Of Breaking', 'Slow Bleed', 'Stranger', 'Move', 'Go', 'Hit The Floor', 'Make Me A Believer', 'Breath You In']);
mix.toggleCheckedOutStatus();
console.log(mix.isCheckedOut);
mix.addRating(3, 2, 5);
console.log(mix.getAverageRating());
//console.log(mix.shuffle());
