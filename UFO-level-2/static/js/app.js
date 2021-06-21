// from data.js --> apply table column names
var tableData = ufo;
var tableColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// select table body, set table body as variable
var tbody = d3.select("tbody");

// select search and reset buttons and set as variables
var searchBar = d3.select("#btnSearch");
var resetBar = d3.select("#btnReset");

// select categories
var searchDate = d3.select("#searchDate");
var searchCity = d3.select("#searchCity");
var searchState = d3.select("#searchState");
var searchCountry = d3.select("#searchCountry");
var searchShape = d3.select("#searchShape");

// load table rows into table body
var loadTableRows = (whichData) => {
    tbody.html("");

        whichData.forEach(dataRow => {
            var tableRow = tbody.append("tr");

            tableColumns.forEach(column => tableRow.append("td").text(dataRow[column]));

        });
};

loadTableRows(tableData);

// search button
searchBar.on("click", () => {
    d3.event.preventDefault();

var searchedDate = searchDate.property("value");
var searchedCity = searchCity.property("value");
var searchedState = searchDate.property("value");
var searchedCountry = searchCountry.property("value");
var searchedShape = searchShape.property("value");

// error message setup
if (searchedDate) {

    // Filter data for specific value
    var tableData_Filtered = tableData.filter(tableData => tableData.datetime === searchedDate);

    // When filtered data does not equal zero, add to table rows
    if (tableData_Filtered.length !== 0) {
        loadTableRows(tableData_Filtered);
    }

    // If filtered data does equal zero, print error message
    else {
        tbody.html("");
        tbody.append("tr").append("td").text("Aw, darn. No sightings for that date. Unless you messed up... go ahead and retry!");
    }
}
else if (searchedCity) {
    var tableData_Filtered = tableData.filter(tableData => tableData.city === searchedCity);
    if (tableData_Filtered.length !== 0) {
        loadTableRows(tableData_Filtered);
    }
    else {
        tbody.html("");
        tbody.append("tr").append("td").text("Aw, darn. No sightings for that date. Unless you messed up... go ahead and retry!");
    }
}
else if (searchedState) {
    var tableData_Filtered = tableData.filter(tableData => tableData.state === searchedState);
    if (tableData_Filtered.length !== 0) {
        loadTableRows(tableData_Filtered);
    }
    else {
        tbody.html("");
        tbody.append("tr").append("td").text("Aw, darn. No sightings for that date. Unless you messed up... go ahead and retry!");
    }
}
else if (searchedCountry) {
    var tableData_Filtered = tableData.filter(tableData => tableData.country === searchedCountry);
    if (tableData_Filtered.length !== 0) {
        loadTableRows(tableData_Filtered);
    }
    else {
        tbody.html("");
        tbody.append("tr").append("td").text("Aw, darn. No sightings for that date. Unless you messed up... go ahead and retry!");
    }
}
else if (searchedShape) {
    var tableData_Filtered = tableData.filter(tableData => tableData.shape === searchedShape);
    if (tableData_Filtered.length !== 0) {
        loadTableRows(tableData_Filtered);
    }
    else {
        tbody.html("");
        tbody.append("tr").append("td").text("Aw, darn. No sightings for that date. Unless you messed up... go ahead and retry!");
    }

};

// Set up reset button
resetBar.on("click", () => {
	document.getElementById("searchDate").value='';
	document.getElementById("searchCity").value='';
	document.getElementById("searchState").value='';
	document.getElementById("searchCountry").value='';
	document.getElementById("searchShape").value='';
	
// Load original dataset into table
	loadTableRows(tableData);
    });
});
