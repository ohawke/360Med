# 360Med
Junior Design Project for Team JID-3357

Our project allows medical researchers to learn about project cost before embarking on a project by compiling data from various databases.

# Release Notes:

## v.1.0.0
Published: 04/22/2024
### What's new
- New splash page after opening application
- Improved look of filter bar when searching
- Highlight search results for improved interpretability
- Improved color scale of heatmap to adjust to every search term
- Heatmap is now hoverable
- More descriptive error codes
  
### Bug fixes
- Fixed mongoDB connection issue caused by connect-disconnect every operation
- Heatmap no longer turns black when searching for terms with no associated data
- Fixed build commands

## v.0.4.0

### Features
- Implemented Google sign in functionality
- Slight UI improvements
- Minor bug fixes

### Bug fixes
- Fixed map bugs

### Known Issues
- Main page is not fully implemented yet
- Google sign in request is sometimes rejected
- Redirect URL unavailable due to non-HTTPS webpage



## v.0.3.0

### Features
- Improved US heat map functionality 
- US map is divided by states and counties that can be selected by the user
- Developed landing home page for better UX

### Bug fixes
- Fixed crash when navigating from landing page to home page

### Known Issues
- Main page is not fully implemented yet

## v.0.2.0

### Features
- Created a base interface for how the heat map will be viewed
- Search now takes field types and will provide current relevant clinical trials data

### Bug fixes
- The temporary backend of the server should now work for multiple IP addresses
- Search bar will now yield results and provide accurate data

### Known Issues
- Certain HTML tags are not being correctly filtered out when loaded to the page

## v.0.1.0

### Features
- Temporary front-end and server with Medicaid codes set up

### Bug fixes
- The temporary backend of the server should now work for multiple IP addresses

### Known Issues
- We only have a barebones temporary backend setup


