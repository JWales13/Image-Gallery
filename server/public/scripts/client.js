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
    
    image7={
        photo: './images/after-accident.jpg',
        description: 'reminder to always practice bike safety'
    };
    
    image8={
        photo: './images/jaime-spain.jpg',
        description: 'My good friend Jamie came to bike around spain with me'
    };

    image9={
        photo: './images/rome.jpg',
        description: 'Great View of the Colosseum'
    };

    image10={
        photo: './images/paris.jpg',
        description: 'My sister and I visiting paris a long time ago.  I miss my hair'
    };

    image11={
        photo: './images/hiking.jpg',
        description: 'Hiking trip around Cali with the guys'
    };

    image12={
        photo: './images/pig.jpg',
        description: "Got a shot with Roger Water's inflatable pig at Desert Trip"
    };
    
    
    
    self.images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12
    ];


}]);    


  