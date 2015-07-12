(function() {
    console.log("it is loaded");

    var j = 0.1;
    var i = 1;
    var k = 1;

    /*add event listeners to left,right arrow*/
    var leftArrow = document.getElementById('leftArrow');
    var rightArrow = document.getElementById('rightArrow');

    leftArrow.addEventListener("click", changePoster, false);
    rightArrow.addEventListener("click", changePoster, false);

    /*function to change poster*/
    function changePoster(evt) {
        /*take name of class from target*/
        var className = evt.target.classList[1];
        console.log("clicked on: " + className);
        switch (className) {
            case "right-side":
                if (k >= 3) { //to avoid overflow check value of k, where index of k depends on number of images
                    k = 1;
                } else {
                    k++
                }

                break;
            default:
                if (k <= 1) { //check for decrementing
                    k = 3;
                } else {
                    k--;
                }
                break;
        }

    };

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

            /*
                        this.img1.style.top = '-210px';
                        this.img2.style.top = '-420px';*/

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
            //console.log(k);
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
    /*function to change position of image in case window is resized*/
    function resized(evt) {
        console.log("resized called");
        if (window.innerWidth < 716) {
            this.img1.style.top = '-210px';
            this.img2.style.top = '-420px';
        } else {
            this.img1.style.top = '-421px';
            this.img2.style.top = '-841px';

        }
    };

    /*adding eventlistner to change position of image*/
    window.addEventListener("load", resized.bind(slider));
    window.addEventListener("resize", resized.bind(slider));

    /*creating poster image*/
    slider.createPosterImage();

    setInterval(slider.changeOpacity.bind(slider), 50);

}());
