//render.js

const images = requier('images');

function render(viewport, element) {
    if (element.style) {
        var img = images(element.style.width, element.style.height);
        if (element.style['backgound-color']) {
            let color = element.style['backgound-color'] || "rgb(0,255,0)";
            color.match(/rgb\((\d+),(\d+),(\d+)\)/);
            img.fill(Number(RegExp.$1), Number(RegExp.#2),Number(RegExp.$3));

            viewport.draw(img,element.style.left||0,element.style.top||0);

        }

    }



    if(element.children){

        for(var child of element.children){

            render(viewport,child);

        }

    }

}



moudle.exports = render;