var isContentBox1Visible = true;
var script = document.createElement("script");
function toggleContent() {
  var contentBox1 = document.querySelector(".content_box");
  var contentBox2 = document.querySelector(".content_box2");

  if (!isContentBox1Visible) {
    contentBox1.style.display = "none";
    contentBox2.style.display = "block";
    script.src = "firework.js";
    document.body.appendChild(script);
  } else {
    contentBox1.style.display = "block";
    contentBox2.style.display = "none";
    var root = document.querySelector(".content_box");

    if (root) {
      var year = new Date().getFullYear();
      var html = `<h1 class="header">HAPPY NEW YEAR ${year} </h1>`;

      root.insertAdjacentHTML("afterbegin", html);
    } else {
      console.error("Không tìm thấy phần tử với lớp .content_box");
    }
  }

  isContentBox1Visible = !isContentBox1Visible;
}

toggleContent();
