// from data.js --> print data to view arrays
var tableData = ufo;
console.log(tableData);

// select table body, set as variable
var tbody = d3.select("tbody");

// set values for columns and print sightings
tableData.forEach(sightings => {
    console.log(sightings);

    // append table row
    var row = tbody.append("tr");

// loop through arrays, printing keys and values in table
Object.entries(sightings).forEach(([key, value]) => {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value)
    });
});

// filter table button
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html('');

    // select date button
    var inputElement = d3.select("#datetime");

    // get value property of input datetime
    var inputValue = inputElement.property("value");

    // print input datetime
    console.log(inputValue);

    // filter data with datetime equal to inputValue
    var filterData = tableData.filter(sightings => sightings.datetime === inputValue);

    // print filtered data
    console.log(filterData);

    // use forEach to print selections
    filterData.forEach(selections => {
        console.log(selections);

        // append table row for each sighting object
        var row = tbody.append("tr");

        // print each sighting value
        Object.entries(selections).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

});
