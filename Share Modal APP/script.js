const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const overlay1 = document.querySelector(".overlay1");
const overlay2 = document.querySelector(".overlay2");

//   Modal open function
let flag = false;
const openModal1 = () => {
 if(flag == false){
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay1.classList.add("overlayactive");
    flag = true;
 }
};

const openModal2=()=>{
    if(flag == false){
     console.log("Modal2 is open");
     modal2.classList.add("active");
     overlay2.classList.add("overlayactive");
     flag = true;
    }
}

//Modal1 close function
const closeModal1 = ()=>{
    if(flag == true){
        console.log("Modal is close");
        modal.classList.remove("active");
        overlay1.classList.remove("overlayactive");
        flag = false;
    }
}


//Modal2 close function
const closeModal2=()=>{
    if(flag == true){
       console.log("Modal2 is close");
       modal2.classList.remove("active");
       overlay2.classList.remove("overlayactive");
        flag = false;
    }
}