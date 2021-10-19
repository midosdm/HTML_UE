function showDetails(id) {

    //---------------- PREVIOUS CODE ------------
    // var dots= document.getElementById("dots")
    // var moreText = document.getElementById("details");
    // var moreText2 = document.getElementById("details-2");
    //  var btnText = document.getElementsByClassName("read-more-btn");
    
    // if(dots.style.display === "none" ){
    //     dots.style.display="inline";
    //     btnText.innerHTML="+";
    //     moreText.style.display="none";
    // }
    // else {
    //     dots.style.display="none";
    //     btnText.innerHTML = "-";
    //     moreText.style.display = "inline";
    // }

    //------------- NEW IMPROVED CODE ------------

    document.querySelectorAll(".accordion").forEach(function (div) {
        if(/*div.style.display == "none" &&*/ div.id == id){

            // ------------ Previous solutin - Not 100% functional -----------
            // $(div).fadeIn("slow", function() {
            //     div.style.display = "inline";
            // })
            // setTimeout(function () {
            //     fadeInOut(div);
            // }, 500);

            //------------- New functional solution using jquery -------------
            setTimeout(function () {
                fadeInOut(div);
                div.classList.add("is-visible");
                
            },500)
            
            
        } else {
             div.classList.remove("is-visible");
            $(this).fadeOut();
             div.style.display="none";
             
        }
    });

    console.log(id);

}


 function fadeInOut(element) {
     $(element).fadeIn("slow", function() {

     })
 }
