/**
 * Created by sanjay on 3/28/15.
 */
app.controller('HOME', function ($scope,$state, $http, $timeout) {

    'use strict';
    var root = 'http://jsonplaceholder.typicode.com';
    if ('serviceWorker' in navigator) {
        console.log('serviceWorker' in navigator)
        navigator.serviceWorker.register('../sw.js').then(function() {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ');
            
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });

    }


$http({
        url: root + '/posts/1',
         method: 'GET'
      })
      .then(function(data) {
                   $scope.data = data.data;
             });

       });