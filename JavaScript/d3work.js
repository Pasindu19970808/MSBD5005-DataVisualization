// d3 = require('d3@5')
//SHOWS HOW TO MAKE AN XAXIS AND YAXIS
//ALSO READ CSV
const dataframe = d3.csv("pokemon.csv",
function(d) {
    return {
        name:d.name,
        base_total:d.base_total,
        attack:d.attack
    };
});

const printnames = (result) =>{
    for(pokemon of result){
        console.log(pokemon.name)
    }
}
const printfunc = () => {
    dataframe.then(result => printnames(result))
}

//selecting an svg element in html
let svgitem = d3.select('svg')
                .attr('width',1400)
                .attr('height',1400)
const width = 1120
const height = 1120
const margin = {
    left: 30, top: 10, right: 10, bottom: 20
}
//MAKE CALLABLE SCALES
const xscale = d3.scaleLinear()
                 .range([margin.left, width - margin.right])
                 .domain([0,40])
const yscale = d3.scaleLinear()
                 .range([height - margin.bottom,margin.top])
                 .domain([0,40])
//  https://docs.aspose.com/svg/net/drawing-basics/svg-transformations/
//APPEND ONTO SVG AND TRANSFORM TO THE REQUIRED POSITIONS

svgitem.append('g').call(d3.axisLeft(yscale))
                   .attr('transform', `translate(${xscale(0)},0)`)

svgitem.append('g').call(d3.axisBottom(xscale))
                   .attr('transform',`translate(0,${yscale(0)})`)
                //    height - margin.bottom
                   
                //    ${height - margin.bottom
// console.log(crayons)

// printfunc()