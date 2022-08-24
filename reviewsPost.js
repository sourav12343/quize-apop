
function postComment(data){
    const html='<div class="postedReviews"><p>'+data.content+'</p><h4>'+data.name+'</h4></div>';
    $('#container').prepend(html);
}
     

const commentAll=[
    {"name":"Ankita Bagale", "content": "This is comment 1"},
    {"name":"Atharva Bagale", "content": "This is comment 2"}
    ];
for(let i=0; i<commentAll.length;i++){
   postComment(commentAll[i]);  
    }


   function checkFields(){
                //checking the fields are filled or not
                    const name=document.querySelector('input[id="name"]');
                    const comment=document.querySelector('textarea[id="comment"]')
                    const message=document.querySelectorAll(".errorMessage");
                    const element=document.querySelector(".postedReviews");
                
                    name.addEventListener('invalid', function(event){
                        if(event.target.validity.valueMissing){
                        event.preventDefault();
                        //will display the error message if Name field is not filled
                        message[0].style.display="block";
                        }
                    })
                    name.addEventListener('change', function(event) {
                        event.preventDefault();
                        //will hide the error message if Name field is filled
                        message[0].style.display="none";
                    })
                    
                    comment.addEventListener('invalid', function(event){
                        if(event.target.validity.valueMissing){
                        event.preventDefault();
                        //will display the error message if Comment field is not filled
                        message[1].style.display="block";
                        }
                    })
                    comment.addEventListener('change', function (event) {
                        event.preventDefault();
                        //will hide the error message if Comment field is filled
                        message[1].style.display="none";
                    })

                    if(name.value && comment.value){
                        const addObj={ "name": name.value, "content": comment.value};
                        commentAll.push(addObj);
                        postComment(addObj);
                    }
                                
                }

