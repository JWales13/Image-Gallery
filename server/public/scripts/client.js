var app = angular.module('galleryApp', []);

app.controller('imageController', ['$http', function ($http) {
    var self = this;
    self.clicked= !self.clicked;
    
    self.images=[];
    self.getImages = function () {
        $http({
            method: 'GET',
            url: '/send-images'
        }).then(function (response) {
            self.images = response.data;
        });
    }; 
}]);    


  