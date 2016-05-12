# Dynamic Content Resume
This goal of this project was to write JavaScript (JS) code that would dynamically populate website content as HTML (in this case for an online resume). It was my introduction basic JS syntax, particularly functions and loops. I also became familiar with JavaScript Object Notation (JSON), and use of the popular JS library [jQuery] for accessing and manipulating the DOM. From this project I learned how static sites can be transformed into dynamic applications.

## How It Works
The first step was to define all of the data that the site would display. Since the site serves as a resume, the data represents things such as contact information, educational history, work experience, etc. This was done using JSON syntax, as an example below demonstrates.
```sh
'jobs': [{
		'employer': 'Puget Sound Naval Shipyard',
		'title': 'Engineering Aide',
		'location': 'Bremerton, Washington',
		'dates': 'Summers 2010, 2011, 2012',
		...
	},
	{
		'employer': 'NASA Glenn Research Center',
		'title': 'Undergraduate Research Intern',
		'location': 'Cleveland, Ohio',
		'dates': 'Summer 2014',
		...
	}
]
```
A function then takes an HTML string from helper.js, such as
```sh
var HTMLworkLocation = '<div class="location-text">%data%</div>';
```
and manipulates it, for example swapping out `%data%` for data from the above JSON, like `Cleveland, Ohio`. The same function then appends this newly formatted HTML string to the appropriate element on the page.
```sh
function() {
    ...
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
		}
	);
}
```
Further, this function is actually part of the original JSON containing object, so that the entire 'work' object, looks something like
```sh
var work = {
	// JSON work data - {dates, employers, locations etc.}
	// display function {
	    // Manipulate HTML strings by inserting JSON work data
	    // Add formatted HTML to the site, populating its content
	}
};
```
Or in full
```sh
var work = {
	'jobs': [{
			'employer': 'Puget Sound Naval Shipyard',
			'title': 'Engineering Aide',
			'location': 'Bremerton, Washington',
			'dates': 'Summers 2010, 2011, 2012',
			...
		},
		{
			'employer': 'NASA Glenn Research Center',
			'title': 'Undergraduate Research Intern',
			'location': 'Cleveland, Ohio',
			'dates': 'Summer 2014',
			...
		}
	],
	display: function() {
		// Add jobs from work object
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
```
And this is of course repeated for each of the other sections; bio, education, and projects. This serves as a good method of abstracting and encapsulating each section of the site, improving readability and modularity, and making maintenance much easier than if the code for each content section were jumbled together.

The Google Maps API was also implemented, adding a map to the site, and pulling from the JSON data to populate map markers. This was primarily distribution code from the project fork, although I have used the Google Map API before in other projects.

Finally the sections are checked for content, and if a section is empty, it is hidden. This adds some further modularity to the site, so that everything doesn't break just because content isn't present. For example
```sh
if(document.getElementsByClassName('work-entry').length === 0) {
    document.getElementById('workExperience').style.display = "none";
This is in hide.Empty.js
```
checks to see if there are work entries in the work section, and if not, the entire work section is hidden from the page.

Learning how to populate web content with JavaScript is certainly valuable, and necessary for transitioning from static web pages into dynamic applications.

### Note
The site has been updated, and the above example code might not be identical to the actual code, however the principal functionality and concepts are the same.

[jQuery]: <https://jquery.com/>


