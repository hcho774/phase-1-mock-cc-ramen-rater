// write your code here

//get data from server(db.json) and 
fetch("http://localhost:3000/ramens")
.then(function(res){
    return res.json();
}) ////use that data to put images in DOM
.then(function(ramens) {
    //grab ramen menu div tag with #ramen-menu
    let ramenMenu = document.getElementById("ramen-menu");
   
    //create img elements to post imgs 
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let img5 = document.createElement("img");
    
    //set src attribute on img tags
    img1.src = `${ramens[0].image}`;
    img2.src = `${ramens[1].image}`;
    img3.src = `${ramens[2].image}`;
    img4.src = `${ramens[3].image}`;
    img5.src = `${ramens[4].image}`;
    //set food name attribut on imgs
    img1.className = "ramen-img"
    img2.className = "ramen-img"
    img3.className = "ramen-img"
    img4.className = "ramen-img"
    img5.className = "ramen-img"

    img1.setAttribute("name",`${ramens[0].name}`)
    img1.setAttribute("name",`${ramens[1].name}`)
    img1.setAttribute("name",`${ramens[2].name}`)
    img1.setAttribute("name",`${ramens[3].name}`)
    img1.setAttribute("name",`${ramens[4].name}`)


    
    
    //append img tags into div tag with #ramen-menu 
    
    ramenMenu.appendChild(img1);
    ramenMenu.appendChild(img2);
    ramenMenu.appendChild(img3);
    ramenMenu.appendChild(img4);
    ramenMenu.appendChild(img5);

    let detailImg = document.getElementsByClassName("detail-img")
    let name = document.getElementsByClassName("name");
    let restau = document.getElementsByClassName("restaurant");
    let ramenImg = document.querySelectorAll(".ramen-img")
    
    console.log(ramenImg)
    for(let i = 0; i < ramenImg.length; i++) {
        ramenImg[i].addEventListener("click", function(e){
            if(e.target.name === "Kojiro Red") {
                detailImg.src = `${ramens[4].image}`;
                name.textContent = `${ramens[4].name}`
                restau.textContent = `${ramens[4].restaurant}`
            }
        })
    }
    //})  
    
})


let form = document.getElementById("new-ramen");

form.addEventListener("sumbit", function(e){
 
    
})




 //grab all img tags in div #ramen-menu

//add eventlistener to imgs using for loop and see all info about that ramen
