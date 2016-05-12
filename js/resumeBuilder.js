/*

Stores website content (as JSONs). Dynamically populates site content
by formatting HTML snippits from helper.js with JSON data.

*/


/*

BIO

*/

// create biography object using object literal notation (JSON)
var bio = {
	'name': 'David Scales',
	'role': 'Web Developer',
	'contacts': {
		'mobile': '(360) 710-9905',
		'email': 'davidsscales@gmail.com',
		'github': 'DavidScales',
		'githubUrl': 'https://github.com/DavidScales',
		'location': 'San Francisco',
		'twitter': 'no twitter'
	},
	'biopic': 'images/veryhandsome-500.jpg',
	'welcomeMessage': 'Welcome!',
	'skills': ['HTML5', 'CSS3', 'JavaScript', 'Git and GitHub',
	           'Knockout', 'Backbone', 'Bootstrap', 'jQuery', 'Grunt', 'Responsive Design',
	           'Critical Rendering Path', 'AJAX', 'API\'s', 'Single Page Applications'],
	display: function() {
		// format role and name
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		// prepend role and name
		$('#header').prepend(formattedRole)
			.prepend(formattedName);

		// format mobile, email, github, location
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		// append mobile, email, github, location
		$('#topContacts').append(formattedMobile)
			.append(formattedEmail)
			.append(formattedGitHub)
			.append(formattedLocation);
		$('#footerContacts').append(formattedMobile)
			.append(formattedEmail)
			.append(formattedGitHub)
			.append(formattedLocation);

		// append horizontal break to header
		$('#header').append('<hr>');

		// format and append biopic
		// var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
		// $('#header').append(formattedBioPic);

		// format and append skills, if available
		if (bio.skills.length > 0){
			// append 'skills start'
			$('#header').append(HTMLskillsStart);
			// for each skill, format and append
			bio.skills.forEach(function(skill){
				formattedSkill = HTMLskills.replace('%data%', skill);
				$('#skills').append(formattedSkill);
			});
		}

	}
};

bio.display();

/*

WORK

*/

// create work object using object literal notation (JSON)
var work = {
	'jobs': [
		{
			'employer': 'Udacity',
			'url': 'https://www.udacity.com/',
			'title': 'Front End Code Reviewer',
			'location': 'Belmont, California',
			'dates': 'May 2016 - present',
			'points': ['Review student project submissions and provide actionable '+
			           'and helpful feedback. ']
		},{
			'employer': 'Water Conservation Team',
			'url': '#',
			'title': 'Co-founder',
			'location': 'Belmont, California',
			'dates': 'Jan - Sept 2015',
			'points': ['Started and ran a business that provided water saving '+
			           'services and products to customers in the San Francisco '+
			           'Bay Area.']
		},{
			'employer': 'NASA Glenn Research Center',
			'url': 'http://www.nasa.gov/centers/glenn/home/index.html',
			'title': 'Undergraduate Research Intern',
			'location': 'Cleveland, Ohio',
			'dates': 'Summer 2014',
			'points': ['Analyzed high temperature interactions between sand and '+
			           'next generation environmental barrier coating materials '+
			           'with SEM, EDS, XRD, and optical microscopy.',
			           'Determined the validity of coating material for use in '+
			           'future research and applications with ceramic-matrix '+
			           'composite aircraft engine components.',
			           'Delivered written and oral reports to senior researchers '+
			           '& performed in a team environment.']
		},{
			'employer': 'Puget Sound Naval Shipyard',
			'url': 'http://www.navy.mil/local/PSNS/',
			'title': 'Engineering Aide',
			'location': 'Bremerton, Washington',
			'dates': 'Summers 2010-2012',
			'points': ['Assisted in standardizing the technical repair estimation '+
			           'documents of U.S. Naval shipyards. ',
			           'Designed and constructed a lean kanban system for local '+
			           'office supplies, increasing supplies accessibility and '+
			           'reducing management time.',
			           'Created a lean office map, reducing personnel & equipment '+
			           'location time and improving safety policies adherence.',
			           'Cooperated with professional engineers and administrative '+
			           'staff to solve problems.',
			           'Earned four awards for quality work and safety promotion.']
		}
	],
	display: function() {
		// Add jobs from work object
		// for each job
		work.jobs.forEach(function(job) {
			// append 'work start' element to #workExperience
			$('#workExperience').append(HTMLworkStart);

			// format employer, title, dates, location, description
			var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
			formattedEmployer = formattedEmployer.replace('#', job.url);
			var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
			var formattedDates = HTMLworkDates.replace('%data%', job.dates);
			var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
			var formattedDescription = HTMLworkDescription.replace('%data%', job.description);

			// format and append skills, if available
			if (job.points.length > 0){
				// append 'points start'
				$('.work-entry:last').append(formattedEmployer + formattedTitle)
				.append(formattedDates)
				.append(formattedLocation)
				.append(HTMLworkPointsStart);
				// for each point, format and append
				job.points.forEach(function(point){
					var formattedPoint = HTMLworkPoint.replace('%data%', point);
					$('.work-entry:last .points').append(formattedPoint);
				});
			}
		});
	}
};

// add work content
work.display();

/*

PROJECTS

*/

// create projects object using object literal notation (JSON)
var projects = {
	'projects': [{
			'title': 'Neighborhood Map',
			'dates': '2016',
			'points': ['Built a responsive single page application (SPA) featuring '+
			           'a neighborhood map that contains information on local '+
			           'restaurants.',
			           'Integrated data from multiple 3rd party API\'s (Yelp API, '+
			           'Google Maps API) using AJAX.',
			           'Utilized Knockout JavaScript framework for MV* design,  '+
			           'Grunt for optimization, and LocalStorage for user data '+
			           'persistence.'],
			'url': 'http://davidscales.github.io/portfolio/'
		},
		{
			'title': 'Website Optimization',
			'dates': '2016',
			'points': ['Optimized the critical rendering path of a sample site, '+
			           'increasing PageSpeed score from 27 to 95.',
			           'Improved scrolling from 13 to 60 frames per second by '+
			           'eliminating inefficiencies.',
			           'Reduced function execution three orders of magnitude to '+
			           'remove a janky animation.'],
			'url': 'http://davidscales.github.io/portfolio/'
		},
		{
			'title': 'Frogger Clone',
			'dates': '2016',
			'points': ['Built an HTML5 Canvas game based on the classic Frogger '+
			           'with provided engine and graphic assets.',
			           'Coded player, enemies, and other game entities in '+
			           'JavaScript’s object-oriented pseudo-classical style.',
			           'Modified game engine to increase map size and game '+
			           'difficulty.'],
			'url': 'http://davidscales.github.io/portfolio/'
		},
		{
			'title': 'Portfolio Site',
			'dates': '2016',
			'points': ['Built a responsive portfolio site with HTML5, CSS3, '+
			           'Bootstrap framework and mobile-first design to showcase '+
			           'projects.',
			           'Optimized images with Grunt and responsive image '+
			           'techniques, improving load time.'],
			'url': 'http://davidscales.github.io/portfolio/'
		},
		{
			'title': 'Dynamic Resume',
			'dates': '2016',
			'points': ['Developed a resume site that dynamically modifies the '+
			           'DOM with jQuery to display JSON data.',
			           'This is the site you are looking at!'],
			'url': 'http://davidscales.github.io/portfolio/'
		}
	],
	display: function() {
		// for each project in projects object
		this.projects.forEach(function(project) {
			// append 'project start' element to #projects
			$('#projects').append(HTMLprojectStart);
			// format components
			var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
			formattedTitle = formattedTitle.replace('#', project.url);
			var formattedDates = HTMLprojectDates.replace('%data%', project.dates);

			// format and append skills, if available
			if (project.points.length > 0){
				// append 'points start'
				$('.project-entry:last').append(formattedTitle + formattedDates)
				.append(HTMLprojectPointsStart);
				// for each point, format and append
				project.points.forEach(function(point){
					var formattedPoint = HTMLprojectPoint.replace('%data%', point);
					$('.project-entry:last .points').append(formattedPoint);
				});
			}
		});
	}
};

// display projects
projects.display();

/*

EDUCATION

*/

// create education object using object literal notation (JSON)
var education = {
	'schools': [{
			'name': 'University of Washington',
			'date': '2010 - 2014',
			'location': 'Seattle, Washington',
			'majors': ['Materials Science and Engineering'],
			'degree': 'BS',
			'url': 'http://www.washington.edu/',
			'achievement': 'Top of my class'
		},
		{
			'name': 'Olympic College',
			'date': '2008 - 2010',
			'location': 'Bremerton, Washington',
			'majors': ['General Studies'],
			'degree': 'AA',
			'url': 'http://www.olympic.edu/',
			'achievement': 'Completed during high school'
		}
	],
	'onlineCourses': [{
			'title': 'JavaScript Design Patterns',
			'school': 'Udacity',
			'date': 2015,
			'url': 'https://www.udacity.com/course/javascript-design-patterns--ud989'
		},
		{
			'title': 'Intro to AJAX',
			'school': 'Udacity',
			'date': 2015,
			'url': 'https://www.udacity.com/course/intro-to-ajax--ud110'
		},
		{
			'title': 'Browser Rendering Optimization',
			'school': 'Udacity',
			'date': 2015,
			'url': 'https://www.udacity.com/course/browser-rendering-optimization--ud860'
		},
		{
			'title': 'Website Performance Optimization',
			'school': 'Udacity',
			'date': 2015,
			'url': 'https://www.udacity.com/course/website-performance-optimization--ud884'
		},
		{
			'title': 'Object Oriented JavaScript',
			'school': 'Udacity',
			'date': 2015,
			'url': 'https://www.udacity.com/course/object-oriented-javascript--ud015'
		},
		{
			'title': 'Intro to HTML and CSS',
			'school': 'Udacity',
			'date': 2015,
			'url': 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
		},
		{
			'title': 'Responsive Web Design Fundamentals',
			'school': 'Udacity',
			'date': 2015,
			'url': 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
		},
		{
			'title': 'Responsive Images',
			'school': 'Udacity',
			'date': 2016,
			'url': 'https://www.udacity.com/course/responsive-images--ud882'
		},
		{
			'title': 'Version Control with Git and GitHub',
			'school': 'Udacity',
			'date': 2015,
			'url': 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
		},
		{
			'title': 'Intro to CS and Programming Using Python',
			'school': 'MIT',
			'date': 2014,
			'url': 'https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x8'
		},
		{
			'title': 'Computation Structures 1: Digital Circuits',
			'school': 'MIT',
			'date': 2015,
			'url': 'https://www.edx.org/course/computation-structures-part-1-digital-mitx-6-004-1x2'
		},
		{
			'title': 'Introduction to Computer Science',
			'school': 'Harvard',
			'date': 2015,
			'url': 'https://www.edx.org/course/introduction-computer-science-harvardx-cs50x'
		}
	],
	display: function() {
		// for each school
		education.schools.forEach(function(school) {
			// append school start
			$('#education').append(HTMLschoolStart);

			// format name, degree, dates, location
			var formattedName = HTMLschoolName.replace('%data%', school.name);
			formattedName = formattedName.replace('#', school.url);
			var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
			var formattedDates = HTMLschoolDates.replace('%data%', school.date);
			var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
			$('.education-entry:last').append(formattedName + formattedDegree)
				.append(formattedDates)
				.append(formattedLocation);
			// format and append major
			school.majors.forEach(function(major) {
				var formattedMajor = HTMLschoolMajor.replace('%data%', major);
				$('.education-entry:last').append(formattedMajor);
			});
			// format and append achievement
			var formattedAchievement = HTMLschoolAchievement.replace('%data%', school.achievement);
			$('.education-entry:last').append(formattedAchievement);

		});
		// append online course header
		$('#education').append(HTMLonlineClasses);
		// for each online course
		education.onlineCourses.forEach(function(course) {
			// append online course start
			$('#education').append(HTMLonlineCourseStart);
			// format title, school, dates
			var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
			formattedTitle = formattedTitle.replace('#', course.url);
			var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
			// append title, school
			$('.online-course-entry:last').append(formattedTitle + formattedSchool);
		});
	}
};

// display education
education.display();

/*

Add map

*/

$('#mapDiv').append(googleMap);