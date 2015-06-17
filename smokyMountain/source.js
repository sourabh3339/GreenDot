(function() {
    console.log("it is loaded");
  
    var j = 0.1;
    var i = 1;
    var k = 1;
    var slider = {
        name: "mytext",
        imageDiv: document.getElementsByClassName("image-height"),
        posterChange: function() {
            if (this.imageDiv == undefined) {
                this.imageDiv = document.getElementsByClassName("image-height");
            }
            switch (i % 4) {
                case 1:
                    console.log(this);
                    this.imageDiv[1].src = "resource/Hex_Slide_1.jpg";
                    break;
                case 2:
                    console.log(this);
                    this.imageDiv[1].src = "resource/Hex_Slide_2.jpg";
                    break;
                case 3:
                    console.log(this);
                    this.imageDiv[1].src = "resource/Hex_Slide_3.jpg";
                    break;
            }
            i++;

        },

        createPosterImage: function() {

            parentDiv = document.getElementById('scrollingImg');
            this.img1 = document.createElement('img');
            this.img2 = document.createElement('img');

            this.img1.style.position = 'relative';
            this.img2.style.position = 'relative';

            this.img1.style.top = '-421px';
            this.img2.style.top = '-841px';
            this.img1.style.zIndex = '1';
            this.img2.style.zIndex = '2';

            this.img1.src = "resource/Hex_Slide_2.jpg";
            this.img2.src = "resource/Hex_Slide_3.jpg";

            this.img1.classList.add("image-height");
            this.img2.classList.add("image-height");

            parentDiv.appendChild(this.img1);
            parentDiv.appendChild(this.img2);

        },
        changeOpacity: function() {
            j = j + 0.01;
            console.log(j);
            switch (k) {
                case 1:
                    this.img2.style.opacity = 0;
                    parentDiv.children[0].style.opacity = 0;
                    this.img1.style.opacity = j;
                    if (j > 1) {
                        j = 0;
                        k = 2;
                    }
                    break;
                case 2:
                    this.img1.style.opacity = 0;
                    parentDiv.children[0].style.opacity = 0;
                    this.img2.style.opacity = j;
                    if (j > 1) {
                        j = 0;
                        k = 3;
                    }
                    break;
                case 3:
                    this.img2.style.opacity = 0;
                    this.img1.style.opacity = 0;
                    parentDiv.children[0].style.opacity = j;
                    if (j > 1) {
                        j = 0;
                        k = 1;
                    }
                    break;
            }

        },
       

    };

    slider.createPosterImage();
    // slider.changeOpacity();
    setInterval(slider.changeOpacity.bind(slider), 50);
    //setInterval(slider.posterChange.bind(slider), 1000);//binded with slider otherwise run in windows context

    /*changePoster through visibility*/




    /*var i=0;
    var im=document.getElementById('scrollingImg');
    im.style.position='relative'
    var del=function(){
    im.style.left=i+"px";
    i++;
    if(i=="1440"){
        i=0;
    }
    }
    setInterval(del,1);
    */
}());
