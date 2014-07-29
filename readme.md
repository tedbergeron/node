# Runs Web Server #

to run web server, at command prompt

> node example.js

Then browse to http://127.0.0.1:1337/

web server will stop running when the **Command Prompt** window is closed.

# Have Web Server serve index.html

use this command

> node webserver.js

Then browse to:

[http://localhost:3000/index.html](http://localhost:3000/index.html)

aka http://127.0.0.1:3000/index.html

Or if you allow Windows Firewall to open this port on the network, it can be accessed inside at:

[http://10.200.30.77:3000/index.html](http://10.200.30.77:3000/index.html)

Note: web page is in c:\\_dev\node\public\index.html

Note: The firewall does not ask again now that I've open port 3000.

cite: [Serve a Static HTML File with NodeJS](http://www.davidgranado.com/2011/01/serve-a-static-html-file-with-nodejs/)

### Improvements

*It would be cool to have it recognize index.html as the default doc.*

