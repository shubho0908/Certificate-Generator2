// Variables

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let date = document.getElementById("date");
let length = document.getElementById("length");
let course = document.getElementById("course");
let gen = document.getElementById("Generate");
let main_body = document.querySelector(".main-body");
let form = document.getElementById("form");
let content = document.querySelector(".content");
let container = document.querySelector(".containerr");
let certificate_box = document.getElementById("ccc");

// Functions


gen.addEventListener("click", (e) => {
  let first = fname.value;
  let last = lname.value;
  let course_name = course.value;
  let course_date = date.value;
  let course_length = length.value;

  e.preventDefault();

  fname.value = "";
  lname.value = "";
  course.value = "";
  length.value = "";
  date.value = "";

  form.style.display = "none";
  container.style.display = "none";
  content.style.display = "block";

  certificate_box.innerHTML = `
    <div id="ccc" class="certificate-box">
                    <img
                      id="certificate"
                      src="../assets/img/Certificates/EDIT/1/1 - 1.png"
                      alt=""
                    />
                    <div class="name">${first} ${last}</div>
                    <div class="description">For completing the ${course_length}-hour online course on ${course_name}</div>
                  </div>
                  <div class="sign">
                        <input type="file" id="file" accept="image/jpeg, image/png, image/jpg">
                        <div id="display-image"></div>
                      </div>
              </div>
              </div>
    `;

  document.getElementById("Download").style.display = "block";

  // Upload a File

  const image_input = document.querySelector("#file");
  image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      image_input.style.display = "none";
      document.querySelector(".sign").style.display = "flex";
      document.querySelector(".sign").style.justifyContent = "center";
      document.querySelector(
        "#display-image"
      ).style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
  });

  // Certificate Change

  document.getElementById("two").addEventListener("click", () => {
    document.querySelector(".two").style.border =
      "2.5px solid rgb(33, 118, 255)";
    document.querySelector(".one").style.border = "none";
    document.querySelector(".three").style.border = "none";
    document.querySelector(".name").style.color = "#004AAD";
    document.querySelector(".description").style.color = "#004AAD";

    document
      .getElementById("certificate")
      .setAttribute("src", "../assets/img/Certificates/EDIT/1/1 - 2.png");
  });

  document.getElementById("three").addEventListener("click", () => {
    document.querySelector(".three").style.border =
      "2.5px solid rgb(33, 118, 255)";
    document.querySelector(".two").style.border = "none";
    document.querySelector(".one").style.border = "none";
    document.querySelector(".name").style.color = "#FF5757";
    document.querySelector(".description").style.color = "#FF5757";

    document
      .getElementById("certificate")
      .setAttribute("src", "../assets/img/Certificates/EDIT/1/1 - 3.png");
  });

  document.getElementById("one").addEventListener("click", () => {
    document.querySelector(".one").style.border =
      "2.5px solid rgb(33, 118, 255)";
    document.querySelector(".two").style.border = "none";
    document.querySelector(".three").style.border = "none";
    document.querySelector(".name").style.color = "#4F7344";
    document.querySelector(".description").style.color = "#2B3825";

    document
      .getElementById("certificate")
      .setAttribute("src", "../assets/img/Certificates/EDIT/1/1 - 1.png");
  });
});

// Download Certificate

document.getElementById("Download").addEventListener("click", () => {
  let body = document.getElementById("body").innerHTML;
  let c_box = certificate_box.innerHTML;
  document.getElementById("body").innerHTML = c_box;
  document.getElementById("body").style.textAlign = "center";
  window.print();
  location.reload()
  document.querySelector("body").style.maxWidth = "fit-content"
  document.querySelector(".custom-box").style.display = "none";
  document.querySelector("#Download").style.display = "none";
});

// Font Change

document.getElementById("kaushan").addEventListener("click", () => {
  document.querySelector(".name").style.fontFamily = "Kaushan Script";
  document.getElementById("great").innerHTML = "Kaushan Script";
  document.getElementById("great").style.fontFamily = "Kaushan Script";
});

document.getElementById("Handlee").addEventListener("click", () => {
  document.querySelector(".name").style.fontFamily = "Handlee";
  document.getElementById("great").innerHTML = "Handlee";
  document.getElementById("great").style.fontFamily = "Handlee";
});

document.getElementById("great2").addEventListener("click", () => {
  document.querySelector(".name").style.fontFamily = "Great Vibes";
  document.getElementById("great").innerHTML = "Great Vibes";
  document.getElementById("great").style.fontFamily = "Great Vibes";
});

document.getElementById("Parisienne").addEventListener("click", () => {
  document.querySelector(".name").style.fontFamily = "Parisienne";
  document.getElementById("great").innerHTML = "Parisienne";
  document.getElementById("great").style.fontFamily = "Parisienne";
});

document.getElementById("Bad_Script").addEventListener("click", () => {
  document.querySelector(".name").style.fontFamily = "Bad Script";
  document.getElementById("great").innerHTML = "Bad Script";
  document.getElementById("great").style.fontFamily = "Bad Script";
});
  

//Font Size Change

document.getElementById('normal2').addEventListener('click',()=>{
  document.getElementById('normal').innerText = "Default"
  document.querySelector('.name').style.fontSize = "84px"
})

document.getElementById('larger').addEventListener('click',()=>{
  document.getElementById('normal').innerText = "Large"
  document.querySelector('.name').style.fontSize = "104px"
})

document.getElementById('smaller').addEventListener('click',()=>{
  document.getElementById('normal').innerText = "Small"
  document.querySelector('.name').style.fontSize = "64px"
})