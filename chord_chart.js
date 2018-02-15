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

  let arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(45 * (Math.PI/180)).endAngle(3);
  console.log(arc);
  svg.append("path").attr("d", arc);
  
});