// from data.js
var ufoData = data;
// populate table with ufodata
var tbody = d3.select("tbody");
data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
//select object for filter input
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.node().value;
    var filteredData = ufoData.filter(input => input.datetime === inputValue);
    $("tbody").children().remove();
    filteredData.forEach((datum) => {
        var row = tbody.append('tr');
        Object.entries(datum).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
    
        });
    });

});
