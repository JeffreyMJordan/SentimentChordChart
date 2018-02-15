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
  let colorScale = d3.scaleOrdinal().domain([1, 3]).range(['#FF0000', '#00FF00', '#00FF00']);

  let g = svg.append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
  .datum(chord(matrix));
  
});