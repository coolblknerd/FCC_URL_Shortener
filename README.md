URL SHORTENER MICROSERVICE
---------------------------
Create a URL shortener microservice that returns a json formatted shortened
url and regular url that are both clickable.

USER STORIES
------------
* I can pass a URL as a parameter and I will receive a shortened URL in the JSON
* response.
 
* If I pass an invalid URL that doesn't follow the valid http://www.example.com 
* format, the JSON response will contain an error instead.

* When I visit that shortened URL, it will redirect me to my original link.

NOTES
-----

12-13-16

The last couple of days I've been trying to figure out how to make the 'http://'
pass through the parameter.  What I've found is that I need to encode the 
backslashes in the parameter.  I've tried the 'query string', 'body-parser', and 
'url' modules to no avail.  The encodeURIComponent seems the most likely method
to use to escape the backslashes but the method isn't working with node/express.
I'm just gonna keep playing around with it until something comes up.