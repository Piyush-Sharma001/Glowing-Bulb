  // Bulb off Function
        function bulboff() {
            let imagetag = document.querySelector(".off");
            imagetag.setAttribute("src", "/Mini Projects/Glowing Bulb/off.jpg");
            // document.body.style.backgroundColor = "Black";


        }
        // Bulb on Function
        function bulbon() {
            let imagetag = document.querySelector(".off");
            imagetag.setAttribute("src", "/Mini Projects/Glowing Bulb/on.jpg");
            // document.body.style.backgroundColor = "white";
            // let bg = document.getElementsByClassName("off")[0]
            // bg.style.backgroundColor = "white";
        }
        let intervalId;
        let isOn = false;

        function dipper() {
            let imagetag = document.querySelector(".off");

            // If interval is already running, clear it to stop blinking
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
                return;
            }

            intervalId = setInterval(() => {
                if (isOn) {
                    imagetag.setAttribute("src", "/Mini Projects/Glowing Bulb/off.jpg");
                } else {
                    imagetag.setAttribute("src", "/Mini Projects/Glowing Bulb/on.jpg");
                }
                isOn = !isOn;
            },500);
        }