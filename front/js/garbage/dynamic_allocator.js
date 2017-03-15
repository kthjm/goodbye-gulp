module.exports = function(e){

    if(e.type == "click" && e.target.id == "real1"){

        listener_real1();

    }

    if(e.type == "mouseover" && e.target.getAttribute("class") == "real2"){

        listener_real2();

    }

    if(e.type == "resize"){

        listener_resize();

    }

    if(e.type == "keydown" && e.keyCode == 74){

        listener_keydown();

    }

};

const listener_real1 = () => {

    console.log("you are real_1");

}

const listener_real2 = () => {

    console.log("you are real_2");

}

const listener_resize = () => {

    console.log("you resize.");

}

const listener_keydown = () => {

    console.log("you keydown \"j\".");

}
