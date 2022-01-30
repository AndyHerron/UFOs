// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // first clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {

    // find the table body and add a table row
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    // pull one object from the data array and put it into the dataRow
    // one object per row
    Object.values(dataRow).forEach((val) => {

    // take each value in the object and put it into it's own cell in the table
      let cell = row.append("td");
      cell.text(val);
      }
     );
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// Attach an event to listen for the form button
// call the function when d3 detects a click
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table on the initial page load with unfiltered data
buildTable(tableData);
