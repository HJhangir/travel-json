const productsDiv = document.getElementById("regions")


window.onload = getAllProducts

async function getAllProducts(){

    const unvan = '../assets/travel.json'

    try{
        const komputerinAnlamadigiData = await fetch(unvan)

        //'[]'

        const komputerinAnladigiData = await komputerinAnlamadigiData.json()

    for (let i=0; i<komputerinAnladigiData.length; i++){
        
        productsDiv.innerHTML +=`

        <div class="quba_shamaxi">
            <div class = "quba" id = "quba">
            <img src="${komputerinAnladigiData[i].quba_img }" width="304px" height =150px" >
            <h1> ${komputerinAnladigiData[i].title} </h1>
            <p> ${komputerinAnladigiData[i].body} </p>
            </div>

            <div class = "shamaxi" id = "shamaxi">      
            <img src="${komputerinAnladigiData[i].shamaxi_img }" width="304px" height =150px" >
            <h1> ${komputerinAnladigiData[i].shamaxi_title} </h1>
            <p> ${komputerinAnladigiData[i].shamaxi_body} </p>
            </div>

            <div class= "qax">
            <img src="${komputerinAnladigiData[i].qax_img }" width="304px" height =150px" >
            <h1> ${komputerinAnladigiData[i].qax_title} </h1>
            <p> ${komputerinAnladigiData[i].qax_body} </p>
            </div>
        </div>


        <div class= "lenkaran_oguz">

            <div class = "lenkaran" >
            <img src="${komputerinAnladigiData[i].lenkaran_img }" width="304px" height =150px" >
            <h1> ${komputerinAnladigiData[i].lenkaran_title} </h1>
            <p> ${komputerinAnladigiData[i].lenkaran_body} </p>
            </div>

            <div class= "oguz">
            <img src="${komputerinAnladigiData[i].oguz_img }" width="304px" height =150px" >
            <h1> ${komputerinAnladigiData[i].oguz_title} </h1>
            <p> ${komputerinAnladigiData[i].oguz_body} </p>
            </div>

            <div class= "gence">
            <img src="${komputerinAnladigiData[i].gence_img }" width="304px" height =150px" >
            <h1> ${komputerinAnladigiData[i].gence_title} </h1>
            <p> ${komputerinAnladigiData[i].gence_body} </p>
            </div>
        </div>



        

        `   
    }


    

    }

    

    catch(e) {
        console.log("xeta firlandildi:" + e);
    }


}