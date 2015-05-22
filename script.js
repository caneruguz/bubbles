var colorList = ['#2ecc71', '#1abc9c', '#3498db', '#A66BBE', '#34495e', '#1CB698', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50', '#f1c40f', '#f39c12', '#e67e22', '#EA5D1D', '#e74c3c', '#c0392b', '#ecf0f1', '#bdc3c7', '#95a5a6', '#7f8c8d'];
var actions = ['split', 'color', 'move', 'split'];

function initializeDots() {
    total = 300,
        smallest = 10,
        biggest = 30,
        windowHeight = $(window).height(),
        windowWidth = $(window).width();
    for(var i = 0; i < total; i++){
        var width = Math.floor((Math.random() * biggest) + smallest);
        var radius = width/2;
        var color = colorList[Math.floor((Math.random() * 20))];
        var duration = (Math.random() * 2000) + 500;
        var top = Math.random() * windowHeight-50;
        var left = Math.random() * windowWidth;
        var action = actions[Math.floor(Math.random()*4)];
        var div = $('<div class="bubbles" data-top="' + top + '" data-left="' + left + '"></div>');
        div.css({ width: width + 'px', height: width + 'px', 'border-radius':  radius + 'px', 'background-color' :  color, left : left + 'px', top: (top - 200) + 'px', opacity : 0 })
        div.appendTo('#bubbles');
        div.addClass(action);
        div.velocity({ opacity: 1, top : top + 'px' }, duration);
    }
}

function initializeMove (moveDistance) {
    $('.bubbles').on('mouseover', function(event){
        // Move away
        // get mouse x-y location
        var el = $(this);
        var top = el.attr('data-top');
        var left = el.attr('data-left');
        // get difference between this element x and mouse x and this element y and mouse y
        var diffX = event.pageX - left;
        var diffY = event.pageY - top;
        if((diffX > -moveDistance && diffX < moveDistance) || (diffY > -moveDistance && diffY < moveDistance) ){
            el.css({top: (top-diffY) + 'px' , left : (top-diffX) + 'px' });
        }
    })
    $('bubbles').on('mouseout', function(){
        // move back
        var el = $(this);
        var top = el.attr('data-top');
        var left = el.attr('data-left');
        el.css({ top : top + 'px', left : left + 'px' });
    })
}
$(document).ready(function() {
    initializeDots();
    //$element = $('.bubbles');
    //$element.velocity({ top: 50 }, 1000, "swing");
    initializeMove(20);

});