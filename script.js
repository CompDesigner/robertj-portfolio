function toggleSection(header){
    const section = header.closest('.project-section');
    const allSections = document.querySelectorAll('.project-section'); 
    const expand = section.classList.contains('expanded');

    allSections.forEach(s => s.classList.remove('expanded'));

    if(!expand){
        section.classList.add('expanded');
    }
}

function openLightbox(src){
    const overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    
    const img = document.createElement("img");
    img.src = src;
    img.id = "lightbox-img";

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
        overlay.remove();
    });
}

function toggleGallery(header){
    const section = header.closest('.pro-bot');
    const allSections = document.querySelectorAll('.pro-bot'); 
    const expand = section.classList.contains('expanded');

    allSections.forEach(s => s.classList.remove('expanded'));

    if(!expand){
        section.classList.add('expanded');
    }
}

function getYouTubeId(url) {
    try {
        const u = new URL(url);

        let id = null;

        if (u.hostname.includes("youtu.be")) {
            id = u.pathname.slice(1);
        }

        else if (u.pathname.includes("/shorts/")) {
            id = u.pathname.split("/shorts/")[1];
        }

        else {
            id = u.searchParams.get("v");
        }

        return id ? id.split("&")[0] : null;

    } catch {
        return null;
    }
}

document.addEventListener('click', (e) => {
        if (e.target.matches('.pro-gallery img')) {
            openLightbox(e.target.src);
        }
});

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.project-contentbox');
    if(box){
        const pro_observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
                if (entry.isIntersecting){
                    box.classList.add('visible');
                    pro_observer.unobserve(box);
                }
            });
        });

        pro_observer.observe(box);
    }

    const boxes = document.querySelectorAll(".box");
    const exploreObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else {
                entry.target.classList.remove("show");
            }
        });
    }, {
            threshold: 0.2
        });

    boxes.forEach((box, index) => {
        exploreObserver.observe(box);
        box.style.transitionDelay = `${index * 0.15}s`;
    });

    const socialMenu = document.querySelector(".socials-menu");
    const socialSwitch = document.querySelector(".social-switch");

     if (socialMenu && socialSwitch) {
        socialSwitch.addEventListener("click", () => {
            socialMenu.classList.toggle("active");
        });
    }

    const detail = document.getElementById("ws-info");
    if (!detail) return;

    const workshops = {
        basics: {
            title: "Intro to OpenCV",
            description: "Introduction to computer vision techniques using OpenCV library in Python. In this workshop, we cover image processing basics from blurring to edge detection and changing across color spaces. We also explored face detection using the Haar Cascade classifier.",
            video: ["https://youtu.be/TP0M-h8fc30"],
            gallery: [
                "images/OpenCV-basic/opencv-code.png",
                "images/OpenCV-basic/img-show.png",
                "images/OpenCV-basic/original-pic.png",
                "images/OpenCV-basic/face-detect.png",
                "images/OpenCV-basic/gray.png",
                "images/OpenCV-basic/edges.png",
                "images/OpenCV-basic/hsv.png"
            ]
        },
        rendering: {
            title: "3D Environment Rendering",
            description: "Designing and implementing a computer vision-based 3D environment renderer. I tought about how to use Midas model to generate a depth map from captured frames and the usage of a bilateral filter to smooth the depth map while preserving important features. I also explained that we can create a color map from the smoothed depth map to enhance the visual representation of the 3D environment.",
            video:["https://www.youtube.com/watch?v=5OH4Wbha1p8"],
            gallery: [
                "images/Env-Ren/midas-setup.png",
                "images/Env-Ren/dmap.png",
                "images/Env-Ren/fps-frame.png",
                "images/Env-Ren/depth-detect.png"
            ]
        },
        bioID: {
            title: "Biometric ID",
            description: "Designing a biometric identification system. In this workshop, I covered the usage of mediapipe library to detect and extract facial landmarks from video frames. Then I discussed how we can use these landmarks to generate a unique biometric ID which constantly updates as the person moves or changes expressions. We also explored the CNN models for age and gender prediction based on the facial landmarks. Also, gave another option for extracting age and gender predictions from the facial landmarks with deepface from the DeepFace library.",
            video: ["https://www.youtube.com/watch?v=60ziefHUrSY"],
            gallery: [
                "images/BioID/lm-setup.png",
                "images/BioID/age_gen.png",
                "images/BioID/line-map.png",
                "images/BioID/display-vid.png",
                "images/BioID/full-id.png",
                "images/BioID/bioID_1.png",
                "images/BioID/bioID_2.png"
            ]
        },
        bloodflow: {
            title: "Blood Flow Simulation",
            description: "Designing a blood flow simulation using ANSYS Fluent. In this workshop, I went step-by-step through the process of how to take a 3D designed blood vessel, setup the mesh based off the 3D model, the setup for velocity/pressure as well as vescosity inlet/outlet conditions and running the simulation to visualize the blood flow through the vessel.",
            video: ["https://www.youtube.com/watch?v=myuKM46YQrk&t=22s"],
            gallery: [
                "images/BF-sim/iso.png",
                "images/BF-sim/contour.png",
                "images/BF-sim/lined.png",
                "images/BF-sim/disc.png",
                "images/BF-sim/blood-flow.png",
                "images/BF-sim/iso-flow.png"
            ]
        },
        sensors: {
            title: "Medical Sensors Workshop",
            description: "Interfacing with multiple medical sensors using Arduino IDE and I2C serial communication. We covered the connections to a temperature sensor, pulse oximeter and emg sensor. Also, we discussed the data aquired from each sensor and explained how the data changes based on different conditions.",
            video: ["https://www.youtube.com/watch?v=lkdMZxJhxbQ", "https://youtube.com/shorts/G5erOM2RDTw"],
            gallery: [
                "images/Med-Sens/sensor-setup.png",
                "images/Med-Sens/read-data.png",
                "images/Med-Sens/display-data.png",
                "images/Med-Sens/power.jpg",
                "images/Med-Sens/board-con.jpg",
                "images/Med-Sens/temp-con.jpg",
                "images/Med-Sens/temp-power.jpg",
                "images/Med-Sens/20250321_145635.jpg",
                "images/Med-Sens/20250321_145756.jpg",
                "images/Med-Sens/20250321_150042.jpg",
                "images/Med-Sens/20250321_150048.jpg",
                "images/Med-Sens/20250321_150416.jpg",
                "images/Med-Sens/20250321_150429.jpg",
                "images/Med-Sens/20250321_150817.jpg",
                "images/Med-Sens/20250321_150827.jpg",
                "images/Med-Sens/20250321_151320.jpg",
                "images/Med-Sens/20250321_151331.jpg",
                "images/Med-Sens/20250321_151415.jpg",
                "images/Med-Sens/20250321_151423.jpg"
            ]
        },
        hardware: {
            title: "UART/I2C Communication Workshop",
            description: "Introduction to UART and I2C communication protocols using Arduino IDE. I introduced the concept of utilizing UART for data visualization and I2C for connecting to a ultrasonic sensor as well as an OLed display. I went over the electrical connections from a Arduino Nano to both devices and how to setup the code with the proper port connections.",
            video: ["https://www.youtube.com/watch?v=MtHhf1cd3-I", "https://youtube.com/shorts/eBLoqmvFqLk"],
            gallery: [
                "images/UART_I2C/20260331_151012.jpg",
                "images/UART_I2C/setup-pins.png",
                "images/UART_I2C/show-data.png",
                "images/UART_I2C/loop.png",
                "images/UART_I2C/lcd.png"
            ]
        },
        speaker: {
            title: "Paper Speaker",
            description: "I designed a paper speaker with electrical components.",
            video: ["https://www.youtube.com/shorts/nlNHbyspgJQ"],
            gallery: [
                "images/Paper-Sp/speaker.jpg",
                "images/Paper-Sp/board-setup.jpg"
            ]
        }
    };

    const title = document.getElementById("ws-title");
    const desc = document.getElementById("ws-desc");
    const ws_video = document.getElementById("ws-demo-vid");
    const gallery = document.getElementById("ws-info-gallery");
    const gallerySwitch = document.querySelector(".gallery-switch");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".workshop-slot").forEach(slot => {
        slot.addEventListener("click", () => {
            document.querySelectorAll(".scroll-track").forEach(track => {
                track.style.animationPlayState = "paused";
            });

            const key = slot.dataset.workshop;
            const data = workshops[key];
            if (!data) return;

            title.textContent = data.title;
            desc.textContent = data.description;
            detail.classList.remove("hidden");
           
            ws_video.innerHTML = data.video.map(url => {
                const id = getYouTubeId(url);
                if (!id) return "";

                return `
                    <div class="demo-wrapper">
                        <iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe>
                    </div>
                `;
            }).join("");

            gallery.innerHTML = "";
            data.gallery.forEach(src => {
                const img = document.createElement("img");
                img.src = src;

                img.addEventListener("click", () => {
                    openLightbox(src);
                });

                gallery.appendChild(img);
            });
        
            detail.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    gallerySwitch.addEventListener("click", () => {
        gallery.classList.toggle("collapsed");
        gallery.classList.toggle("expand");
    });

    document.querySelector(".gallery-switch")
    .addEventListener("click", function () {
        this.classList.toggle("activate");
    });

    if (ws_video) {
        const wrapper = ws_video.closest(".demo-wrapper");

        ws_video.addEventListener("play", () => {
            wrapper.classList.add("expand");
        });

        ws_video.addEventListener("pause", () => {
            wrapper.classList.remove("expand");
        });

        ws_video.addEventListener("ended", () => {
            wrapper.classList.remove("expand");
        });
    }

    closeBtn?.addEventListener("click", () => {
        detail.classList.add("hidden");
        ws_video.src = ws_video.src;
        ws_video.closest(".demo-wrapper")?.classList.remove("expand");
        ws_video.src = "";
        document.querySelectorAll(".scroll-track").forEach(track => {
            track.style.animationPlayState = "running";
        });
    });

    document.querySelectorAll(".pro-demo-wrapper").forEach(wrapper => {
        wrapper.addEventListener("click", () => {
            wrapper.classList.toggle("expand");
        });
    });

});