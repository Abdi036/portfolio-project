// "use strict";
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Personal Portfolio</title>
//     <link rel="stylesheet" href="style.css" />
//   </head>
//   <body>
//     <div class="main_container">
//       <nav class="navbar">
//         <div class="profile_pic">
//           <img src="img-1.jpg" alt="img1" />
//           <h2>My Name</h2>
//         </div>
//         <div class="link_container">
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#aboutme">About me</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#portfolio">Portfolio</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>
//         <div class="socialmedias">
//           <p>Social Media</p>
//         </div>
//       </nav>

//       <!-- Main content -->
//       <main class="main-content">
//         <!-- homepage -->
//         <section id="home" class="homepage">
//           <div class="container_homepage">
//             <h1>Hi, I'm <span>Abdi Kumela</span></h1>
//             <h3>Front-End Developer</h3>

//             <a href="#contact" class="styled-button"> Let's Talk </a>
//           </div>
//         </section>
//         <!-- About Me -->
//         <section id="aboutme" class="aboutme">
//           <div class="container_aboutme">
//             <h1>About Me</h1>
//             <div class="aboutme_content">
//               <div class="selfdesc">
//                 <span>
//                   I'm <span class="name">Abdi Kumela</span> , a Web Developer
//                 </span>
//                 <br />I help you build brand for your business at an affordable
//                 price. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Unde animi qui doloribus, explicabo odit facilis.
//               </div>
//               <div class="skills">
//                 <h1>Skills</h1>
//                 <div class="skill">
//                   <div class="skill-name">HTML</div>
//                   <div class="progress-bar">
//                     <div class="progress html"></div>
//                   </div>
//                 </div>
//                 <div class="skill">
//                   <div class="skill-name">CSS</div>
//                   <div class="progress-bar">
//                     <div class="progress css"></div>
//                   </div>
//                 </div>
//                 <div class="skill">
//                   <div class="skill-name">Tailwind CSS</div>
//                   <div class="progress-bar">
//                     <div class="progress tailwindcss"></div>
//                   </div>
//                 </div>
//                 <div class="skill">
//                   <div class="skill-name">JavaScript</div>
//                   <div class="progress-bar">
//                     <div class="progress javascript"></div>
//                   </div>
//                 </div>
//                 <div class="skill">
//                   <div class="skill-name">React</div>
//                   <div class="progress-bar">
//                     <div class="progress react"></div>
//                   </div>
//                 </div>
//                 <div class="skill">
//                   <div class="skill-name">Next.js</div>
//                   <div class="progress-bar">
//                     <div class="progress nextjs"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <!-- Services -->
//         <section id="services" class="services">
//           <div class="container_homepage">
//             <h1>Services</h1>
//           </div>
//         </section>
//         <!-- portfolio -->
//         <section id="portfolio" class="portfolio">
//           <div class="container_homepage">
//             <h1>Portfolio</h1>
//           </div>
//         </section>
//         <!-- contact -->
//         <section id="contact" class="contact">
//           <div class="container_homepage">
//             <h1>Contact</h1>
//           </div>
//         </section>
//       </main>
//     </div>
//   </body>
// </html>

// * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   html {
//     scroll-behavior: smooth;
//   }
  
//   body {
//     font-family: Arial, sans-serif;
//   }
  
//   .main_container {
//     display: flex;
//   }
  
//   .navbar {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 20%;
//     height: 100vh;
//     padding: 25px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background: #090909e1;
//     color: #fff;
//   }
  
//   .profile_pic {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-bottom: 20px;
//   }
  
//   .profile_pic h2 {
//     margin-top: 10px;
//   }
  
//   .profile_pic img {
//     width: 150px;
//     height: 150px;
//     border-radius: 75px;
//   }
  
//   .link_container {
//     flex-grow: 1;
//   }
  
//   .link_container ul {
//     list-style: none;
//     padding: 0;
//   }
  
//   .link_container ul li {
//     margin-bottom: 25px;
//   }
  
//   .link_container ul li a {
//     text-decoration: none;
//     color: #fff;
//   }
  
//   .socialmedias {
//     margin-top: auto;
//   }
  
//   .main-content {
//     margin-left: 20%;
//     width: 80%;
//     overflow-y: auto;
//   }
  
//   .homepage,
//   .services,
//   .portfolio,
//   .contact {
//     width: 100%;
//     height: 100vh;
//     padding: 15px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #fff;
//     border: 3px solid red;
//   }
  
//   /* homepage style */
//   .homepage {
//     background: url(bg-homepage.jpg);
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     border: none;
//   }
  
//   .container_homepage h1 {
//     font-size: 55px;
//     padding: 20px 20px 0 20px;
//   }
//   .container_homepage h3 {
//     font-size: 30px;
//     padding: 0 20px 45px 20px;
//   }
//   .container_homepage h1 span {
//     color: rgb(52, 202, 180);
//   }
  
//   .styled-button {
//     text-decoration: none;
//     background-color: #000000b6;
//     color: rgb(52, 202, 180);
//     border-radius: 28px;
//     border: 2px solid rgb(52, 202, 180);
//     padding: 15px 30px;
//     margin-left: 150px;
//     font-size: 18px;
//     cursor: pointer;
//     transition: background-color 0.3s ease, transform 0.3s ease;
//   }
  
//   .styled-button:hover {
//     background-color: rgba(52, 202, 179, 0.846);
//     color: #fff;
//     transform: translateY(-3px);
//   }
  
//   .styled-button:active {
//     background-color: #1c5986;
//     transform: translateY(0);
//   }
//   /* aboutme style */
  
//   .aboutme {
//     background: #000000f1;
//     width: 100%;
//     height: 100vh;
//     padding: 15px;
//     text-align: center;
//     color: #fff;
//     border: 3px solid red;
//   }
//   .container_aboutme h1 {
//     text-decoration: underline;
//     padding: 15px;
//   }
//   .aboutme_content {
//     margin-top: 100px;
//     display: grid;
//     grid-template-columns: 2fr 2fr;
//     gap: 0 10px;
//   }
//   .selfdesc,
//   .skills {
//     height: auto;
//     text-align: justify;
//     padding: 10px;
//   }
//   .selfdesc span {
//     font-size: 25px;
//   }
//   .selfdesc .name {
//     font-size: 25px;
//     color: rgb(52, 202, 180);
//   }
  
//   /* skill */
//   .skills {
//     width: 80%;
//     margin: 10px auto;
//     font-family: Arial, sans-serif;
//   }
  
//   .skill {
//     margin-bottom: 15px;
//   }
  
//   .skill-name {
//     margin-bottom: 5px;
//     font-weight: bold;
//   }
  
//   .progress-bar {
//     position: relative;
//     width: 100%;
//     height: 20px;
//     background-color: #f0f0f0;
//     border-radius: 10px;
//     overflow: hidden;
//   }
  
//   .progress {
//     height: 100%;
//     border-radius: 10px;
//   }
  
//   .html {
//     width: 90%;
//     background-color: rgb(52, 202, 180);
//   }
//   .css {
//     width: 80%;
//     background-color: rgb(52, 202, 180);
//   }
//   .tailwindcss {
//     width: 70%;
//     background-color: rgb(52, 202, 180);
//   }
//   .javascript {
//     width: 85%;
//     background-color: rgb(52, 202, 180);
//   }
//   .react {
//     width: 75%;
//     background-color: rgb(52, 202, 180);
//   }
//   .nextjs {
//     width: 60%;
//     background-color: rgb(52, 202, 180);
//     color: #ffffff;
//   }
  
