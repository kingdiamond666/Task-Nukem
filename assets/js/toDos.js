//Check off Specfic Todos By Clicking
$('ul').on("click", "li",function(){
    $(this).toggleClass('completed');
    finished.play(); 
});
//Click on X to delete Todo
$('ul').on("click", "span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
        added.play();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
    var toDoText = $(this).val();
    //create a new li and add to ul
    $('ul').append(`<li><span>X</span> ${toDoText}</li>`);
    addNew.play();   
    }
})
var addNew = new Audio(" assets/audio/350876__cabled-mess__coin-c-09.wav")
var added = new Audio(" assets/audio/381689__stumpbutt__retro-jump-sfx.wav")
var finished = new Audio(" assets/audio/400579__alanmcki__retro-arcade-video-game-positive-tone.wav")
var txt = "Add Your Todo";
var timeOut;
var txtLen = txt.length;
var char = 0;
//type out the placeholder
$('.fillItIn').attr('placeholder', '|');
(function typeIt() {
    var humanize = Math.round(Math.random() * (200 - 30)) + 30;
    timeOut = setTimeout(function () {
        char++;
        var type = txt.substring(0, char);
        $('.fillItIn').attr('placeholder', type + '|');
        typeIt();

        if (char == txtLen) {
            $('.fillItIn').attr('placeholder', $('.fillItIn').attr('placeholder').slice(0, -1)) // remove the '|'
            clearTimeout(timeOut);
        }

    }, humanize);
}());