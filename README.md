# OFU database analysis

## Overview of analysis
We have been provided with a database of UFO sightings that includes detailed information about each sighting.  The database includes information for the date, city, state, country, shape, duration and comments for each individual sighting.


### Resources
* Data Sources: data.js JavaScript file that is essentially in the format of a JSON file.
* Software: Visual Studio Code and Chrome web browser


## Results
![Top_of_page](https://github.com/AndyHerron/UFOs/blob/main/static/images/Top_of_page.png)

### Using the webpage to filter the data for specific entries.

![Unfiltered_table](https://github.com/AndyHerron/UFOs/blob/main/static/images/Unfiltered_table.png)

When the page is initally loaded, the table displays all of the data that we have.  It is organized in several columns, and the data can be filtered by using the categories on the left which match the column headings. 
To filter the table to see specific entries, use any of the spaces at the left.  As an example, I have filtered the data to search for all of the sightings in California.
![California_sightings](https://github.com/AndyHerron/UFOs/blob/main/static/images/California_sightings.png)

After a filter has been applied, the page can be reset by clicking on the header "UFO Sightings" at the top of the page.  Another search may then be performed.  In this example, the data is filtered to just show sightings from the city of "El Cajon".
![El_Cajon_sightings](https://github.com/AndyHerron/UFOs/blob/main/static/images/El_Cajon_sightings.png)

## Summary: 

### Drawback of the page design
1. If the filter parameters are not entered into fields exactly as they are typed in the database, the table will not return any data and will be blank.  For instance, if the user enters "lights" in the shape field, nothing will be returned even though "light" is a common shape in the database. Changing the input fields to accept close matches would be better.

### Recommendations for further development
1. Where was this data obtained?  Could the data be updated by web scraping to include more current data?
2. The page could also be updated to include links to other resources for more information about UFO sightings.  Perhaps it could also include a link for users to submit their own sightings, and add to the data.
