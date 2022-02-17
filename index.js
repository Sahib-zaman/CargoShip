 function clicked(){
     console.log("sahib zaman")

     
     
    let x = document.getElementById("image");

 
    if(x.getAttribute("src") == "slider1.jpg"){
        x.setAttribute("src","vehicle.jpg")
        return;
    }
     
    x.setAttribute("src","slider1.jpg");

}
 
 
  