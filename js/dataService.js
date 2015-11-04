(function () {

angular.module('quoteBook')
	   .service('dataService'
	   , function () {
	   		var quotes;
	   		var serviceQuotes = [
			    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
			    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
			    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
			    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
			    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
			    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
			    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
			  ];
			 if (!localStorage.quotes) {
			 	sendToLocal();
			 } else {
			 	quotes = JSON.parse(localStorage.quotes);
			 	serviceQuotes = JSON.parse(localStorage.quotes);
			 }

			 function sendToLocal() {
				 localStorage.setItem('quotes', JSON.stringify(serviceQuotes));
				 console.log(localStorage);
				 quotes = JSON.parse(localStorage.quotes);
			 };

	   		// var quotesFromLocal = JSON.parse(localStorage.getItem('quotes'));


			this.addData = function(input){
				input.author = 'Unknown Author';
				serviceQuotes.push(input);
				sendToLocal();
			};

			this.getData = function(){
				// if (quotesFromLocal !== ''){
				// 	quotes = quotesFromLocal;
				// }
				return quotes;
			};

			this.removeData = function(input){
				for (var i in serviceQuotes){
					if (serviceQuotes[i].text === input){
						serviceQuotes.splice(i, 1);
					}
					i++;
				}
				sendToLocal();
				return quotes;
			};

	     });


})();
