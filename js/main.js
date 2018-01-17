var x = [0,10,30,40,50];
var y = [0,0,0,0,0];
var dx = [10, 12, 14, 16, 18];
var dy = [16, 18, 20, 22, 23];
var borderX = [];
var borderY = [];
var borderColor = [];
var borderSize = [];
var border = 0;
var ctx;
var color;

var colorText = "#ACB0BD";
var colorEducation = "#F06449";
var colorTechnical = "#2AB7CA";
var colorProjects = "#EAC435";
var colorHonors = "#995DAD";
var colorMore = "#86CD82";

function init() {
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    return setInterval(draw, 30);
}

function draw() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.fillStyle = 'lightgray';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();

        for (i = 0; i < border; i++) {
            ctx.fillStyle = borderColor[i];
            ctx.arc(borderX[i], borderY[i], 0, 0, Math.PI*2, true); 
        }


        for (i = 0; i < 1; i++) {
            if(amountscrolled() <= 14.285){
                ctx.fillStyle = colorText;
            }
            else if(amountscrolled() > 14.285 && amountscrolled() <= 28.570){
                ctx.fillStyle = colorEducation;
            }
            else if(amountscrolled() > 28.570 && amountscrolled() <= 42.855){
                ctx.fillStyle = colorTechnical;
            }
            else if(amountscrolled() > 42.855 && amountscrolled() <= 57.680){
                ctx.fillStyle = colorProjects;
            }
            else if(amountscrolled() > 57.680 && amountscrolled() <= 71.965){
                ctx.fillStyle = colorHonors;
            }
            else if(amountscrolled() > 71.965 && amountscrolled() <= 86.250){
                ctx.fillStyle = colorMore;
            }
            else if(amountscrolled() > 86.250 && amountscrolled() <= 100){
                ctx.fillStyle = colorText;
            }


            ctx.arc(x[i], y[i], 20, 0, Math.PI*2, true); 
            ctx.closePath();
            ctx.fill();
            if (x[i] + dx[i] > window.innerWidth || x[i] + dx[i] < 0){
                dx[i] = -dx[i] + 3;
                borderX[border] = x[i];
                borderY[border] = y[i];
                borderColor[border] = ctx.fillStyle;
                borderSize[border] = Math.floor((Math.random() * 40) + 15);
                border++;
                ctx.fill();
            }
            if (y[i] + dy[i] > window.innerHeight || y[i] + dy[i] < 0){
                dy[i] = -dy[i] + 3;
                borderX[border] = x[i];
                borderY[border] = y[i];
                borderColor[border] = ctx.fillStyle;
                borderSize[border] = Math.floor((Math.random() * 40) + 15);
                border++;
                ctx.fill();
            }
            x[i] += dx[i] - 4;
            y[i] += dy[i] - 4;
        }
}

window.onload = function() {
    ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    init();

    AOS.init({
        duration: 3000,
    })

    window.sr = ScrollReveal({ reset: true, viewFactor: 0.8 });
    sr.reveal('.container', { duration: 1000 });
    sr.reveal('.container-header', { duration: 1000 });
}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

function amountscrolled(){
	var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
	var docheight = getDocHeight()
	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
	var trackLength = docheight - winheight
	var pctScrolled = Math.floor(scrollTop/trackLength * 100)
	return pctScrolled;
}

window.addEventListener("scroll", function(){
	amountscrolled()
}, false);

var a = 0;
$(window).scroll(function() {
    var oTop = $('#honors').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
          
              duration: 5000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
          
            });  
        });
      a = 1;
    }
  
  });

  $(window).on('scroll' , function(){
    scroll_pos = $(window).scrollTop() + $(window).height();
    element_pos = $('#more').offset().top + $('#more').height() ;
    if (scroll_pos > element_pos) {
        $('#circle-sp').addClass('circle-animation');
        $('#circle-2-sp').addClass('circle-2-animation');
        $('#circle-3-sp').addClass('circle-3-animation');
        $('#circle-4-sp').addClass('circle-4-animation');
        $('#circle-5-sp').addClass('circle-5-animation');
        $('#circle-en').addClass('circle-animation');
        $('#circle-2-en').addClass('circle-2-animation');
        $('#circle-3-en').addClass('circle-3-animation');
        $('#circle-4-en').addClass('circle-4-animation');
        $('#circle-5-en').addClass('circle-5-animation');
        $('#text-en').addClass('text-subtitle-animation');
        $('#text-sp').addClass('text-subtitle-animation');
        $('#ss-1').addClass('softskill-1');
        $('#ss-2').addClass('softskill-1');
        $('#ss-3').addClass('softskill-1');
        $('#ss-4').addClass('softskill-1');
    };
})

$(window).on('scroll' , function(){
    scroll_pos = $(window).scrollTop() + $(window).height();
    element_pos = $('#education').offset().top + $('#education').height() ;
    if (scroll_pos > element_pos) {
        $('#percentage').addClass('animate');
    };
})

$(window).on('scroll' , function(){
    scroll_pos = $(window).scrollTop() + $(window).height();
    element_pos = $('#contact').offset().top + $('#contact').height() ;
    if (scroll_pos > element_pos) {
        $('#Layer_1').attr("visibility", "visible");
        $('#path-1').addClass('path');
        $('#path-2').addClass('path');
        $('#path-3').addClass('path');
        $('#path-4').addClass('path');
        console.log($('#contact').html());
    };
})