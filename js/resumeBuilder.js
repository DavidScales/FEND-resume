// EXAMPLE
// replace name and role in header
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// create biography object using object literal notation (JSON)
var bio = {
	"name": "David Scales",
	"role": "Web Developer",
	"contactInfo": {
		"mobile": "360-710-9905",
		"email": "davidsscales@gmail.com",
		"github": "DavidScales",
		"location": "San Francisco"
	},
	"bioPic": "images/veryhandsome.jpg",
	"welcomeMessage": "Welcome!",
	"skills": ["HTML", "CSS", "JavaScript", "Git and GitHub", "C", "Python","Materials Science stuff"]
};

// create work object using object literal notation (JSON)
var work = {
		"jobs": [
			{
				"employer": "Puget Sound Naval Shipyard",
				"title": "Engineering Aide",
				"location": "Bremerton, Washington",
				"dates": "Summers 2010, 2011, 2012",
				"description": "Assist engineers blah blah blah blah blah blah blah blah blah \
				blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah \
				blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah \
				blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah \
				blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah \
				blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah \
				blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah \ "
			},
			{
				"employer": "NASA",
				"title": "Astronaut",
				"location": "Outer Space",
				"dates": "2020",
				"description": "Save the world blah blah blah blah blah blah blah blah blah \
				blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah \
				blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah \
				blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah \
				blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah \
				blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah \
				blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah \ "
			}
		]
};

// create projects object using object literal notation (JSON)
var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": "2016",
			"description": "Personal portfolio site",
			"images": [],
			"url": "https://github.com/DavidScales/portfolio"
		}
	]
};

// create education object using object literal notation (JSON)
var education = {
	"schools": [
		{
			"name": "University of Washington",
			"dates": "2010 - 2014",
			"location": "Seattle, Washington",
			"major": "Materials Science and Engineering",
			"degree": "BS",
			"url": ""
		},
		{
			"name": "Olympic College",
			"dates": "2008 - 2010",
			"location": "Bremerton, Washington",
			"major": "General Studies",
			"degree": "AA",
			"url": ""
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2015",
			"url": ""
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": "2015",
			"url": ""
		},
		{
			"title": "Responsive Images",
			"school": "Udacity",
			"dates": "2016",
			"url": ""
		},
		{
			"title": "Version Control with Git and GitHub",
			"school": "Udacity",
			"dates": "2015",
			"url": ""
		},
		{
			"title": "Intro to CS and Programming Using Python",
			"school": "MIT",
			"dates": "2014",
			"url": ""
		},
		{
			"title": "Computation Structures 1: Digital Circuits",
			"school": "MIT",
			"dates": "2015",
			"url": ""
		},
		{
			"title": "Introduction to Computer Science",
			"school": "Harvard",
			"dates": "2015",
			"url": ""
		}

	]
};

// Add name, role, and skills from bio object
// Need to append <h1> in header to satisfy index.html if statements
// format name and role for header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// prepend formatted name and role to header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// check if there are skills in the bio object
if (bio.skills.length > 0){
	// if there are, append 'skills start' element to header (includes #skills)
	$("#header").append(HTMLskillsStart);
	// for each skill, format skill, and append to #skills
	for (skill in bio.skills) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

function displayWork(){
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

displayWork();



