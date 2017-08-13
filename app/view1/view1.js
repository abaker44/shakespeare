'use strict';

var reviews = angular.module('shakespeare.view', []);

reviews.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl',
        styleUrls: 'view1/view1.css'
    });
}])

reviews.controller('View1Ctrl', function View1Ctrl($scope, $http, $window) {


    $scope.reviewList = [];
    var reviews = [];


    $scope.reviewDetail = function(id, arrPosition) {

        $http({
            method: "GET",
            url: ("http://shakespeare.podium.co/api/reviews/" + id),
            headers: {
                'Authorization': 'koOheljmQX'
            }

        }).then(function mySuccess(response) {
            debugger;
            $scope.reviewList[arrPosition].body = response.data.data.body


            debugger;

        }, function myError(response) {
            $scope.reviewList[arrPosition].body = response.data.data.body

        });
    }

    $http({
        method: "GET",
        url: "http://shakespeare.podium.co/api/reviews",
        headers: {
            'Authorization': 'koOheljmQX'
        }

    }).then(function mySuccess(response) {
        reviews = response.data.data;

        reviews = reviews.sort(function(a, b) {
            return b.rating - a.rating;
        })
        debugger;
        $scope.getAvgRating();
        var intialReviews = 25;
        for (var i = 0; i < intialReviews; i++) {
            $scope.reviewDetail(reviews[i].id, i);
            $scope.reviewList[i] = reviews[i];
        }

        debugger;
    }, function myError(response) {
        // $scope.reviews = response.statusText;
        reviews = response.data.data;
        var intialReviews = 25;
        for (var i = 0; i < intialReviews; i++) {
            $scope.reviewDetail(reviews[i].id, i);

            $scope.reviewList[i] = reviews[i];
        }
    });

    $scope.loadMore = function() {


        var last = $scope.reviewList.length;
        var numberToAdd = 25;
        for (var i = last; i < last + numberToAdd; i++) {
            if (i <= reviews.length - 1) {
                $scope.reviewDetail(reviews[i].id, i);

                $scope.reviewList[i] = reviews[i];
            }
        }


    }

    $scope.getAvgRating = function() {
        var avgRating = 0;
        for (var i = 0; i < reviews.length; i++) {
            avgRating += reviews[i].rating;
            debugger;
        }
        debugger;
        $scope.avgRating = avgRating / reviews.length;
        $scope.avgRating = $scope.avgRating.toFixed(2);
    }
    $scope.propertyName = 'rating';
    $scope.reverse = true;
    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };
});

