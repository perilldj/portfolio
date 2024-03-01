import AI from "../assets/ai.png";
import Physics from "../assets/physics.png";
import UNO from "../assets/uno.png";

import { GitHub, PictureAsPdf } from "@mui/icons-material";

const Projects = [
    { 
        imageUrl: AI, 
        altText: 'ailogo', 
        name: 'Zenith: A Deep Learning Library From Scratch', 
        description: "Since the recent boom in the deep learning industry, I have been studying the \
                      underlying mathematics and methods that allow a deep learning model to \
                      learn complicated information through stochastic gradient descent. I have implemented a deep learning \
                      library from scratch where the user can define the shape and size of a classification neural network to \
                      categorize images. I have gotten successful results in image categorization from the MNIST and CIFAR-10 datasets. \
                      The library can be used in python but the library itself is built in C++ for efficiency. Specifically on the MNIST \
                      dataset, I have reached over 98% testing accuracy in recognizing handwritten digits. This has been an ongoing \
                      personal project of mine and I am currently working on implementing a convolutional neural network which is more \
                      oriented towards image classification compared to it's feedforward neural network counterpart.",
        links: [
            { icon: GitHub, link: "https://github.com/perilldj/Zenith"}
        ]
    },
    {
        imageUrl: Physics, 
        altText: 'physics', 
        name: '3D Rigid Body Physics Simulation', 
        description: "For my bachelor's senior capstone project, I decided to program a three dimensional \
                      rigid body physics simulation from scratch. Overall it was a fun project, and while \
                      I wasn't able to implement every aspect of the physics simulation that I would've wanted \
                      I learned a lot about low level three dimensional computer graphics, collision detection \
                      and of course physics simulation concepts. In addition to the source code to the project on \
                      github, I have added a second link which has the capstone report for the project.",
        links: [
            { icon: GitHub, link: "https://github.com/perilldj/CS-498-RigidBodyPhysics"},
            { icon: PictureAsPdf,  link: "https://github.com/perilldj/capstone-report/blob/main/Dean_Perillo_CS_498_Capstone_Report.pdf"}
        ]
    },
    {
        imageUrl: UNO, 
        altText: 'unologo', 
        name: 'Online Networked UNO Game Made in Unity', 
        description: "This project was made for a software engineering course that I took. \
                      I led a team to develop the game online utilizing source control and trello (a task organization website). \
                      The game was developed on Unity over the semester and utilized peer to peer (P2P) networking utilizing a \
                      service known as photon.",
        links: [
            { icon: GitHub, link: "https://github.com/perilldj/CS370-SoftwareEngineering-UNO"}
        ]
    }
];

export default Projects