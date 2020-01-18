    // $("li").on("click", function(){
    //we can only add a listener in jQuery when the elements that exist when we first add the code
$("ul").on("click", "li", function(){ //in future if we add new 'li's through js, it wouldn't bother us cause we're taking the whole ul first 
    //to turn the checked item grey & linethrough
    $(this).toggleClass("completed");
});

//click on x to delete all spans
$("ul").on("click", "span", function(event){
    //make the list fade out
    $(this).parent().fadeOut(500, function(){
        //remove from the html after fading out
        $(this).remove();
    });
    event.stopPropagation();
});

//take the input
$("input[type='text']").on("keypress", function(event){
if(event.which ==13){
    //grab the new todo  entered
   var newTodo = $(this).val();
   $(this).val("");
   //create a new li and add this todo
   $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ newTodo + "</li>");
}
});

$(".fa-plus").on("click", function(){
$("input").fadeToggle();
});

