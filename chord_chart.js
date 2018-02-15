window.addEventListener('DOMContentLoaded', () => {

  var matrix = [
    [0, 5, 2],
    [4, 0, 5],
    [2, 4, 0]
  ];

  let svg = d3.select("svg");
  let width = +svg.attr("width");
  let height = +svg.attr("height");
  let outerRadius = Math.min(width, height)*0.5-40;
  let innerRadius = outerRadius-30;

  let arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

  let chord = d3.chord().padAngle(0.05).sortSubgroups(d3.descending);
  
  //What does a ribbon's radius represent? This isn't obvious to me
  let ribbon = d3.ribbon().radius(innerRadius);
  let colorScale = d3.scaleOrdinal().domain(d3.range(3)).range(['#FF0000', '#00FF00', '#0000FF']);

  let g = svg.append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
  .datum(chord(matrix));
  

  let group = g.append("g").attr("class", "groups").selectAll("g").data(function(chords) { return chords.groups; }).enter().append("g");

  group.append("path")
  .style("fill", function(d) { return colorScale(d.index); })
  .style("stroke", function(d) { return d3.rgb(colorScale(d.index)).darker(); })
  .attr("d", arc);

  g.append("g")
  .attr("class", "ribbons")
  .selectAll("path")
  .data(function(chords) { return chords; })
  .enter().append("path")
    .attr("d", ribbon)
    .style("fill", function(d) { return colorScale(d.target.index); })
    .style("stroke", function(d) { return d3.rgb(colorScale(d.target.index)).darker(); });
});