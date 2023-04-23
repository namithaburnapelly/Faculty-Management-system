fetch("json/faculty.json").then((res) => {
  res.json().then(data => {
    let { profile: { id, fname, email, address: { state, district, street, hno, city, pincode }, designation, phone, adhar, pan, gender, dob, image } } = data

    // ---------------------------------------------
    // -------------Profile Image-------------------
    // ---------------------------------------------
    var imgcontent = document.getElementById("profileImg");
    var img = document.createElement('img');
    img.src = image;
    img.className = "img-fluid img-profile rounded-circle mx-auto mb-2"
    imgcontent.appendChild(img)

    // ---------------------------------------------------
    // ---------------About------------------------------
    // --------------------------------------------------
    document.getElementById("fname").innerHTML = fname;
    document.getElementById("desn").innerHTML = designation;
    document.getElementById("idno").innerHTML = id;
    document.getElementById("email").innerHTML = email;
    document.getElementById("pho").innerHTML = phone;
    document.getElementById("dob").innerHTML = dob;
    document.getElementById("aad").innerHTML = adhar;
    document.getElementById("pan").innerHTML = pan;
    document.getElementById("hno").innerHTML = hno;
    document.getElementById("str").innerHTML = street;
    document.getElementById("city").innerHTML = city;
    document.getElementById("dist").innerHTML = district;
    document.getElementById("st").innerHTML = state;
    document.getElementById("pin").innerHTML = pincode;

    // ------------------------------------------------
    // ---------------Experience-----------------------
    // ------------------------------------------------

    var { wexperience } = data;
    var content = document.getElementById('box');
    content.innerHTML = "";
    for (var count = 0; count < wexperience.length; count++) {
      var div = document.createElement('div');
      div.innerHTML = `<div class="card mx-0 p-4 mb-5" style="border-color: #2196f3; box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.21);">
      <div class="resume-content mr-auto">
      <h4 class="mb-3"><i class="fa fa fa-globe mr-3 text-primary"></i>${wexperience[count].designation1}</h4>
      <p id="expP"><span id="expData">Organisation :</span> ${wexperience[count].organisation}<br/>
      <span id="expData">Nature of Work :</span> ${wexperience[count].nature_of_work}<br/>
      <span id="expData">Work Experience:</span> ${wexperience[count].work_exp}</p>
      </div>
      <div class="resume-date text-md-right">
      <span class="text-primary">${wexperience[count].duration}</span>
      </div>
      </div>`
      content.appendChild(div);
    }
    // -----------------------------------------------------
    // ---------------Education qualification---------------
    // -----------------------------------------------------
    var { edu } = data;

    var eduContent = document.getElementById("qualify");
    eduContent.innerHTML = "";
    for (count = edu.length - 1; count >= 0; count--) {
      var ediv = document.createElement('div');
      ediv.innerHTML = `<div>
  <div class="skill-item">
  <p id="eduData">${edu[count].heading}</p>
  <h2><span class="counter"> ${edu[count].percentage} </span><span>%</span></h2>
  <p><span id="uniname">${edu[count].Oname}</span><br/><br/><span id="colo">Year Of Completion : </span>
  ${edu[count].year}<br/><span id="colo">Borad/University : </span>${edu[count].Board}</p>
  </div>
  </div>`
      eduContent.appendChild(ediv);
    }

    // -----------------------------------------------------
    // ---------------Portfolio-----------------------------
    // -----------------------------------------------------


    var { all } = data;
    var pub_content = document.getElementById("rnd");
    pub_content.innerHTML = "";
    var modContent = document.getElementById('mode');

    for (let j = 0; j < all[0].jpublication.length; j++) {
      console.log(all[0].jpublication[j].jid)
      var newdiv = document.createElement('div');
      newdiv.innerHTML = `<div class="portfolio-item filter public" id="public" onclick="zoomPublications(${all[0].jpublication[j].jid},${j})">
      <a class="portfolio-link" href="#portfolioModal1" data-toggle="modal">
        <div class="caption-port">
          <div class="caption-port-content">
            <i class="fa fa-search-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="${all[0].jpublication[j].jimage}" alt="">
        </a>
        </div>`

      pub_content.appendChild(newdiv)




    }



    for (let j = 0; j < all[1].book.length; j++) {
      var newdiv = document.createElement('div');
      newdiv.innerHTML = `<div class="portfolio-item filter marketing" id="marketing" onclick="zoomBooks(${all[1].book[j].jid},${j})">
      <a class="portfolio-link" href="#portfolioModal1" data-toggle="modal">
        <div class="caption-port">
          <div class="caption-port-content">
            <i class="fa fa-search-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="${all[1].book[j].book_image}" alt="">
      </a>
    </div>`
      pub_content.appendChild(newdiv)
    }

    for (let j = 0; j < all[2].RnD.length; j++) {
      var newdiv = document.createElement('div');
      newdiv.innerHTML = `<div class="portfolio-item filter consulting" id="consulting" onclick="zoomRnD(${all[2].RnD[j].jid},${j})">
      <a class="portfolio-link" href="#portfolioModal1" data-toggle="modal">
        <div class="caption-port">
          <div class="caption-port-content">
            <i class="fa fa-search-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="${all[2].RnD[j].res_img}" alt="">
      </a>
    </div>`
      pub_content.appendChild(newdiv)
    }

    // -----------------------------------------------------
    // ----------------------Awards-------------------------
    // -----------------------------------------------------
    // "aname": "Faculty of the year",
    //         "year_aw": "23 Apr 2017",
    //         "institute"
    let { awards } = data
    var cnt = awards.length
    var awardContent = document.getElementById('awardbox');
    awardContent.innerHTML = "";
    for (let i = 0; i < cnt; i++) {
      let awadiv = document.createElement('div');
      awadiv.innerHTML = `<div class="main-award" id="award-box">
            <div class="award">
              <div class="award-icon"></div>
              <div class="award-content">
                <span class="date">${awards[i].year_aw}</span>
                <h5 class="title">${awards[i].aname}</h5>
                <p class="description">
                  ${awards[i].institute}
              </div >
            </div >
          </div > `
      awardContent.append(awadiv);
    }

  })
})

function zoomPublications(_id, j) {
  let i = document.getElementById('zoom')
  fetch("json/faculty.json").then((res) => {
    res.json().then(data => {
      let { profile: { id, fname, email, address: { state, district, street, hno, city, pincode }, designation, phone, adhar, pan, gender, dob, image } } = data
      var { all } = data;
      i.innerHTML = `<div class="row">
      <div class="col-md-6">
      <img class="img-fluid img-centered" src='${all[0].jpublication[j].jimage}' alt="">
      </div>
      <div class="col-md-6">
      
      <ul class="list-inline item-details">
      <li>Name:
      <strong>
      <a href="#">${all[0].jpublication[j].jname}</a>
      </strong>
      </li>
      <li>ISSN Number:
      <strong>
    <a href="#">${all[0].jpublication[j].issn}</a>
    </strong>
    </li>
      <li>Volume Number:
      <strong>
    <a href="#">${all[0].jpublication[j].jvolno}</a>
    </strong>
    </li>
      <li>Publication Year:
      <strong>
      <a href="#">${all[0].jpublication[j].pub_year}</a>
      </strong>
      </li>
      <li>Publisher:
      <strong>
    <a href="#">${all[0].jpublication[j].publisher}</a>
    </strong>
    </li>
    
    <li>Page Numbers:
      <strong>
    <a href="#">${all[0].jpublication[j].page_nos}</a>
    </strong>
    </li>
    </ul>
    <button class="btn btn-general btn-white" type="button" data-dismiss="modal">
    <i class="fa fa-times"></i> Close
    </button>
    </div>
    </div>`
    })
  })
}

function zoomBooks(_id, j) {
  let i = document.getElementById('zoom')
  fetch("json/faculty.json").then((res) => {
    res.json().then(data => {
      let { profile: { id, fname, email, address: { state, district, street, hno, city, pincode }, designation, phone, adhar, pan, gender, dob, image } } = data
      var { all } = data;
      i.innerHTML = `<div class="row">
      <div class="col-md-6">
      <img class="img-fluid img-centered" src='${all[1].book[j].book_image}' alt="">
      </div>
      <div class="col-md-6">
      
      <ul class="list-inline item-details">
      <li>Book Title:
      <strong>
      <a href="#">${all[1].book[j].title}</a>
      </strong>
      </li>
      <li>Volume Number:
      <strong>
      <a href="#">${all[1].book[j].volume}</a>
      </strong>
      </li>
      <li>Publisher:
      <strong>
    <a href="#">${all[1].book[j].book_publisher}</a>
    </strong>
    </li>
    <li>ISBN Number:
      <strong>
    <a href="#">${all[1].book[j].isbn}</a>
    </strong>
    </li>
    <li>Total Pages:
      <strong>
    <a href="#">${all[1].book[j].pgnos}</a>
    </strong>
    </li>
    </ul>
    <button class="btn btn-general btn-white" type="button" data-dismiss="modal">
    <i class="fa fa-times"></i> Close
    </button>
    </div>
    </div>`
    })
  })
}

function zoomRnD(_id, j) {
  let i = document.getElementById('zoom')
  fetch("json/faculty.json").then((res) => {
    res.json().then(data => {
      let { profile: { id, fname, email, address: { state, district, street, hno, city, pincode }, designation, phone, adhar, pan, gender, dob, image } } = data
      var { all } = data;
      i.innerHTML = `<div class="row">
      <div class="col-md-6">
      <img class="img-fluid img-centered" src='${all[2].RnD[j].res_img}' alt="">
      </div>
      <div class="col-md-6">
      
      <ul class="list-inline item-details">
      <li>Title:
      <strong>
      <a href="#">${all[2].RnD[j].pro_title}</a>
      </strong>
      </li>
      
      <li>Duration of Project:
      <strong>
      <a href="#">${all[2].RnD[j].pro_duration}</a>
      </strong>
      </li>
      <li>Cost:
      <strong>
    <a href="#">${all[2].RnD[j].cost}</a>
    </strong>
    </li>
    </li>
      <li>Status:
      <strong>
    <a href="#">${all[2].RnD[j].status}</a>
    </strong>
    </li>
    </ul>
    <button class="btn btn-general btn-white" type="button" data-dismiss="modal">
    <i class="fa fa-times"></i> Close
    </button>
    </div>
    </div>`
    })
  })
}
