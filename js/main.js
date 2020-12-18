$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#b1").click(function(){
        $("#p1").css("color", "#ff6200");
    });
});

$(function() {
    var $list, $newItemForm;
    $list = $('ul');
    $newItemForm = $('#newItemForm');
    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        var text = $('input:text').val();
        $list.append('<li class="item" style="background-color:' + text + '" >' + text + '</li>');
        $('input:text').val('');
    });
});

$(document).ready(function(){
    $("#b2").click(function(){
        $("#d1, #d2, #d3, #d4, #d5").animate({
            height: 'toggle'
        });
    });
});

$(document).ready(function(){
    $(".ml2").click(function(){
        $(".ml2").text("Gaetan");
    });
});
$(document).ready(function(){
    (function(){
        var i = 0;
        setInterval(function(){
            $("body").removeClass("bg1, bg2, bg3, bg4 ").addClass("bg"+(i++%4 + 1));
        }, 1000);
    })();
});