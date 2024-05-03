// CRUD FORM

let checkin = document.getElementById("checkin");
let checkout = document.getElementById("checkout");
let guest = document.getElementById("guest");
let room = document.getElementById("room");
let booknow = document.getElementById("booknow");
let datasaving = document.getElementById("datasaving");
let bookingform = document.querySelector(".bookingform");
let closebtn = document.querySelector(".closebtn");
datasaving.style.display = "none";
closebtn.addEventListener("click",()=>{
    bookingform.style.display = "block";
    datasaving.style.display = "none";
})

booknow.addEventListener("click",()=>{
    let newdiv = document.createElement("div");
    datasaving.appendChild(newdiv);
    bookingform.style.display = "none";
    datasaving.style.display = "block";
    newdiv.classList.add("newdivcss");

    // checkin
    let newtaginputcheckin = document.createElement("input");
    newdiv.appendChild(newtaginputcheckin);
    newtaginputcheckin.value = checkin.value;
    newtaginputcheckin.setAttribute("readonly","readonly"); 
    newtaginputcheckin.setAttribute("type","date"); 
    newtaginputcheckin.classList.add("inputtag");

    // checkout
    let newtaginputcheckout = document.createElement("input");
    newdiv.appendChild(newtaginputcheckout);
    newtaginputcheckout.value = checkout.value;
    newtaginputcheckout.setAttribute("readonly","readonly"); 
    newtaginputcheckout.setAttribute("type","date"); 
    newtaginputcheckout .classList.add("inputtag");

    // guest
    if(guest.value == "1 Guest"){

        var newtaginputguest = document.createElement("select");
        let newtaginputguestoption1 = document.createElement("option");
        newtaginputguestoption1.innerHTML= "1 Guest"
        newtaginputguest.appendChild(newtaginputguestoption1);
        let newtaginputguestoption2 = document.createElement("option");
        newtaginputguestoption2.innerHTML= "2 Guest"
        newtaginputguest.appendChild(newtaginputguestoption2);
        let newtaginputguestoption3 = document.createElement("option");
        newtaginputguestoption3.innerHTML= "3 Guest"
        newtaginputguest.appendChild(newtaginputguestoption3);
        let newtaginputguestoption4 = document.createElement("option");
        newtaginputguestoption4.innerHTML= "4 Guest"
        newtaginputguest.appendChild(newtaginputguestoption4);
        let newtaginputguestoption5 = document.createElement("option");
        newtaginputguestoption5.innerHTML= "5 Guest"
        newtaginputguest.appendChild(newtaginputguestoption5);
        newdiv.appendChild(newtaginputguest);
        newtaginputguest.classList.add("inputtag");
        newtaginputguest.setAttribute("disabled","disabled"); 

    }else if(guest.value == "2 Guest"){
        var newtaginputguest = document.createElement("select");
        let newtaginputguestoption2 = document.createElement("option");
        newtaginputguestoption2.innerHTML= "2 Guest"
        newtaginputguest.appendChild(newtaginputguestoption2);
        let newtaginputguestoption1 = document.createElement("option");
        newtaginputguestoption1.innerHTML= "1 Guest"
        newtaginputguest.appendChild(newtaginputguestoption1);
        let newtaginputguestoption3 = document.createElement("option");
        newtaginputguestoption3.innerHTML= "3 Guest"
        newtaginputguest.appendChild(newtaginputguestoption3);
        let newtaginputguestoption4 = document.createElement("option");
        newtaginputguestoption4.innerHTML= "4 Guest"
        newtaginputguest.appendChild(newtaginputguestoption4);
        let newtaginputguestoption5 = document.createElement("option");
        newtaginputguestoption5.innerHTML= "5 Guest"
        newtaginputguest.appendChild(newtaginputguestoption5);
        newdiv.appendChild(newtaginputguest);
        newtaginputguest.classList.add("inputtag");
        newtaginputguest.setAttribute("disabled","disabled"); 

    }else if(guest.value == "3 Guest"){
        var newtaginputguest = document.createElement("select");
        let newtaginputguestoption3 = document.createElement("option");
        newtaginputguestoption3.innerHTML= "3 Guest"
        newtaginputguest.appendChild(newtaginputguestoption3);
        let newtaginputguestoption1 = document.createElement("option");
        newtaginputguestoption1.innerHTML= "1 Guest"
        newtaginputguest.appendChild(newtaginputguestoption1);
        let newtaginputguestoption2 = document.createElement("option");
        newtaginputguestoption2.innerHTML= "2 Guest"
        newtaginputguest.appendChild(newtaginputguestoption2);
        let newtaginputguestoption4 = document.createElement("option");
        newtaginputguestoption4.innerHTML= "4 Guest"
        newtaginputguest.appendChild(newtaginputguestoption4);
        let newtaginputguestoption5 = document.createElement("option");
        newtaginputguestoption5.innerHTML= "5 Guest"
        newtaginputguest.appendChild(newtaginputguestoption5);
        newdiv.appendChild(newtaginputguest);
        newtaginputguest.classList.add("inputtag");
        newtaginputguest.setAttribute("disabled","disabled"); 
 
    }else if(guest.value == "4 Guest"){
        var newtaginputguest = document.createElement("select");
        let newtaginputguestoption4 = document.createElement("option");
        newtaginputguestoption4.innerHTML= "4 Guest"
        newtaginputguest.appendChild(newtaginputguestoption4);
        let newtaginputguestoption1 = document.createElement("option");
        newtaginputguestoption1.innerHTML= "1 Guest"
        newtaginputguest.appendChild(newtaginputguestoption1);
        let newtaginputguestoption2 = document.createElement("option");
        newtaginputguestoption2.innerHTML= "2 Guest"
        newtaginputguest.appendChild(newtaginputguestoption2);
        let newtaginputguestoption3 = document.createElement("option");
        newtaginputguestoption3.innerHTML= "3 Guest"
        newtaginputguest.appendChild(newtaginputguestoption3);
        let newtaginputguestoption5 = document.createElement("option");
        newtaginputguestoption5.innerHTML= "5 Guest"
        newtaginputguest.appendChild(newtaginputguestoption5);
        newdiv.appendChild(newtaginputguest);
        newtaginputguest.classList.add("inputtag");
        newtaginputguest.setAttribute("disabled","disabled"); 
 
    }
    else if(guest.value == "5 Guest"){
        var newtaginputguest = document.createElement("select");
        let newtaginputguestoption5 = document.createElement("option");
        newtaginputguestoption5.innerHTML= "5 Guest"
        newtaginputguest.appendChild(newtaginputguestoption5);
        let newtaginputguestoption1 = document.createElement("option");
        newtaginputguestoption1.innerHTML= "1 Guest"
        newtaginputguest.appendChild(newtaginputguestoption1);
        let newtaginputguestoption2 = document.createElement("option");
        newtaginputguestoption2.innerHTML= "2 Guest"
        newtaginputguest.appendChild(newtaginputguestoption2);
        let newtaginputguestoption3 = document.createElement("option");
        newtaginputguestoption3.innerHTML= "3 Guest"
        newtaginputguest.appendChild(newtaginputguestoption3);
        let newtaginputguestoption4 = document.createElement("option");
        newtaginputguestoption4.innerHTML= "4 Guest"
        newtaginputguest.appendChild(newtaginputguestoption4);
        newdiv.appendChild(newtaginputguest);
        newtaginputguest.classList.add("inputtag");
        newtaginputguest.setAttribute("disabled","disabled"); 
    }


    // room
    if (room.value == "1 Room") {
        var newtaginputroom = document.createElement("select");
        let newtaginputroomoption1 = document.createElement("option");
        newtaginputroomoption1.innerHTML= "1 Room"
        newtaginputroom.appendChild(newtaginputroomoption1);
        let newtaginputroomoption2 = document.createElement("option");
        newtaginputroomoption2.innerHTML= "2 Room"
        newtaginputroom.appendChild(newtaginputroomoption2);
        let newtaginputroomoption3 = document.createElement("option");
        newtaginputroomoption3.innerHTML= "3 Room"
        newtaginputroom.appendChild(newtaginputroomoption3);
        let newtaginputroomoption4 = document.createElement("option");
        newtaginputroomoption4.innerHTML= "4 Room"
        newtaginputroom.appendChild(newtaginputroomoption4);
        let newtaginputroomoption5 = document.createElement("option");
        newtaginputroomoption5.innerHTML= "5 Room"
        newtaginputroom.appendChild(newtaginputroomoption5);
        newdiv.appendChild(newtaginputroom);
        newtaginputroom.classList.add("inputtag");
        newtaginputroom.setAttribute("disabled","disabled");
    }else if(room.value == "2 Room"){
        var newtaginputroom = document.createElement("select");
        let newtaginputroomoption2 = document.createElement("option");
        newtaginputroomoption2.innerHTML= "2 Room"
        newtaginputroom.appendChild(newtaginputroomoption2);
        let newtaginputroomoption1 = document.createElement("option");
        newtaginputroomoption1.innerHTML= "1 Room"
        newtaginputroom.appendChild(newtaginputroomoption1);
        let newtaginputroomoption3 = document.createElement("option");
        newtaginputroomoption3.innerHTML= "3 Room"
        newtaginputroom.appendChild(newtaginputroomoption3);
        let newtaginputroomoption4 = document.createElement("option");
        newtaginputroomoption4.innerHTML= "4 Room"
        newtaginputroom.appendChild(newtaginputroomoption4);
        let newtaginputroomoption5 = document.createElement("option");
        newtaginputroomoption5.innerHTML= "5 Room"
        newtaginputroom.appendChild(newtaginputroomoption5);
        newdiv.appendChild(newtaginputroom);
        newtaginputroom.classList.add("inputtag");
        newtaginputroom.setAttribute("disabled","disabled");


    }else if(room.value == "3 Room"){
        var newtaginputroom = document.createElement("select");
        let newtaginputroomoption3 = document.createElement("option");
        newtaginputroomoption3.innerHTML= "3 Room"
        newtaginputroom.appendChild(newtaginputroomoption3);
        let newtaginputroomoption1 = document.createElement("option");
        newtaginputroomoption1.innerHTML= "1 Room"
        newtaginputroom.appendChild(newtaginputroomoption1);
        let newtaginputroomoption2 = document.createElement("option");
        newtaginputroomoption2.innerHTML= "2 Room"
        newtaginputroom.appendChild(newtaginputroomoption2);
        let newtaginputroomoption4 = document.createElement("option");
        newtaginputroomoption4.innerHTML= "4 Room"
        newtaginputroom.appendChild(newtaginputroomoption4);
        let newtaginputroomoption5 = document.createElement("option");
        newtaginputroomoption5.innerHTML= "5 Room"
        newtaginputroom.appendChild(newtaginputroomoption5);
        newdiv.appendChild(newtaginputroom);
        newtaginputroom.classList.add("inputtag");
        newtaginputroom.setAttribute("disabled","disabled");


    }else if(room.value == "4 Room"){
        var newtaginputroom = document.createElement("select");
        let newtaginputroomoption4 = document.createElement("option");
        newtaginputroomoption4.innerHTML= "4 Room"
        newtaginputroom.appendChild(newtaginputroomoption4);
        let newtaginputroomoption1 = document.createElement("option");
        newtaginputroomoption1.innerHTML= "1 Room"
        newtaginputroom.appendChild(newtaginputroomoption1);
        let newtaginputroomoption2 = document.createElement("option");
        newtaginputroomoption2.innerHTML= "2 Room"
        newtaginputroom.appendChild(newtaginputroomoption2);
        let newtaginputroomoption3 = document.createElement("option");
        newtaginputroomoption3.innerHTML= "3 Room"
        newtaginputroom.appendChild(newtaginputroomoption3);
        let newtaginputroomoption5 = document.createElement("option");
        newtaginputroomoption5.innerHTML= "5 Room"
        newtaginputroom.appendChild(newtaginputroomoption5);
        newdiv.appendChild(newtaginputroom);
        newtaginputroom.classList.add("inputtag");
        newtaginputroom.setAttribute("disabled","disabled");


    }else if(room.value == "5 Room"){
        var newtaginputroom = document.createElement("select");
        let newtaginputroomoption5 = document.createElement("option");
        newtaginputroomoption5.innerHTML= "5 Room"
        newtaginputroom.appendChild(newtaginputroomoption5);
        let newtaginputroomoption1 = document.createElement("option");
        newtaginputroomoption1.innerHTML= "1 Room"
        newtaginputroom.appendChild(newtaginputroomoption1);
        let newtaginputroomoption2 = document.createElement("option");
        newtaginputroomoption2.innerHTML= "2 Room"
        newtaginputroom.appendChild(newtaginputroomoption2);
        let newtaginputroomoption3 = document.createElement("option");
        newtaginputroomoption3.innerHTML= "3 Room"
        newtaginputroom.appendChild(newtaginputroomoption3);
        let newtaginputroomoption4 = document.createElement("option");
        newtaginputroomoption4.innerHTML= "4 Room"
        newtaginputroom.appendChild(newtaginputroomoption4);
        newdiv.appendChild(newtaginputroom);
        newtaginputroom.classList.add("inputtag");
        newtaginputroom.setAttribute("disabled","disabled");


    }


    // editbutton
    let editbtn = document.createElement("button");
    editbtn.innerHTML = "EDIT";
    newdiv.appendChild(editbtn);
    editbtn.classList.add("editbutton");
    editbtn.addEventListener("click",()=>{
        newtaginputcheckin.removeAttribute("readonly","readonly"); 
        newtaginputcheckout.removeAttribute("readonly","readonly"); 
        newtaginputguest.removeAttribute("disabled","disabled");
        newtaginputroom.removeAttribute("disabled","disabled"); 
        
    })

    // updatebutton
    let updatebtn = document.createElement("button");
    updatebtn.innerHTML = "UPDATE";
    newdiv.appendChild(updatebtn);
    updatebtn.classList.add("updatebutton");
    updatebtn.addEventListener("click",()=>{
        newtaginputcheckin.setAttribute("readonly","readonly"); 
        newtaginputcheckout.setAttribute("readonly","readonly"); 
        newtaginputguest.setAttribute("disabled","disabled"); 
        newtaginputroom.setAttribute("disabled","disabled"); 
         
    })

    // deletebutton
    let deletebtn = document.createElement("button");
    deletebtn.innerHTML = "DELETE";
    newdiv.appendChild(deletebtn);
    deletebtn.classList.add("deletebutton");
    deletebtn.addEventListener("click",()=>{
        newdiv.style.display = "none";
    })

})


// COUNTDOWN TIMER


let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(() => {
    let offerend = new Date('december 13 2024 00:00:00');
let offerstart = new Date();
let differnce = offerend - offerstart;
let d = Math.floor(differnce / 1000/60/60/24);
let h = Math.floor((differnce / 1000/60/60)%24);
let m = Math.floor((differnce / 1000/60)%60);
let s = Math.floor((differnce / 1000)%60);
days.innerHTML = d<10 ?"0"+d : d;
hours.innerHTML = h<10 ?"0"+h : h;
minutes.innerHTML = m<10 ?"0"+m : m;
seconds.innerHTML = s<10 ?"0"+s : s;
}, 1000);


// API

const accesskey = "hAaQ1hNCsn-hDee3D0PObwKzrZb3YoH07qg60vg4E0s";

const formbox = document.querySelector("form")
const inputbox = document.querySelector(".searchbox")
const searchresults = document.querySelector(".search-results")
const showmore = document.getElementById("showmorebtn")

let inputdata = "";
let page = 1;

async function searchimages(){
    inputdata = inputbox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}` ;
    
    const response = await fetch(url);
    const data = await response.json();
    
    const results = data.results;

    if(page === 1){
        searchresults.innerHTML = "";
    }

    results.map((result) => {
        const imagewrapper = document.createElement("div");
        imagewrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.textContent = result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imagelink);
        searchresults.appendChild(imagewrapper);
    });

    page++;
    if(page>1){
        showmore.style.display = "block";
    }
}

formbox.addEventListener("submit",(event)=>{
    event.preventDefault();
    page = 1;
    searchimages();
});

showmore.addEventListener("click",()=>{
    searchimages();
});


// EMAILJS

let sendbtn = document.getElementById("sendbtn");
sendbtn.addEventListener("click",()=>{
    emailjs.send("service_4i7q0hr","template_xex30wn",{
        from_name: document.getElementById("from_name").value,
        phone_number: document.getElementById("phone_number").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }).then(()=>{
        alert("Email sent successfully");
    })
});
