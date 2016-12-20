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

12-19-16

Took a couple of days off to start learning a bit about RxJS but after seeking 
out for some help on the Free Code Camp I think I've found a way to capture the
parameter.  Looks like the juice was hidden in 'req.url' or 'req.originalUrl'.  
Granted, it leaves a backslash in the beginning but that's nothing that some
small core method can't take care of.

Now, I need to create a way to shorten the url.  Probably gonna need a database
for this one though.  But I've figured out how to check the incoming url 
parameter against a regEx which will help check to see if the incoming is a
valid URL.

So the way I see this working out in my head is when the param is checked and 
the url is validated the program will take the param and check inside a database
to see if there is already a link like it already in there with shortened url.
If so, then return the original url and the shortened url, otherwise, the 
program will store the new, validated url and create a shortened url for it.