var data = [25, 40, 49, 60, 72, 80 , 90 , 100];

var width = 400;
var height = 200;


var x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([0, width])
    .padding(0.1);

var y = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([height, 0]);


var svg = d3.select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);


svg.selectAll("rect")
    .data(data)
    .enter().append("rect")
    .attr("x", function(d, i) { return x(i); })
    .attr("y", function(d) { return y(d); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d); });


    svg.selectAll("text")
    .data(data)
    .enter().append("text")
    .text(function(d) { return d + "%"; })
    .attr("x", function(d, i) { return x(i) + x.bandwidth() / 2; })
    .attr("y", function(d) { return y(d) + 15; })
    .attr("text-anchor", "middle");

svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

svg.append("g")
    .call(d3.axisLeft(y));