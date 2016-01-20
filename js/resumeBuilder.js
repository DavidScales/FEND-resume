// define name and role
var name = "David Scales";
var role = "Web Developer";
// replace name and role in header
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


//define contact info, bio picture url, welcome message. and skills
var contactInfo = {
	"mobile" : "360-710-9905",
	"email" : "davidsscales@gmail.com",
	"github" : "DavidScales",
	"location" : "San Francisco"
};
var bioPic = "images/veryhandsome.jpg";
var welcomeMessage = "Welcome!";
var skills = ["html", "css", "javascript"];

// create biography object using object literal notation
var bio = {
	"name" : name,
	"role" : role,
	"contactInfo" : contactInfo,
	"bioPic" : bioPic,
	"welcomeMessage" : welcomeMessage,
	"skills" : skills
};

// TODO
// append biography object to webpage

