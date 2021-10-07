# Simple template to create SPA's with plain JavaScript using Babel, Webpack and Webpacks devserver

This version of the startcode is the result after this demo, where basic edit functionality is implemented using Bootstrap modals.

The video tutorial can be seen here:
[:tv: Getting started with edit and Bootstrap modals](https://cphbusiness.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=71410522-8d79-44af-87b0-adba0169ff74)

## Getting started

- If not already done, install nodejs and a sufficient JavaScript Editor (we suggest vs-code)
- Clone this project
- In the folder were it was cloned into, type npm install
- In the folder it was cloned into (if you have installed vs-code) type "code ." to open vs-code
- In the folder it was cloned into type npm start, to run the project via Webpacks development server
- A browser window should now open, rendering the project hosted on Webpacks dev-server. You now have a local web server with hot reloading. Any changes made in your code are directly reflected in the browser (How cool is that?)

### Supporting video, related to the first use with the Fetch and Promises exercises given in period2, week2.

[:tv: Getting started with the Fetch and Promise exercises](https://www.youtube.com/watch?v=Kc0a43cY-tk&feature=youtu.be)

### Deploy to Nginx

If you have prepared Nginx for hosting this project, you can deploy it using the simple script 'deploy.sh' found in the root of the project
_Make sure_ to set the values for XXXX and DROPLET_URL first

### Using Bootstrap that requires the Bootstrap JavaScript

The code is already prepared for using Bootstrap Javascript
