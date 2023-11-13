const colourPicker = {
  canvas: document.getElementById("picker"), // The colourPicker canvas element
  load: function () {
    colourPicker.context = colourPicker.canvas.getContext("2d"); // Sets the canvas context

    colourPicker.size =
      colourPicker.wheel.size + colourPicker.markers.outerSize; // Sets the size of the colourPicker based on wheel size and some room for markers
    colourPicker.center = colourPicker.size / 2; // Sets the centre of the colourPicker

    colourPicker.wheel.radius = colourPicker.wheel.size / 2; // Sets the radius of the wheel
    colourPicker.markers.outerRadius = colourPicker.markers.outerSize / 2; // Sets the marker for the outer radius
    colourPicker.markers.innerRadius = colourPicker.markers.innerSize / 2; // Sets the marker for the inner radius

    colourPicker.canvas.width = colourPicker.size; // set the canvas size based on the marker / wheel size
    colourPicker.canvas.height = colourPicker.size;

    colourPicker.wheel.image.onload = function () {
      colourPicker.wheel.draw(); // draw the wheel
      colourPicker.calculate(
        {
          x: colourPicker.size - colourPicker.markers.outerRadius - 1,
          y: colourPicker.center,
        },
        0
      );
    };
    colourPicker.wheel.image.src = "./colour_wheel.png";

    // load drag events
    $("#picker").mousedown(colourPicker.drag.down);
    $("body").mouseup(colourPicker.drag.up);
    $("body").mousemove(colourPicker.drag.move);
  },
  clearCanvas: function () {
    // Clears the canvas
    colourPicker.context.clearRect(
      0,
      0,
      colourPicker.canvas.width,
      colourPicker.canvas.height
    );
  },
  wheel: {
    size: 480, // The size of the colour wheel
    image: new Image(), // the wheel image, loaded on colourPicker.load
    draw: function () {
      // Draws the wheel on the canvas
      colourPicker.context.drawImage(
        colourPicker.wheel.image,
        colourPicker.markers.outerRadius,
        colourPicker.markers.outerRadius,
        colourPicker.wheel.size,
        colourPicker.wheel.size
      );
    },
  },
  markers: {
    outerSize: 30, // the outer diameter of a marker
    innerSize: 22.5, // the inner diameter of a marker
    list: [], // the list of markers and the position
    selected: 0, // the selected markers
    draw: function () {
      // draws the markers in the above list onto the canvas
      // draw the container / outer circle
      for (let i = colourPicker.markers.list.length - 1; i >= 0; i--) {
        // start at the last marker so the first marker will be on top
        let point = colourPicker.markers.list[i];

        let theta = Math.atan(
          (point.y - colourPicker.center) / (point.x - colourPicker.center)
        );

        let antiClockwise = point.x - colourPicker.center < 0;

        let theta1 = (3 * Math.PI) / 2 + theta;
        let theta2 = theta1 - Math.PI;

        colourPicker.markers.drawContainer(
          point,
          colourPicker.markers.outerRadius,
          theta1,
          theta2,
          antiClockwise
        );
      }
      // Draw the inner circle
      let selected = undefined;
      for (let i = colourPicker.markers.list.length - 1; i >= 0; i--) {
        if (colourPicker.markers.selected == i) {
          selected = colourPicker.markers.list[i];
          selected.color = colourPicker.colours.list[i].str;
          continue;
        }
        colourPicker.markers.drawCircle(
          colourPicker.colours.list[i].str,
          colourPicker.markers.list[i],
          colourPicker.markers.innerRadius
        );
      }
      // Draw selected marker - on top
      if (selected) {
        colourPicker.markers.drawCircle(
          "#FFF",
          selected,
          colourPicker.markers.outerRadius
        );
        colourPicker.markers.drawCircle(
          selected.color,
          selected,
          colourPicker.markers.innerRadius
        );
      }
    },
    drawContainer: function (point, radius, theta1, theta2, antiClockwise) {
      // Helper function for markers.draw
      colourPicker.context.fillStyle = "rgba(255, 255, 255, 0.5)";
      colourPicker.context.beginPath();
      colourPicker.context.moveTo(colourPicker.center, colourPicker.center);
      colourPicker.context.arc(
        point.x,
        point.y,
        radius,
        theta1,
        theta2,
        antiClockwise
      );
      colourPicker.context.lineTo(colourPicker.center, colourPicker.center);
      colourPicker.context.fill();
      colourPicker.context.closePath();
    },
    drawCircle: function (color, point, radius) {
      // Helper function for markers.draw
      colourPicker.context.fillStyle = color;
      colourPicker.context.beginPath();
      colourPicker.context.arc(point.x, point.y, radius, 0, 2 * Math.PI);
      colourPicker.context.fill();
      colourPicker.context.closePath();
    },
  },
  drag: {
    // Handles marker dragging
    markerDragging: -1, // The current marker being dragged
    down: function (e) {
      //  Checks if the click is intersecting with the selected marker
      if (
        colourPicker.drag.intersects(
          e,
          colourPicker.markers.list[colourPicker.markers.selected]
        )
      ) {
        colourPicker.drag.markerDragging = colourPicker.markers.selected; // Set the marker being dragged
      } else {
        //  Checks if the click is intersecting with the selected marker
        for (let i = colourPicker.markers.list.length - 1; i >= 0; i--) {
          if (colourPicker.drag.intersects(e, colourPicker.markers.list[i])) {
            colourPicker.markers.selected = i; // Change the selected marker
            $(".samples .col.selected").removeClass("selected");
            $('.samples .col[data-sample="' + i + '"]').addClass("selected");
            colourPicker.drag.markerDragging = i; // Set the marker being dragged
            break;
          }
        }
      }
      colourPicker.drag.move(e); // Call move in case the user clicks their mouse but does not move it
    },
    up: function () {
      colourPicker.drag.markerDragging = -1; // No longer dragging the marker
    },
    move: function (e) {
      if (colourPicker.drag.markerDragging != -1) {
        // If a marker is being dragged
        colourPicker.calculate(
          {
            x: Math.floor(e.pageX - colourPicker.canvas.offsetLeft),
            y: Math.floor(e.pageY - colourPicker.canvas.offsetTop),
          },
          colourPicker.drag.markerDragging
        );
      }
    },
    intersects: function (e, p) {
      // Checks if an event with a mouse location intersects a point
      let eX = Math.floor(e.pageX - colourPicker.canvas.offsetLeft),
        eY = Math.floor(e.pageY - colourPicker.canvas.offsetTop);
      return (
        eX >= p.x - colourPicker.markers.outerRadius &&
        eX <= p.x + colourPicker.markers.outerRadius &&
        eY >= p.y - colourPicker.markers.outerRadius &&
        eY <= p.y + colourPicker.markers.outerRadius
      );
    },
  },
  calculate: function (point, i) {
    // calculates & draws marker positions & colours
    colourPicker.clearCanvas(); // Clears the canvas
    colourPicker.wheel.draw(); //

    // make sure point is within the wheel
    if (
      colourPicker.context.getImageData(point.x, point.y, 1, 1).data[3] != 255
    ) {
      // if the pixel is not solid
      let r = Math.sqrt(
        Math.pow(point.x - colourPicker.center, 2) +
          Math.pow(point.y - colourPicker.center, 2)
      );
      let extend =
        colourPicker.center - colourPicker.markers.outerRadius - 1 - r; // extend backwards to the outer most pixel
      point = colourPicker.calc.extend(point, extend);
    }

    switch ($("#rules li.active").data("type")) {
      case 1:
        colourPicker.points.analogous(point, i);
        colourPicker.colours.analogous();
        break;
      case 2:
        colourPicker.points.monochromatic(point, i);
        colourPicker.colours.monochromatic();
        break;
      case 3:
        colourPicker.points.triad(point, i);
        colourPicker.colours.triad();
        break;
      case 4:
        colourPicker.points.complementary(point, i);
        colourPicker.colours.complementary();
        break;
      case 5:
        colourPicker.points.custom(point, i);
        colourPicker.colours.custom(i);
        break;
    }

    // Update samples
    for (let i = 0; i < 5; i++) {
      $('.samples > div[data-sample="' + i + '"] .sample').css(
        "background-color",
        colourPicker.colours.list[i].str
      );
      $('.samples > div[data-sample="' + i + '"] .rgb.r').val(
        colourPicker.colours.list[i].r
      );
      $('.samples > div[data-sample="' + i + '"] .rgb.g').val(
        colourPicker.colours.list[i].g
      );
      $('.samples > div[data-sample="' + i + '"] .rgb.b').val(
        colourPicker.colours.list[i].b
      );
      $('.samples > div[data-sample="' + i + '"] .hex').val(
        colourPicker.calc.rgbToHex(
          colourPicker.colours.list[i].r,
          colourPicker.colours.list[i].g,
          colourPicker.colours.list[i].b
        )
      );
    }

    colourPicker.markers.draw();
  },
  fromColor: function (rgb, i) {
    let ryb = colourPicker.calc.rgbToRyb(rgb.r, rgb.g, rgb.b);
    let hsl = colourPicker.calc.rgbToHsl(ryb.r, ryb.y, ryb.b);

    if (hsl[2] < 0.5) {
      hsl[2] = 0.5;
    } // limit lightness

    let r = colourPicker.wheel.radius * (1 - (hsl[2] - 0.5) * 2); // Get the magnitude based on lightness
    let theta = 2 * Math.PI - colourPicker.calc.degToRad(360 * hsl[0]); // Get the direction based on hue

    let point = { x: r * Math.cos(theta), y: r * Math.sin(theta) };
    // point is relative to the center of the canvas so we add colourPicker.center to position it relative to the origin of the canvas
    point.x += colourPicker.center;
    point.y += colourPicker.center;

    colourPicker.calculate(point, i); // calculate from this point
  },
  points: {
    analogous: function (point, i) {
      colourPicker.markers.list = [];
      let basePoint = point;
      if (i == 1) {
        // Calcualte the base point from the given marker
        basePoint = colourPicker.calc.rotate(
          point,
          colourPicker.calc.degToRad(15)
        );
      } else if (i == 2) {
        basePoint = colourPicker.calc.rotate(
          point,
          colourPicker.calc.degToRad(-15)
        );
      } else if (i == 3) {
        basePoint = colourPicker.calc.rotate(
          point,
          colourPicker.calc.degToRad(30)
        );
      } else if (i == 4) {
        basePoint = colourPicker.calc.rotate(
          point,
          colourPicker.calc.degToRad(-30)
        );
      }
      colourPicker.markers.list[0] = basePoint;
      colourPicker.markers.list[1] = colourPicker.calc.rotate(
        basePoint,
        colourPicker.calc.degToRad(-15)
      );
      colourPicker.markers.list[2] = colourPicker.calc.rotate(
        basePoint,
        colourPicker.calc.degToRad(15)
      );
      colourPicker.markers.list[3] = colourPicker.calc.rotate(
        basePoint,
        colourPicker.calc.degToRad(-30)
      );
      colourPicker.markers.list[4] = colourPicker.calc.rotate(
        basePoint,
        colourPicker.calc.degToRad(30)
      );
    },
    monochromatic: function (point, i) {
      colourPicker.markers.list = [];
      let distance = (colourPicker.wheel.radius / 190) * 58;
      let basePoint;
      let subPoint;
      if (i == 0 || i == 3 || i == 4) {
        // Calculate the base point from the given marker
        basePoint = point;
        subPoint = colourPicker.calc.extend(basePoint, -distance);
      } else if (i == 1 || i == 2) {
        subPoint = point;
        basePoint = colourPicker.calc.extend(subPoint, distance);
      }
      colourPicker.markers.list[0] = basePoint;
      colourPicker.markers.list[1] = subPoint;
      colourPicker.markers.list[2] = subPoint;
      colourPicker.markers.list[3] = basePoint;
      colourPicker.markers.list[4] = basePoint;
    },
    triad: function (point, i) {
      colourPicker.markers.list = [];
      let basePoint;
      let triad1;
      let triad2;
      if (i == 0 || i == 3) {
        // Calculate the base point from the given marker
        basePoint = point;
        triad1 = colourPicker.calc.rotate(
          basePoint,
          colourPicker.calc.degToRad(-120)
        );
        triad2 = colourPicker.calc.rotate(
          basePoint,
          colourPicker.calc.degToRad(120)
        );
      }
      if (i == 1) {
        basePoint = colourPicker.calc.rotate(
          point,
          colourPicker.calc.degToRad(120)
        );
        triad1 = point;
        triad2 = colourPicker.calc.rotate(
          basePoint,
          colourPicker.calc.degToRad(120)
        );
      } else if (i == 2 || i == 4) {
        basePoint = colourPicker.calc.rotate(
          point,
          colourPicker.calc.degToRad(-120)
        );
        triad1 = colourPicker.calc.rotate(
          basePoint,
          colourPicker.calc.degToRad(-120)
        );
        triad2 = point;
      }
      colourPicker.markers.list[0] = basePoint;
      colourPicker.markers.list[1] = triad1;
      colourPicker.markers.list[2] = triad2;
      colourPicker.markers.list[3] = basePoint;
      colourPicker.markers.list[4] = triad2;
    },
    complementary: function (point, i) {
      colourPicker.markers.list = [];
      let basePoint;
      let subBasePoint;
      let complementPoint;
      if (i == 0 || i == 3) {
        // Calculate the base point from the given marker
        basePoint = point;
        subBasePoint = colourPicker.calc.extend(
          point,
          -colourPicker.markers.outerSize
        );
        complementPoint = colourPicker.calc.rotate(basePoint, Math.PI);
      } else if (i == 1) {
        basePoint = colourPicker.calc.extend(
          point,
          colourPicker.markers.outerSize
        );
        subBasePoint = point;
        complementPoint = colourPicker.calc.rotate(basePoint, Math.PI);
      } else if (i == 2 || i == 4) {
        basePoint = colourPicker.calc.rotate(point, Math.PI);
        subBasePoint = colourPicker.calc.extend(
          basePoint,
          -colourPicker.markers.outerRadius
        );
        complementPoint = point;
      }
      colourPicker.markers.list[0] = basePoint;
      colourPicker.markers.list[1] = subBasePoint;
      colourPicker.markers.list[2] = complementPoint;
      colourPicker.markers.list[3] = basePoint;
      colourPicker.markers.list[4] = complementPoint;
    },
    custom: function (point, i) {
      // Only update given point
      colourPicker.markers.list[i] = point;
    },
  },
  colours: {
    list: [],
    analogous: function () {
      for (let i = 0; i < colourPicker.markers.list.length; i++) {
        // for each marker
        let rgba = colourPicker.context.getImageData(
          colourPicker.markers.list[i].x,
          colourPicker.markers.list[i].y,
          1,
          1
        ).data; // get the color from the canvas

        if (rgba[3] != 255) continue; // if the color isn't solid don't update

        if (i == 1 || i == 2) {
          // marker 1 & 2 are 91% darker
          let amt = (1 - 0.91) * 255;
          rgba[0] -= amt;
          rgba[0] = rgba[0] < 0 ? 0 : rgba[0];
          rgba[1] -= amt;
          rgba[1] = rgba[1] < 0 ? 0 : rgba[1];
          rgba[2] -= amt;
          rgba[2] = rgba[2] < 0 ? 0 : rgba[2];
        }

        colourPicker.colours.list[i] = {
          // update the colours list
          r: rgba[0],
          g: rgba[1],
          b: rgba[2],
          str: "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")",
        };
      }
    },
    monochromatic: function () {
      for (let i = 0; i < colourPicker.markers.list.length; i++) {
        // for each marker
        let rgba = colourPicker.context.getImageData(
          colourPicker.markers.list[i].x,
          colourPicker.markers.list[i].y,
          1,
          1
        ).data; // get the color from the canvas

        if (rgba[3] != 255) continue; // if the color isn't solid don't update

        if (i == 2 || i == 3 || i == 4) {
          // marker 2 & 3 are 50% darker, marker 4 is 80% darker
          let amt = (1 - (i == 4 ? 0.8 : 0.5)) * 255;
          rgba[0] -= amt;
          rgba[0] = rgba[0] < 0 ? 0 : rgba[0];
          rgba[1] -= amt;
          rgba[1] = rgba[1] < 0 ? 0 : rgba[1];
          rgba[2] -= amt;
          rgba[2] = rgba[2] < 0 ? 0 : rgba[2];
        }

        colourPicker.colours.list[i] = {
          // update the colours list
          r: rgba[0],
          g: rgba[1],
          b: rgba[2],
          str: "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")",
        };
      }
    },
    triad: function () {
      for (let i = 0; i < colourPicker.markers.list.length; i++) {
        // for each marker
        let rgba = colourPicker.context.getImageData(
          colourPicker.markers.list[i].x,
          colourPicker.markers.list[i].y,
          1,
          1
        ).data; // get the color from the canvas

        if (rgba[3] != 255) continue; // if the color isn't solid don't update

        if (i == 2 || i == 3 || i == 4) {
          // marker 3 & 4 are 70% darker, marker 2 is 80% darker
          let amt = (1 - (i == 2 ? 0.8 : 0.7)) * 255;
          rgba[0] -= amt;
          rgba[0] = rgba[0] < 0 ? 0 : rgba[0];
          rgba[1] -= amt;
          rgba[1] = rgba[1] < 0 ? 0 : rgba[1];
          rgba[2] -= amt;
          rgba[2] = rgba[2] < 0 ? 0 : rgba[2];
        }

        colourPicker.colours.list[i] = {
          // update the colours list
          r: rgba[0],
          g: rgba[1],
          b: rgba[2],
          str: "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")",
        };
      }
    },
    complementary: function () {
      for (let i = 0; i < colourPicker.markers.list.length; i++) {
        // for each marker
        let rgba = colourPicker.context.getImageData(
          colourPicker.markers.list[i].x,
          colourPicker.markers.list[i].y,
          1,
          1
        ).data; // get the color from the canvas

        if (rgba[3] != 255) continue; // if the color isn't solid don't update

        if (i == 2 || i == 3) {
          // marker 2 & 3 are 70% darker
          let amt = (1 - 0.7) * 255;
          rgba[0] -= amt;
          rgba[0] = rgba[0] < 0 ? 0 : rgba[0];
          rgba[1] -= amt;
          rgba[1] = rgba[1] < 0 ? 0 : rgba[1];
          rgba[2] -= amt;
          rgba[2] = rgba[2] < 0 ? 0 : rgba[2];
        }

        colourPicker.colours.list[i] = {
          // update the colours list
          r: rgba[0],
          g: rgba[1],
          b: rgba[2],
          str: "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")",
        };
      }
    },
    custom: function (i) {
      // only update given point
      let rgba = colourPicker.context.getImageData(
        colourPicker.markers.list[i].x,
        colourPicker.markers.list[i].y,
        1,
        1
      ).data;
      if (rgba[3] != 255) return;
      colourPicker.colours.list[i] = {
        r: rgba[0],
        g: rgba[1],
        b: rgba[2],
        str: "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")",
      };
    },
  },
  calc: {
    rotate: function (point, theta) {
      // rotates a point about the center of the wheel
      let cosTheta = Math.cos(theta),
        sinTheta = Math.sin(theta);
      let x =
          cosTheta * (point.x - colourPicker.center) -
          sinTheta * (point.y - colourPicker.center) +
          colourPicker.center,
        y =
          sinTheta * (point.x - colourPicker.center) +
          cosTheta * (point.y - colourPicker.center) +
          colourPicker.center;
      return { x: x, y: y };
    },
    extend: function (point, magnitude) {
      // extends a point relative to the center of the wheel
      let x = point.x - colourPicker.center,
        y = point.y - colourPicker.center;

      let r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      if (x != 0) {
        var theta = Math.atan(y / x) + (x >= 0 ? 0 : Math.PI);
      }

      r += magnitude;

      x = r * Math.cos(theta) + colourPicker.center;
      y = r * Math.sin(theta) + colourPicker.center;
      return { x: x, y: y };
    },
    // conversions
    degToRad: function (deg) {
      return (deg * Math.PI) / 180;
    },
    radToDeg: function (rad) {
      return (rad * 180) / Math.PI;
    },
    // colours
    hexToRgb: function (hex) {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    },
    rgbToHex: function (r, g, b) {
      return ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase();
    },
    rgbToHsl: function (r, g, b) {
      (r /= 255), (g /= 255), (b /= 255);
      let max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      let h,
        s,
        l = (max + min) / 2;
      if (max == min) {
        h = s = 0;
      } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return [h, s, l];
    },
    rgbToRyb: function (r, g, b) {
      let w = Math.min(r, g, b);
      r -= w;
      g -= w;
      b -= w;
      let mg = Math.max(r, g, b);
      let y = Math.min(r, g);
      r -= y;
      g -= y;
      if (b && g) {
        b /= 2.0;
        g /= 2.0;
      }
      y += g;
      b += g;
      let my = Math.max(r, y, b);
      if (my) {
        let n = mg / my;
        r *= n;
        y *= n;
        b *= n;
      }
      r += w;
      y += w;
      b += w;
      return { r: r, y: y, b: b };
    },
  },
};
$(colourPicker.load); // load the colourPicker

$("#rules li").click(function () {
  // changing rule
  let $clicked = $(this);
  let $active = $("#rules li.active");
  if ($clicked[0] != $active[0]) {
    $active.removeClass("active");
    $clicked.addClass("active");
    colourPicker.calculate(
      {
        // re-calculate the colours
        x: colourPicker.markers.list[colourPicker.markers.selected].x,
        y: colourPicker.markers.list[colourPicker.markers.selected].y,
      },
      colourPicker.markers.selected
    );
  }
});
$(".samples .col").click(function () {
  // change the selected marker
  let $clicked = $(this);
  let $selected = $(".samples .col.selected");
  if ($clicked[0] != $selected[0]) {
    $selected.removeClass("selected");
    $clicked.addClass("selected");
    colourPicker.markers.selected = $clicked.data("sample"); // change selected
    colourPicker.clearCanvas(); // redraw canvas - wheel & markers
    colourPicker.wheel.draw();
    colourPicker.markers.draw();
  }
});
$(".samples .rgb").change(function (e) {
  // Input an RGB
  let $rgb = $(this);
  let sample = $rgb.parent().parent().data("sample");
  let r = 0,
    g = 0,
    b = 0;
  if ($rgb.hasClass("r")) {
    // Get the rgb values
    r = parseInt($rgb.val());
    g = parseInt($rgb.siblings(".g").val());
    b = parseInt($rgb.siblings(".b").val());
  } else if ($rgb.hasClass("g")) {
    r = parseInt($rgb.siblings(".r").val());
    g = parseInt($rgb.val());
    b = parseInt($rgb.siblings(".b").val());
  } else {
    r = parseInt($rgb.siblings(".r").val());
    g = parseInt($rgb.siblings(".g").val());
    b = parseInt($rgb.val());
  }
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    e.preventDefault();
    return;
  }
  colourPicker.fromColor({ r: r, g: g, b: b }, sample); // Re-calculate from colour
});
$(".samples .hex").change(function (e) {
  // Input a HEX
  let $hex = $(this);
  let sample = $hex.parent().parent().data("sample");
  let rgb = colourPicker.calc.hexToRgb($hex.val()); // Convert hex to RGB
  if (rgb == null || isNaN(rgb.r) || isNaN(rgb.g) || isNaN(rgb.b)) {
    e.preventDefault();
    return;
  }
  colourPicker.fromColor(rgb, sample); // Re-calculate from color
});
