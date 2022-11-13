window.onload = function(){
    openDiv()
    openDiv1()
    openDiv2()
    openDiv3()
}

function  openDiv(){
    document.querySelector("#id_pic").addEventListener("click", function(){
        window.open("https://en.wikipedia.org/wiki/Sydney")
    })
}

function  openDiv1(){
    document.querySelector("#id_pic1").addEventListener("click", function(){
        window.open("https://en.wikipedia.org/wiki/Melbourne")
    })
}

function  openDiv2(){
    document.querySelector("#id_pic2").addEventListener("click", function(){
        window.open("https://en.wikipedia.org/wiki/Perth")
    })
}

function  openDiv3(){
    document.querySelector("#id_pic3").addEventListener("click", function(){
        window.open("https://en.wikipedia.org/wiki/Byron_Bay")
    })
}