/*

Stores website content (as JSONs). Dynamically populates site content
by formatting HTML snippits from helper.js with JSON data.

*/


/*

BIO

*/

// create biography object using object literal notation (JSON)
var bio = {
	"name": "David Scales",
	"role": "Web Developer",
	"contacts": {
		"mobile": "360-710-9905",
		"email": "davidsscales@gmail.com",
		"github": "DavidScales",
		"location": "San Francisco"
	},
	"bioPic": "images/veryhandsome-500.jpg",
	"welcomeMessage": "Welcome!",
	"skills": ["HTML", "CSS", "JavaScript", "Git and GitHub", "C", "Python","Materials Science stuff"]
};

// add display bio function
bio.display = function() {
	// format and prepend role
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	// format and prepend name
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	// format and append mobile
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	// format and append email
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	// format and append github
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);
	// format and append location
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	// format and append bioPic
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic)
	// format and append skills, if available
	if (bio.skills.length > 0){
		// append 'skills start'
		$("#header").append(HTMLskillsStart);
		// for each skill, format and append
		for (skill in bio.skills) {
			formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

}

bio.display();

/*

WORK

*/

// create work object using object literal notation (JSON)
var work = {
		"jobs": [
			{
				"employer": "Puget Sound Naval Shipyard",
				"title": "Engineering Aide",
				"location": "Bremerton, Washington",
				"dates": "Summers 2010, 2011, 2012",
				"description": "Assist with organization and standardization of the technical estimates of multiple shipyards for the Navy. Design and construct a Lean supply system to increase supplies accessibility and productivity. Create Lean systems to reduce personnel/equipment location time and improve safety. Interface with engineers and management to report findings. "
			},
			{
				"employer": "NASA Glenn Research Center",
				"title": "Undergraduate Research Intern",
				"location": "Cleveland, Ohio",
				"dates": "Summer 2014",
				"description": "Study high temperature interactions between sand (CMAS) and next generation environmental barrier coating (EBC) materials for silicon-based ceramic-matrix composite (CMC) aircraft engine components. Characterize and evaluate material interactions with SEM, EDS, XRD, and optical microscopy. Work in a team environment and prepare monthly written and oral reports."
			}
		]
};

// add display work function
work.display = function displayWork(){
	// Add jobs from work object
	// for each job
	for (job in work.jobs){
		// append 'work start' element to #workExperience
		$("#workExperience").append(HTMLworkStart);
		// format 'employer' and 'title' for '.work-entry'
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		// append to .work-entry
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		// format 'location', 'dates', 'description' for '.work-entry'
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		// append to .work-entry
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

// add work content
work.display();

/*

PROJECTS

*/

// create projects object using object literal notation (JSON)
var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": "2016",
			"description": "Personal portfolio site",
			"images": ["http://placehold.it/250x200"],
			"url": "https://github.com/DavidScales/portfolio"
		},
		{
			"title": "ALU",
			"dates": "2015",
			"description": "Simulated Arithmetic Logic Unit built from logic gates",
			"images": ["http://placehold.it/250x200"],
			"url": "#"
		}
	]
};

// add project display function
projects.display = function() {
	// for each project in projects object
	for (projectIndex in this.projects) {
		// append 'project start' element to #projects
		$("#projects").append(HTMLprojectStart);
		// format components
		var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[projectIndex].title);
		var formattedDates = HTMLprojectDates.replace("%data%", this.projects[projectIndex].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[projectIndex].description);
		// append component to last '.project-entry'
		$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);
		// check for images, if present, format and append
		if (this.projects[projectIndex].images.length > 0) {
			for (imageIndex in this.projects[projectIndex].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", this.projects[projectIndex].images[imageIndex]);
					$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

// display projects
projects.display();

/*

EDUCATION

*/

// create education object using object literal notation (JSON)
var education = {
	"schools": [
		{
			"name": "University of Washington",
			"dates": "2010 - 2014",
			"location": "Seattle, Washington",
			"major": "Materials Science and Engineering",
			"degree": "BS",
			"url": "#"
		},
		{
			"name": "Olympic College",
			"dates": "2008 - 2010",
			"location": "Bremerton, Washington",
			"major": "General Studies",
			"degree": "AA",
			"url": "#"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2015",
			"url": "#"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": "2015",
			"url": "#"
		},
		{
			"title": "Responsive Images",
			"school": "Udacity",
			"dates": "2016",
			"url": "#"
		},
		{
			"title": "Version Control with Git and GitHub",
			"school": "Udacity",
			"dates": "2015",
			"url": "#"
		},
		{
			"title": "Intro to CS and Programming Using Python",
			"school": "MIT",
			"dates": "2014",
			"url": "#"
		},
		{
			"title": "Computation Structures 1: Digital Circuits",
			"school": "MIT",
			"dates": "2015",
			"url": "#"
		},
		{
			"title": "Introduction to Computer Science",
			"school": "Harvard",
			"dates": "2015",
			"url": "#"
		}

	]
};

// add education display function
education.display = function() {
	// for each school
	for (schoolIndex in education.schools){
		// append school start
		$("#education").append(HTMLschoolStart);
		// format name
		var formattedName = HTMLschoolName.replace("%data%", education.schools[schoolIndex].name);
		formattedName = formattedName.replace("#", education.schools[schoolIndex].url);
		// format degree
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolIndex].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);
		// format and append dates
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schoolIndex].dates);
		$(".education-entry:last").append(formattedDates);
		// format and append location
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolIndex].location);
		$(".education-entry:last").append(formattedLocation);
		// format and append major
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolIndex].major);
		$(".education-entry:last").append(formattedMajor);
	}
	// append online course header
	$("#education").append(HTMLonlineClasses);
	// for each online course
	for (onlineCourseIndex in education.onlineCourses){
		// append online course start
		$("#education").append(HTMLonlineCourseStart);
		// format title
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourseIndex].title);
		formattedTitle = formattedTitle.replace("#", education.onlineCourses[onlineCourseIndex].url);
		// formate school
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourseIndex].school);
		// append title and school
		$(".online-course-entry:last").append(formattedTitle + formattedSchool);
		// formate and append dates
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourseIndex].dates);
		$(".online-course-entry:last").append(formattedDates);
	}
}

// display education
education.display();

/*

Add map

*/

$("#mapDiv").append(googleMap);

/*

Testing

*/

// function locationizer(work_obj) {
//     locations = [];
//     for (jobIndex in work_obj.jobs){
//         locations.push(work_obj.jobs[jobIndex].location);
//     }
//     return locations;
// }

// console.log(locationizer(work));

/*

 Just for funsies

*/

// // add 'internationalize' button
// $("#main").append(internationalizeButton);

// // create a function to "internationalize" name
// function inName(){
// 	namesArray = bio.name.split(" ");
// 	namesArray[0] = namesArray[0][0].toUpperCase() + namesArray[0].slice(1).toLowerCase();
// 	namesArray[1] = namesArray[1].toUpperCase();
// 	return namesArray.join(" ");
// }