var app = angular.module('galleryApp', []);

app.controller('imageController', ['$http', function ($http) {
    console.log('imageController is running');
    var self = this;
    
    self.clicked= !self.clicked;
  
    image1={
        photo: './images/beer.jpg',
        description: 'Got certified for pouring a proper Guiness'
    };
    
    image2= {
        photo: './images/perone.jpg',
        description: 'Showing off Porrone skills in Costa Brava, Spain'
    };
    
    image3={
        photo: './images/gettingReady.jpg',
        description: 'Heading out after staying an a sweet chateau'
    };
    
    image4={
        photo: './images/bigGun.jpg',
        description: 'Having fun biking around and exploring Normandy'
    };
    
    image5={
        photo: './images/rightAfter.jpg',
        description: 'Having a beer about 30 min after a french woman hit me with her car'
    };
    
    image6={
        photo: './images/moreAfter.jpg',
        description: 'Probably should not have had that beer, adrenaline crashed and I passed out and ended up spending night in hospital'
    };
    
    
    self.images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ];

    self.onClick = function(image){
        console.log('image was clicked');
        console.log('image: ', image.description);
        return this.clicked = false;

    };

    self.onClick2 = function(image){
        console.log('description was clicked');
        console.log('image: ', image.description);
        return this.clicked = true;
    };


    // self.text = false;
    
    // self.myFunction = function(image){
    //     console.log('image: ', image.description);
    //     // self.text = !self.text;
    //     self.imgText = image.description;
    // }

}]);    


// var myEl = angular.element( document.querySelector( '#divID' ) );
// myEl.append('Hi<br/>');     