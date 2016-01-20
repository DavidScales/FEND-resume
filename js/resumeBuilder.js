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
				"description": "Assist engineers"
			},
			{
				"employer": "NASA",
				"title": "Astronaut",
				"location": "Outer Space",
				"dates": "2020",
				"description": "Save the world"
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

// TODO -- add biography object to webpage
// TODO -- add education object to webpage
// TODO -- add work object to webpage
// TODO -- add projects object to webpage

