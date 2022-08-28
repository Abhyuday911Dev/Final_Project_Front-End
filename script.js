function textsplitter() {
    document.querySelectorAll("#s1text h1").forEach(function (text) {
        textclutter = "";

        // console.log(text.textContent.split(""))
        // textclutter += <span></span>

        text.textContent.split("").forEach(function (letter) {
            textclutter += `<span>${letter}</span>`
        })
        text.innerHTML = textclutter
    })
}

function slide1() {
    var s1tl = gsap.timeline()

    s1tl
        .from("#navleft,#navright", {
            y: 15,
            opacity: 0,
            duration: 1.7
        })
        .from("#navcenter", {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: "-0.7"
        })
        .from("#s1center", {
            y: 70,
            opacity: 0,
            duration: 1.3,
            delay: "-0.3",
            ease: "power1.out",
        }, "a")
        .from("#s1text h1 span", {
            opacity: 0,
            duration: 1.5,
            filter: "blur(2px)",
            stagger: 0.1,
            scale: 1.7,
            color: "red",
        }, "a")
        .from("#scomp", {
            opacity: 0,
            y: 20,
            duration: 2,
            delay: "-1.5",
            ease: "power1.out",
        })
        .from("#bordercircle", {
            opacity: .1,
            duration: 1,
            scale: 1.3,
            ease: "power1.out",
        }, "-=2")
}

function slide2() {
    var s2tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#slide2",
            // markers: true,
            end: "100% 20%",
            scrub: 2,
        }
    });
    s2tl
        .to("#photoseries", {
            x: "-30%",
            ease: Circ,
        }, "c")
    // .from("#horitext h1", {
    //     x: "-40%",
    //     ease: Circ
    // }, "c")

}

function slide3() {
    document.querySelectorAll(".stripe").forEach(function (zets) {
        zets.addEventListener("click", function (jets) {

            if (isNaN(Number(jets.target.id))) {

                var elemt = ".mctext" + jets.target.id.split("e")[1];
                // console.log(elemt)
                // console.log(jets.target.id)
                // console.log(jets.path[1])
                console.log(jets.target)

                gsap.to(jets.path[1], {
                    width: "4vw",
                    ease: Expo.out,
                    duration: 1.5
                })

                gsap.to(jets.target, {
                    opacity: 0,
                    delay: 0.1,
                    ease: Expo.out,
                })
                var tl = gsap.timeline();
                tl
                    .to(elemt, {
                        opacity: 0,
                        delay: 0,
                        ease: Expo.out,
                        scale: .5,
                    })
                    .to(elemt, {
                        scale: 1,
                    })
            }
            else {
                var swidth = 100 - (4 - jets.target.id) * 4 + "%"
                var elemt = ".mctext" + jets.target.id;
                var crosstobeclosed = "#close" + jets.target.id;

                // console.log(jets)
                // console.log(crosstobeclosed)
                // console.log(zets)

                gsap.to(jets.target, {
                    width: swidth,
                    ease: Expo.out,
                    duration: 1
                })
                gsap.to(elemt, {
                    opacity: 1,
                    delay: 0.5,
                    ease: Expo.out,
                    // scale: 1,
                })
                gsap.to(crosstobeclosed, {
                    opacity: 1,
                    delay: 0.5,
                    ease: Expo.out,
                })
            }


        })
    });
}

function slide4() {
    var s4 = document.querySelectorAll("#s4option")

    s4.forEach(function (a) {
        a.addEventListener("mousemove", function (elements) {

            a.lastElementChild.style.opacity = "1"
            a.lastElementChild.style.left = (elements.screenX) * .9 + "px";
            a.lastElementChild.style.transform = `rotate(${elements.screenX * .05}deg) scale(${0.9 + elements.screenX * .001})`

            // console.log(elements.screenX,elements.screenY)
        })

        a.addEventListener("mouseout", function () {
            a.lastElementChild.style.opacity = "0"
        })
    })
    window.addEventListener("mousemove", function (details) {
        console.log(details.screenX)
    })
}

textsplitter()
slide1();
slide2();
slide3();
slide4();