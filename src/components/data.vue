<script>
import * as d3 from "d3";
export default {
  data() {
    return {};
  },
  mounted() {
    const width = 600;
    const height = 300;
    const popMax = 1_380_000_000
    const popMin = 52_070

    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height)

    const y = d3.scaleLinear()
        .domain([15, 90]).range([250, 0])
    const x = d3.scaleLog()
        .domain([250, 100_000]).range([0,width])

    const radius = d3.scaleSqrt()
        .domain([popMin, popMax]).range([10,40])
    svg.append('circle')
        .attr('fill', 'red')
        .attr('r', radius(popMax))
        .attr('cx', x(13330))
        .attr('cy', y(77))
  },
};
</script>

<template>
  <div>
    <h2>Data visualization with D3.js</h2>
    <svg></svg>
  </div>
</template>