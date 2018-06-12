//Consider the following array

// var library = [

//   { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },

//   { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },

//   { author: 'Suzanne Collins', title:  'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }

// ];

// If the reading status is true display “Already read '<insert title>' by <insert author>.”

// If the reading status is false display “You still need to read '<insert title>' by <insert author>.”

// Display results on webpage

var library = [

  { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },

  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },

  { author: 'Suzanne Collins', title:  'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }

];

for(var i= 0; i<library.length; i++){
	if(library[i].readingStatus == true){
		console.log('Already read ' + library[i].title + ' by ' + library[i].author)
   document.write('Already read ' + library[i].title + ' by ' + library[i].author + "<br>" )
	}
	else{
		console.log('You still need to read ' + library[i].title + ' by ' + library[i].author)
    document.write('You still need to read ' + library[i].title + ' by ' + library[i].author + "<br>")
	}
}