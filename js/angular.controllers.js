'use strict';

/* Controllers */

var vcard = angular.module('vcard', []);

vcard.controller('MenuList', function($scope) {
	$scope.menus = [
		{'name': 'Overview', 'index': 1, 'id' : 'overview'},
		{'name': 'Employment', 'index': 2, 'id' : 'resume'},
		{'name': 'Education', 'index': 3, 'id' : 'education'},
		{'name': 'Skills', 'index': 4, 'id' : 'skill'},
		{'name': 'Portfolio', 'index': 5, 'id' : 'portfolio'},
		{'name': 'Contact', 'index': 6, 'id' : 'contact'}
	];
});

vcard.controller('basic', function($scope) {
	$scope.name = 'James Smith';
	$scope.designation = 'Graphic & Web designer';
	$scope.summary = 'I like to make cool and creative designs. My design stash is always full of refreshing ideas. Feel free to take a look around my Vcard.';
});

vcard.controller('employment', function($scope) {
	$scope.experiences = [
		{'title': 'Manager', 'range': '2010 - Present', 'company' : 'Ligula Non Lectus', 'companyURL' : '#', 'intro' : 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'},
		{'title': 'Web Developer', 'range': '2008 - 2010', 'company' : 'Lorem ipsum', 'companyURL' : '#', 'intro' : 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'},
		{'title': 'Web Designer', 'range': '2007 - 2008', 'company' : 'Ligula Non Lectus', 'companyURL' : '#', 'intro' : 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'}
	];
});

vcard.controller('education', function($scope) {
	$scope.educations = [
		{ 'institute' : 'Lectus University', 'degree' : 'B.S.C in CSE', 'passingYear' : '2006 - 2010', 'result' : 'GPA: 3.5' },
		{ 'institute' : 'Lorem College', 'degree' : 'Science', 'passingYear' : '2003 - 2005', 'result' : 'GPA: 3.8' },
		{ 'institute' : 'Lorem School', 'degree' : 'Science', 'passingYear' : '2001 - 2002', 'result' : 'GPA: 4.5' }
	];
});

vcard.controller('expertin', function($scope) {
	$scope.skills = [
		{ 'language' : 'HTML5', 'level' : 86 },
		{ 'language' : 'CSS3', 'level' : 90 },
		{ 'language' : 'PHP', 'level' : 80 },
		{ 'language' : 'MYSQL', 'level' : 75 },
		{ 'language' : 'jQuery', 'level' : 80 },
		{ 'language' : 'Web Design', 'level' : 70 },
		{ 'language' : 'Web Development', 'level' : 85 },
		{ 'language' : 'SEO', 'level' : 60 }		
	];
});

vcard.controller('portfolio', function($scope) {
	$scope.items = [
		{ 'category' : 'print', 'imagePath' : 'img/portfolio/1.jpg', 'title' : 'Lorem Ipsum', 'info' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quisquam.', 'link' : 'http://example.com' },
		{ 'category' : 'digital', 'imagePath' : 'img/portfolio/2.jpg', 'title' : 'Lorem Ipsum', 'info' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quisquam.', 'link' : 'http://example.com' },
		{ 'category' : 'print', 'imagePath' : 'img/portfolio/3.jpg', 'title' : 'Lorem Ipsum', 'info' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quisquam.', 'link' : 'http://example.com' },
		{ 'category' : 'digital', 'imagePath' : 'img/portfolio/4.jpg', 'title' : 'Lorem Ipsum', 'info' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quisquam.', 'link' : 'http://example.com' },
		{ 'category' : 'digital', 'imagePath' : 'img/portfolio/5.jpg', 'title' : 'Lorem Ipsum', 'info' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quisquam.', 'link' : 'http://example.com' },
		{ 'category' : 'print', 'imagePath' : 'img/portfolio/6.jpg', 'title' : 'Lorem Ipsum', 'info' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quisquam.', 'link' : 'http://example.com' },
		{ 'category' : 'digital', 'imagePath' : 'img/portfolio/7.jpg', 'title' : 'Lorem Ipsum', 'info' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quisquam.', 'link' : 'http://example.com' },
		{ 'category' : 'digital', 'imagePath' : 'img/portfolio/8.jpg', 'title' : 'Lorem Ipsum', 'info' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quisquam.', 'link' : 'http://example.com' },
		{ 'category' : 'print', 'imagePath' : 'img/portfolio/9.jpg', 'title' : 'Lorem Ipsum', 'info' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quisquam.', 'link' : 'http://example.com' },
		{ 'category' : 'print', 'imagePath' : 'img/portfolio/10.jpg', 'title' : 'Lorem Ipsum', 'info' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quisquam.', 'link' : 'http://example.com' }		
	];
});

vcard.controller('social', function($scope) {
	$scope.networks = [
		{ 'network' : 'facebook', 'icon' : 'ion-social-facebook', 'link' : 'http://facebook.com/habib.hadi' },
		{ 'network' : 'twitter', 'icon' : 'ion-social-twitter', 'link' : '#' },
		{ 'network' : 'google plus', 'icon' : 'ion-social-googleplus', 'link' : '#' },
		{ 'network' : 'linkedin', 'icon' : 'ion-social-linkedin', 'link' : '#' },
		{ 'network' : 'stackoverflow', 'icon' : 'ion-code', 'link' : 'http://stackoverflow.com/users/389258/hadi' },
		{ 'network' : 'github', 'icon' : 'ion-social-github', 'link' : 'http://github.com/im4aLL/' }		
	];
});