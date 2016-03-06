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
		'mobile': '360-710-9905',
		'email': 'davidsscales@gmail.com',
		'github': 'DavidScales',
		'location': 'San Francisco',
		'twitter': 'no twitter'
	},
	'biopic': 'images/veryhandsome-500.jpg',
	'welcomeMessage': 'Welcome!',
	'skills': ['HTML', 'CSS', 'JavaScript', 'Git and GitHub', 'C', 'Python','Materials Science stuff'],
	display: function() {
		// format role and name
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		// prepend role and name
		$('#header').prepend(formattedRole)
			.prepend(formattedName);

		// format mobile, email, github, location
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
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
		// format and append biopic
		var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
		$('#header').append(formattedBioPic);
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
	'jobs': [{
			'employer': 'Puget Sound Naval Shipyard',
			'title': 'Engineering Aide',
			'location': 'Bremerton, Washington',
			'dates': 'Summers 2010, 2011, 2012',
			'description': 'Assist with organization and standardization of the technical estimates of multiple shipyards for the Navy. Design and construct a Lean supply system to increase supplies accessibility and productivity. Create Lean systems to reduce personnel/equipment location time and improve safety. Interface with engineers and management to report findings. '
		},
		{
			'employer': 'NASA Glenn Research Center',
			'title': 'Undergraduate Research Intern',
			'location': 'Cleveland, Ohio',
			'dates': 'Summer 2014',
			'description': 'Study high temperature interactions between sand (CMAS) and next generation environmental barrier coating (EBC) materials for silicon-based ceramic-matrix composite (CMC) aircraft engine components. Characterize and evaluate material interactions with SEM, EDS, XRD, and optical microscopy. Work in a team environment and prepare monthly written and oral reports.'
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
			var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
			var formattedDates = HTMLworkDates.replace('%data%', job.dates);
			var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
			var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
			// append to .work-entry
			$('.work-entry:last').append(formattedEmployer + formattedTitle)
				.append(formattedDates)
				.append(formattedLocation)
				.append(formattedDescription);
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
			'title': 'Portfolio',
			'dates': '2016',
			'description': 'Personal portfolio site',
			'images': ['http://placehold.it/250x200'],
		},
		{
			'title': 'ALU',
			'dates': '2015',
			'description': 'Simulated Arithmetic Logic Unit built from logic gates',
			'images': ['http://placehold.it/250x200'],
		}
	],
	display: function() {
		// for each project in projects object
		this.projects.forEach(function(project) {
			// append 'project start' element to #projects
			$('#projects').append(HTMLprojectStart);
			// format components
			var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
			var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
			var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
			// append component to last '.project-entry'
			$('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription);
			// check for images, if present, format and append
			if (project.images.length > 0) {
				project.images.forEach(function(image) {
					var formattedImage = HTMLprojectImage.replace('%data%', image);
					$('.project-entry:last').append(formattedImage);
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
			'date': 2014,
			'location': 'Seattle, Washington',
			'majors': ['Materials Science and Engineering'],
			'degree': 'BS',
			'url': '#'
		},
		{
			'name': 'Olympic College',
			'date': 2010,
			'location': 'Bremerton, Washington',
			'majors': ['General Studies'],
			'degree': 'AA',
			'url': '#'
		}
	],
	'onlineCourses': [{
			'title': 'Intro to HTML and CSS',
			'school': 'Udacity',
			'date': 2015,
			'url': '#'
		},
		{
			'title': 'Responsive Web Design Fundamentals',
			'school': 'Udacity',
			'date': 2015,
			'url': '#'
		},
		{
			'title': 'Responsive Images',
			'school': 'Udacity',
			'date': 2016,
			'url': '#'
		},
		{
			'title': 'Version Control with Git and GitHub',
			'school': 'Udacity',
			'date': 2015,
			'url': '#'
		},
		{
			'title': 'Intro to CS and Programming Using Python',
			'school': 'MIT',
			'date': 2014,
			'url': '#'
		},
		{
			'title': 'Computation Structures 1: Digital Circuits',
			'school': 'MIT',
			'date': 2015,
			'url': '#'
		},
		{
			'title': 'Introduction to Computer Science',
			'school': 'Harvard',
			'date': 2015,
			'url': '#'
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
			var formattedDates = HTMLonlineDates.replace('%data%', course.date);
			// append title, school and dates
			$('.online-course-entry:last').append(formattedTitle + formattedSchool)
				.append(formattedDates);
		});
	}
};

// display education
education.display();

/*

Add map

*/

$('#mapDiv').append(googleMap);