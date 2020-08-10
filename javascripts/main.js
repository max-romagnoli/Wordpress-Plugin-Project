// DATA
function getData() {
  console.log("hello")
         fetch("http://localhost/index.php")
              .then(response => console.log(response))
         return myArray; // change data in data.js
    }

dataset = getData();

// CHART SIZE
var width = 650,
    height = 650,
    radius = Math.min(width / 2, height / 2) * 0.90;

// SCALES (ricordati le interpolations alla fine)
var x = d3.scale.linear()
.range([0, 2 * Math.PI]);

var y = d3.scale.linear()
.range([0, radius]);

// SVG VALUES AND ATTRIBUTES
var divHeight = height;
var divWidth = width;

var svg = d3.select("#chart").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + divWidth / 2 + "," + height / 2 + ") rotate(-90 0 0)");

// PARTITION
var partition = d3.layout.partition()
    .value(function(d) {
        return d.size;
      });

// CHART STRUCTURE

var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("opacity", 0);

var arc = d3.svg.arc()
    .startAngle(function(d) {
        if (d.size != 0)
        return Math.max(0, Math.min(2 * Math.PI, x(d.x)));
      })
    .endAngle(function(d) {

        if (d.depth == 0)
        return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));

        if (d.depth == 2) {
        return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
      }

        if (d.size != 0)
        return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
      })
    .innerRadius(function(d) {
        if (d.size != 0)
        return Math.max(0, y(d.y));
      })
    .outerRadius(function(d) {
        if (d.size != 0)
        return Math.max(0, y(d.y + d.dy));

      });

var root = dataset;

// DATA ONCLICK/OVER/MOVE
var g = svg.selectAll("g")
    .data(partition.nodes(root))
    .enter().append("g");

var path = g.append("path")
    .attr("d", arc)
    .style("fill", function(d) {
        return d.color;
      })
    .style("fill-opacity", function(d) {
        return d.opacity;
    })
    .on("click", click) // see the function below
    .on("mouseover", mouseOver)
    .on("mousemove", function(d) {
        return tooltip
    .style("top", (d3.event.pageY-10)+"px")
    .style("left", (d3.event.pageX+10)+"px");
      })
    .on("mouseout", mouseOut);


//.append("text")
var text = g.append("text")
    .attr("x", function(d) {
        return y(d.y);
      })
    .attr("dx", function(d) {
        return d.depth == 0 ? "9" : "9"
      }) // margin
    .attr("dy", ".35em") // align vert
    .attr("transform", function(d) {
        return "rotate(" + computeTextRotation(d) + ")";
      })
    .text(function(d) {
        return d.size == null ? d.name : d.name;
      })
    .style("fill", "black");

// FUNCTIONS

function computeTextRotation(d) {
      var angle = x(d.x + d.dx / 2) - Math.PI / 2;
      return angle / Math.PI * 180;
    }

function mouseOut(d) {
  d3.select(this).style("fill-opacity", function(d) {
    return d.opacity;
  })
  return tooltip.style("opacity", 0);
}

function mouseOver(d) {
    d3.select(this).style("fill-opacity", function(d) {
      return d.opacity - 0.1;
    });
    tooltip.html(function() {
    return d.name + "<br>" + d.value;
  });
    return tooltip.transition()
        .duration(50)
        .style("opacity", 0.9);
}

function click(d) {
      document.getElementById("articleHeader").innerText = d.name;
      document.getElementById("articlePar").innerText = d.paragraph;
      document.getElementById("articleVideo").src = d.video;
      // fading
      if (d.size !== undefined) {
          d.size += 100;
    };


// TEXT LABELS
text.transition().attr("opacity", 0);

path.transition()
.duration(750)
.attrTween("d", arcTween(d))
.each("end", function(e, i) {
        if (e.x >= d.x && e.x < (d.x + d.dx)) {
            // associated text
        var arcText = d3.select(this.parentNode).select("text");
            // recalculate text position
            arcText.transition().duration(1)
                   .attr("opacity", 1)
                   .attr("transform", function() {
              return "rotate(" + computeTextRotation(e) + ")"
            })
                   .attr("x", function(d) {
              return y(d.y);
            });
        }
    });
};

// WORD WRAP
var insertLinebreaks = function(t, d, width) {
       var el = d3.select(t);
       var p = d3.select(t.parentNode);
       p.append("g")
        .attr("x", function(d) {
         return y(d.y);
       })
        .attr("dx", "6") // margin
        .attr("dy", ".35em") // align vert di nuovo
        .attr("transform", function(d) {
         return "rotate(" + computeTextRotation(d) + ")";
       })
        //p
        .append("foreignObject")
        .attr('x', -width / 2)
        .attr("width", width)
        .attr("height", 200)
        .append("xhtml:p")
        .attr('style', 'word-wrap: break-word; text-align:center;')
        .html('d.name');
         el.remove();
        };

         d3.select(self.frameElement).style("height", height + "px");

         d3.select(self.frameElement).style("height", height + "px");

// SCALES INTERPOLATION
function arcTween(d) {
       var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
       yd = d3.interpolate(y.domain(), [d.y, 1]),
       yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
       return function(d, i) {
         return i ? function(t) {
           return arc(d);
         } : function(t) {
           x.domain(xd(t));
           y.domain(yd(t)).range(yr(t));
           return arc(d);
         };
       };
     }
