<script>
import * as d3 from "d3";
import "../assets/js/dimple.v2.0.0.min"

export default {
  data() {
    return {};
  },
  mounted() {

    /*
    D3.js setup code
  */

    "use strict";
    const margin = 75,
        width = 1400 - margin,
        height = 600 - margin;

    const svg = d3.select("dimple")
        .append("svg")
        .attr("width", width + margin)
        .attr("height", height + margin)
        .append('g')
        .attr('class', 'chart');

    /*
    Dimple.js Chart construction code
    */

    const myChart = new dimple.chart(svg, data);
    const x = myChart.addTimeAxis("x", "year");
    myChart.addMeasureAxis("y", "attendance");
    myChart.addSeries(null, dimple.plot.bar);
    myChart.draw();

    d3.tsvParse("../assets/data/world_cup.tsv", draw)

  },
};

</script>

<template>

</template>

<style scoped>

</style>