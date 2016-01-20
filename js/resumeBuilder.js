// define name and role
var name = "David Scales";
var role = "Web Developer";
// replace name and role in header
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

