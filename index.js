let BoxModel=document.querySelector(".BoxForm")
        let Cross=document.querySelector(".BoxForm .r1 h2")
        let btn=document.querySelector(".headerMid>ul>li>.btn1")
        let btn1=document.querySelector(".Demo>ul>li>.btn1")
        

         btn1.addEventListener("click",() => {
            BoxModel.style.top="50%";
        })

      

        btn.addEventListener("click",() => {
            BoxModel.style.top="50%";
        })

        Cross.addEventListener("click",(e) => {
            BoxModel.style.top="-100%";
           
        })


        // -------------------------------toggle----------
    
         
         
         let DarkMode=document.querySelector("header .Toggle")

          let all = document.querySelectorAll("*");
         
          DarkMode.addEventListener("click",()=>{
             all.forEach(el => {
               el.classList.toggle("DarkMode")
             
           });
          })
            
          



        // -------------------------------toggle----------


//  inspect logic

const body=document.querySelector('body')

body.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    // alert("Right click disabled Janab 🚫😍😍😂")
})


//  ---------------------------Landmarks faq--------------


let allqueston=document.querySelectorAll(".Content1 h2");
        allqueston.forEach((question,index) =>{

            
        question.addEventListener("click",()=>{

            allqueston.forEach((q,i)=>{
                if(index!=i)
            {
                q.nextElementSibling.classList.remove("showAns")
                q.lastElementChild.innerHTML = "+";
            }
            })

          if(question.lastElementChild.innerHTML=="+")
          {
            question.lastElementChild.innerHTML="-";
          }
          else{
            question.lastElementChild.innerHTML="+";
          }

          question.nextElementSibling.classList.toggle("showAns");

          })
        })


        // -----------------------------for FAQ----------------------------

        let allqueston1=document.querySelectorAll(".FaqItem h3");
        allqueston1.forEach((question,index) =>{

            
          question.addEventListener("click",()=>{

            allqueston1.forEach((q,i)=>{
                if(index!=i)
            {
                q.nextElementSibling.classList.remove("showAns")
                q.lastElementChild.innerHTML = "+";
            }
            })

          if(question.lastElementChild.innerHTML=="+")
          {
            question.lastElementChild.innerHTML="-";
          }
          else{
            question.lastElementChild.innerHTML="+";
          }

          question.nextElementSibling.classList.toggle("showAns");

          })
        })




        // ----------------------------------Gallery Zoom pic

         let maingallery = document.querySelector(".Gallery");
        let overlayElement = document.querySelector(".Overlay");
        let picElement = document.querySelector(".ZoomImg");
        let Source = document.querySelector(".ZoomImg img");
        let crossbtn = document.querySelector(".ZoomImg span");


        maingallery.addEventListener("click", (event) => {
            if (event.target.src) {
                let Currentsrc = event.target.src;
                console.log(Source.src=Currentsrc);
                overlayElement.classList.add('ShowOverlay')
                picElement.classList.add('ShowPicture')
            }
        });

        crossbtn.addEventListener("click", () => {
            overlayElement.classList.remove('ShowOverlay')
            picElement.classList.remove('ShowPicture')
        })



        // --------------------------------------------Slider logic 

        let Slider=document.querySelector(".bars .fa-bars");
        let box=document.querySelector(".Demo");
        let content=document.querySelectorAll(".Demo ul li")
        // console.log(content);
        

        Slider.addEventListener("click",()=>{
              box.classList.toggle("ShowDemo");
              Slider.classList.toggle("fa-bars")
              Slider.classList.toggle("fa-xmark")
            
        })
            content.forEach(()=>{
             box.addEventListener("click",()=>{
               box.classList.toggle("ShowDemo");
               Slider.classList.toggle("fa-bars")
               Slider.classList.toggle("fa-xmark")
             })
            })
             
        

        


        