'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventData, $log) {
		$scope.snippet = '<span> Hi There!</span>';
		$scope.sortOrder = '-upVoteCount';
		$scope.event = eventData.getEvent();
		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		};
		$scope.downVoteSession = function(session){
			if(session.upVoteCount > 0){
				session.upVoteCount--;
			}
		};

	}
);