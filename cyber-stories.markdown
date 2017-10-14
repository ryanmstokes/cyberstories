---
title: Cyber Stories
date: 2017-10-13 11:58:00 Z
---


<html>
<head>

<style>
body, html {
  height: 100%;
  min-height:800px;
    font-family:Arial;
}

body {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.footer{
  width:100%;
  z-index: 9999;
  position:fixed;
  bottom:0rem;
  padding-left:4%;
}
.footer-title{
  max-width:200px;
  font-size: 0.8rem;
text-transform: uppercase;
color: #f9f9f9;
font-weight: 300;
color: #d2d2d2;
}
.footer a{
  float: right;
  font-family:Arial;
}
.sky {
  opacity:0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 180px;
  z-index: 0;
  background-color: #222;
  background-image: url("http://jakealbaugh.com/resources/sovog/starry-sky.jpg");
  background-position: 0% 0px;
  background-size: cover;
  background-repeat: repeat-x;
  animation: sky 100s infinite linear;
}

.moon {
  opacity:1;
  position: absolute;
  top: 167px;
  left: 10%;
  width: 200px;
  height: 200px;
  display: block;
  border-radius: 50%;
  z-index: 1;
  background-color: #f0f0f0;
  background-image: url("/img/old_moon.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.5), 0px 0px 0px 2px rgba(0, 0, 0, 0.5), inset 0px 6px 12px rgba(0, 0, 0, 0.5), inset 0px 18px 36px rgba(255, 255, 255, 0.5);
  animation: moon 12s infinite linear;
}

.land {
  opacity:1;
  position: fixed;
  top: 180px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: url(/img/fresh_snow.png), linear-gradient(#294f29, #252e25);
  box-shadow: inset 0px 14px 100px rgba(0, 0, 0, 0.3), 0px 0px 24px rgba(0, 0, 0, 0.5);
}
.overlay{
  pointer-events: none;
  opacity: 0;
  background: black;
  position: fixed;
  top: 0;

  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  -webkit-animation: fadeout 3.5s; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: fadeout 3.5s; /* Firefox < 16 */
       -ms-animation: fadeout 3.5s; /* Internet Explorer */
        -o-animation: fadeout 3.5s; /* Opera < 12.1 */
           animation: fadeout 3.5s;
}

.fadeOut{
  opacity:0;
  -webkit-animation: fadeout 3.5s; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: fadeout 3.5s; /* Firefox < 16 */
       -ms-animation: fadeout 3.5s; /* Internet Explorer */
        -o-animation: fadeout 3.5s; /* Opera < 12.1 */
           animation: fadeout 3.5s;
}

@keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}

/* Firefox < 16 */
@-moz-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}

/* Internet Explorer */
@-ms-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}

/* Opera < 12.1 */
@-o-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}

.fadeIn{
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: fadein 2s; /* Firefox < 16 */
       -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
           animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.flash {
  display: block;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: scale(0);
  margin-left: -24px;
  width: 160px;
  height: 280px;
  z-index: 99;
  background: -webkit-radial-gradient(center, ellipse cover, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0) 100%);
  animation: flash 12s linear ;
}

#sovog-container {
  display: block;
  position: absolute;
  top: 10%;
  left: 50%;
  z-index: 3;
  perspective: 2000px;
  transform: translateX(-50%) scale(0.3);

}
#sovog-container:hover{
  cursor:pointer;
}
#sovog-container::before {
  content: ' ';
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: -1;
  transform: translateZ(-300px) rotateY(-15deg);
  perspective-origin: 0% 100%;
  -webkit-filter: blur(24px);
  filter: blur(24px);
}

.sovog .body,
.sovog .antennae,
.sovog .foot-right,
.sovog .foot-left {
  /*filter: url(#dropshadow);*/
}
.sovog .antennae {
  transform-origin: 50% 50%;
  animation: antennae 250ms infinite linear;
}
.sovog .full-head {
  transform-origin: 50% 50%;
  animation: full-head 500ms infinite linear;
}
.sovog .full-head .eyeball-left-outside,
.sovog .full-head .eyeball-left-inside,
.sovog .full-head .eyeball-right-outside,
.sovog .full-head .eyeball-right-inside {
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  animation: blink 6s linear infinite;
}
.sovog .left-arm-full,
.sovog .right-arm-full {
  transform-origin: 50% 0%;
}
.sovog .left-arm-full {
  animation: arm-left 500ms linear infinite;
}
.sovog .right-arm-full {
  animation: arm-right 500ms linear infinite;
  animation-delay: 250ms;
}
.sovog .left-leg-full,
.sovog .right-leg-full {
  transform-origin: 50% 0%;
}
.sovog .left-leg-full {
  animation: legs 500ms linear infinite;
  animation-delay: 250ms;
}
.sovog .right-leg-full {
  animation: legs 500ms linear infinite;
}

@keyframes antennae {
  0% {
    transform: rotateY(0deg) translateY(0);
  }
  50% {
    transform: rotateX(15deg) translateY(4px);
  }
  100% {
    transform: rotateY(0deg) translateY(0);
  }
}
@keyframes full-head {
  0% {
    transform: rotateY(0deg) translateY(0);
  }
  50% {
    transform: rotateY(15deg) translateY(4px);
  }
  100% {
    transform: rotateY(0deg) translateY(0);
  }
}
@keyframes blink {
  0% {
    transform: scale(1);
  }
  1% {
    transform: scale(0.2);
  }
  2% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes arm-left {
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(-20deg) translateY(4px);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
@keyframes arm-right {
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(20deg) translateY(4px);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
@keyframes legs {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes come-to-me {
  0% {
    opacity: 0;
    transform: scale(0.3) translateX(-200%);
    top: 10%;
    left: 50%;
  }
  3% {
    opacity: 1;
    transform: scale(0.3) translateX(-50%);
    top: 10%;
    left: 50%;
  }
  20% {
    transform: scale(1) translateX(-50%);
    top: 30%;
    left: 50%;
  }
  35% {
    transform: scale(3) translateX(-50%);
    top: 40%;
    left: 100%;
  }
  45% {
    transform: scale(3) translateX(-50%);
    top: 40%;
    left: 100%;
  }
  65% {
    transform: scale(5) translateX(-50%);
    top: 40%;
    left: 50%;
  }
  80% {
    transform: scale(7) translateX(-50%);
    top: 40%;
    left: 50%;
  }
  100% {
    transform: scale(10) translateX(100%);
    top: 40%;
    left: 100%;
  }
}
@keyframes flash {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  1% {
    opacity: 1;
    transform: scale(0.3);
  }
  5% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
@keyframes sky {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: -600px 0px;
  }
}
@keyframes moon {
  0% {
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.1), 0px 0px 24px rgba(0, 0, 0, 0.5), 0px 0px 0px 2px rgba(0, 0, 0, 0.1), inset 0px 6px 12px rgba(0, 0, 0, 0.5), inset 0px 18px 36px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0px 0px 50px 0px rgba(255, 255, 255, 0.9), 0px 0px 24px rgba(0, 0, 0, 0.5), 0px 0px 0px 2px rgba(0, 0, 0, 0.2), inset 0px 6px 12px rgba(0, 0, 0, 0.5), inset 0px 18px 36px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.1), 0px 0px 24px rgba(0, 0, 0, 0.5), 0px 0px 0px 2px rgba(0, 0, 0, 0.2), inset 0px 6px 12px rgba(0, 0, 0, 0.5), inset 0px 18px 36px rgba(255, 255, 255, 0.5);
  }
}
.title{
  right:14%;
  top:3%;
  color: white;
  font-size:1.4rem;
  position: fixed;
  top: 0;
  z-index: 9999;
  font-family: arial;
  font-weight: 200;
}
.logo{
  font-family: alagardmedium;
}
</style>
<script type="text/javascript" src="/js/uglipop.min.js"></script>
<link type="text/css" rel="stylesheet" href="/stylesheet.css">

<link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
  <div class="page-content">
  <button id="email" class="title"><i class="fa fa-email"></i></button>
</div>
<div class="sky"></div>
<div id="moon" class="moon"></div>








<div id="land" class="land"></div>
<div class="overlay "></div>

<div class="flash"></div>


<div id="sovog-container">
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="160px" height="280px" viewBox="0 0 160 250" enable-background="new 0 0 160 250" xml:space="preserve" class="sovog">

    <defs xmlns="http://www.w3.org/2000/svg">
      <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="2" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <g id="antennae" class="antennae">
      <g>
        <g>
          <path class="antenna-left" d="M76.782,25.942c-0.08-0.815-2.192-20-22.867-21.928l0.137-1.501c21.916,2.044,24.19,23.07,24.21,23.283L76.782,25.942z"/>
        </g>
        <ellipse class="antenna-ball-left" fill="#5E5E5E" cx="55.021" cy="3.39" rx="3.344" ry="3.391"/>
      </g>
      <g>
        <g>
          <path class="antenna-right" d="M83.217,25.942c0.08-0.815,2.192-20,22.867-21.928l-0.137-1.501c-21.916,2.044-24.188,23.07-24.209,23.283L83.217,25.942z
            "/>
        </g>
        <ellipse class="antenna-ball-right" fill="#5E5E5E" cx="104.979" cy="3.39" rx="3.346" ry="3.391"/>
      </g>
    </g> <!-- antennae -->

    <rect class="neck" x="59.722" y="72.779" fill="#787878" width="40.557" height="27.564"/>

    <g>
      <g id="left-leg-full" class="left-leg-full">
        <g>
          <rect class="leg-left" x="48.499" y="158.432" fill="#787878" width="12.771" height="81.291"/>
        </g>
        <path class="foot-left" fill="#595959" d="M54.885,234.096c-9.526,0-17.244,7.119-17.244,15.903H72.13C72.13,241.215,64.41,234.096,54.885,234.096z"
          />
        <g>
          <ellipse class="kneecap-left-outside" cx="54.885" cy="200.79" rx="9.294" ry="9.423"/>
          <g>
            <path class="kneepcap-left-inside" fill="#787878" d="M60.607,203.823c-1.653,3.202-5.553,4.44-8.715,2.768c-3.163-1.677-4.383-5.628-2.73-8.832
              c1.651-3.204,5.556-4.442,8.715-2.771C61.036,196.664,62.258,200.62,60.607,203.823z"/>
          </g>
        </g>
      </g> <!-- left leg full -->

      <g id="right-leg-full" class="right-leg-full">
        <g>
          <rect class="leg-right" x="98.729" y="158.432" fill="#787878" width="12.771" height="81.291"/>
        </g>
        <path class="foot-right" fill="#595959" d="M105.115,234.096c9.523,0,17.244,7.119,17.244,15.903H87.871
          C87.871,241.215,95.593,234.096,105.115,234.096z"/>
        <g>
          <ellipse class="kneepcap-right-outisde" cx="105.113" cy="200.79" rx="9.295" ry="9.423"/>
          <g>
            <path class="kneecap-right-inside" fill="#787878" d="M99.395,203.823c1.652,3.202,5.551,4.44,8.713,2.768c3.164-1.677,4.381-5.628,2.729-8.832
              c-1.65-3.204-5.553-4.442-8.711-2.771C98.963,196.664,97.743,200.62,99.395,203.823z"/>
          </g>
        </g>
      </g> <!-- right leg full -->
    </g>
    <g>
      <g>
        <g id="left-arm-full" class="left-arm-full">
          <path class="arm-left" fill="#787878" d="M38.291,95.944c-8.259,4.479-15.268,11.387-20.423,18.846C5.22,133.088,3.41,154.261,7.262,176.253
            l10.418-1.878c-3.338-19.01-2.353-37.016,8.665-53.158c4.23-6.199,9.988-12.042,16.923-15.812L38.291,95.944z"/>
          <path class="hand-left" fill="#595959" d="M9.604,166.5c-6.984,1.975-11.067,9.316-9.117,16.398c1.008,3.662,3.439,6.523,6.51,8.172
            c-0.167-0.363-0.315-0.742-0.426-1.141c-1.235-4.484,1.703-9.234,6.562-10.609c4.861-1.377,9.804,1.145,11.037,5.631
            c0.111,0.396,0.18,0.798,0.221,1.197c1.785-3.021,2.399-6.748,1.393-10.407C23.833,168.661,16.589,164.523,9.604,166.5z"/>
          <g>
            <ellipse class="elbox-left-outside" cx="13.581" cy="132.93" rx="8.505" ry="8.623"/>
            <g>
              <path class="elbow-left-inside" fill="#787878" d="M9.299,135.199c1.237,2.396,4.154,3.322,6.52,2.07c2.364-1.252,3.278-4.211,2.042-6.605
                c-1.236-2.398-4.152-3.324-6.52-2.072C8.978,129.844,8.065,132.803,9.299,135.199z"/>
            </g>
          </g>
        </g>
        <path class"arm-attachment-left" d="M42.356,94.049l-8.341-1.248c-5.238,10.201-7.014,20.918-4.697,32.248l8.34,1.248L42.356,94.049z"/>
      </g>
      <g>
        <g id="right-arm-full" class="right-arm-full">
          <path class="arm-right" fill="#787878" d="M121.709,95.944c8.258,4.479,15.268,11.387,20.421,18.846c12.647,18.299,14.458,39.472,10.606,61.464
            l-10.418-1.878c3.339-19.01,2.353-37.017-8.666-53.158c-4.229-6.199-9.987-12.042-16.924-15.812L121.709,95.944z"/>
          <path class="hand-right" fill="#595959" d="M150.395,166.5c6.984,1.975,11.067,9.316,9.119,16.398c-1.011,3.662-3.439,6.523-6.511,8.172
            c0.168-0.363,0.313-0.742,0.424-1.141c1.237-4.484-1.702-9.234-6.562-10.609c-4.861-1.377-9.803,1.145-11.035,5.631
            c-0.109,0.396-0.18,0.798-0.223,1.197c-1.784-3.021-2.398-6.748-1.393-10.407C136.166,168.661,143.412,164.523,150.395,166.5z"/>
          <g>
            <ellipse class="elbox-right-outside" cx="146.419" cy="132.93" rx="8.505" ry="8.623"/>
            <g>
              <path class="elbow-right-inside" fill="#787878" d="M150.7,135.199c-1.235,2.396-4.154,3.322-6.519,2.07c-2.365-1.252-3.279-4.211-2.043-6.605
                c1.235-2.398,4.152-3.324,6.52-2.072C151.023,129.844,151.936,132.803,150.7,135.199z"/>
            </g>
          </g>
        </g>
        <path class="arm-attachment-right" d="M117.645,94.049l8.34-1.248c5.238,10.201,7.015,20.918,4.695,32.248l-8.339,1.248L117.645,94.049z"/>
      </g>
    </g>

    <g id="full_head" class="full-head">
      <path class="top-of-head" fill="#787878" d="M96.079,32.57v-8.546c-10.72-3.765-21.437-3.98-32.156,0v8.546H96.079z"/>

      <path class="head" fill="#595959" d="M112.809,28.372H80H47.19c-5.814,18.663-5.499,37.322,0,55.983H80h32.811
        C118.309,65.694,118.625,47.035,112.809,28.372z"/>
      <g>
        <g>
          <path class="eyeball-left-outside" fill="#FFFFFF" d="M72.116,47.955c0,5.443-4.045,9.853-9.033,9.853h-1.971c-4.988,0-9.032-4.41-9.032-9.853
            s4.044-9.856,9.032-9.856h1.971C68.071,38.099,72.116,42.512,72.116,47.955z"/>
          <path class="eyeball-left-inside" d="M66.614,47.955c0,2.176-1.618,3.942-3.613,3.942h-1.807c-1.994,0-3.612-1.766-3.612-3.942
            c0-2.178,1.618-3.943,3.612-3.943H63C64.996,44.012,66.614,45.777,66.614,47.955z"/>
        </g>
        <g>
          <path class="eyeball-right-outside" fill="#FFFFFF" d="M107.92,47.955c0,5.443-4.045,9.853-9.031,9.853h-1.973c-4.986,0-9.031-4.41-9.031-9.853
            s4.045-9.856,9.031-9.856h1.973C103.875,38.099,107.92,42.512,107.92,47.955z"/>
          <path class="eyeball-right-inside"  d="M102.417,47.955c0,2.176-1.616,3.942-3.612,3.942h-1.807c-1.994,0-3.611-1.766-3.611-3.942
            c0-2.178,1.617-3.943,3.611-3.943h1.807C100.801,44.012,102.417,45.777,102.417,47.955z"/>
        </g>
      </g>
      <path class="mouth" fill="#FFFFFF" d="M103.383,69.778c0,1.381-0.836,2.499-1.871,2.499H58.487c-1.033,0-1.871-1.118-1.871-2.499
        c0-1.378,0.838-2.496,1.871-2.496h43.025C102.547,67.282,103.383,68.4,103.383,69.778z"/>
    </g> <!-- full head -->

    <g>
      <path class="body" fill="#595959" d="M120.098,92.09H80H39.903c-7.105,26.162-6.721,52.325,0,78.488H80h40.098
        C126.82,144.416,127.203,118.252,120.098,92.09z" />
    </g>

  </svg>
</div>
<div id="contact_section" class="contact_section">
<section id="contact">
<div class="box">
<div class="logo">Got a good story?</div>

<p> Let us tell it in a different way by creating an experience that truly engages your cutomers and makes them happy!</p>

<ul class="services">
<li>
Digital Story Telling
</li>
<li>
Competitor Research
</li>
<li>
UX, UI, Information Design
</li>
<li>
Front End Architecture
</li>
</ul>
<p>We will help you rewrite your brief, to convey your values and target the right customers!</p>

<strong class="sub-title">Want to have a chat?</strong>
<div class="cta-wrap">
<button><img src="/img/8bitemail.png"/><div>Contact Us</div></button>
</div>
</div>


  </section>
</div>
<div class="footer"><h6 class="footer-title"><strong class="footer-logo">CYBERSTORIES Ltd</strong><br/>
272 Bath Street, Glasgow, G2 4JR. +44 (0)131 618 6334</h6><a href="">More Info</a></div>


<div id="emailModal" class="email_modal">
<div id='starsb'></div>
<div id='starsb2'></div>
<div id='starsb3'></div>
<div class="container">

<form name="htmlform" method="post" action="toyousender.php">



<input  type="email" name="email" placeholder="MAIL" required>

<textarea name="comments" placeholder="MESSAGE" required ></textarea>

<button name="send" type="submit" class="submit">SEND</button>

</form>

  </div>
<a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">contact us</a>

</div>
<script type="text/javascript">

var emailBtn = document.getElementById('email');


var show_modal = function(){

    uglipop({class:'emailModal', //styling class for Modal
          source:'div',
          content:'emailModal'
          });

};


    emailBtn.addEventListener('click', show_modal, false);

    function moveUp(el, range) {
        //* get starting y value **/
        //var startingPoints = 192;
        var elementToMove = document.getElementById(el);
        //console.log('startingPoint', el.getAttribute('transform'));
        //svar yPos = Math.round(startingPoints[1]);
        var startingPoint = 192;
        var yPos = startingPoint;
        var tick = function() {
          yPos = yPos - 1;
          //console.log(yPos,xPos);
          var trans = yPos + 'px';
          elementToMove.style.top = trans;

        if (yPos > 80) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }

      };

      tick();
    }

    moveUp('moon');
var callfunction = function(){
  var contact_section = document.getElementById('sovog-container');
  contact_section.style.opacity = 1;
  contact_section.style.transform = 'scale(3) translateX(100%) rotateZ(0deg) translateY(-0.5rem)';
  contact_section.style.top = '40%';
  var leftArm = document.getElementById('left-arm-full');
  leftArm.style.animation = 'block';
  var rightArm = document.getElementById('right-arm-full');
  rightArm.style.animation = 'block';
  var rightLeg = document.getElementById('right-leg-full');
  rightLeg.style.animation = 'block';
  var leftLeg = document.getElementById('left-leg-full');
  leftLeg.style.animation = 'block';
  var contact_section = document.getElementById('contact_section');
  contact_section.classList.add('fadeIn');

  contact_section.style.display = 'block';
  setTimeout(function(){
    var head = document.getElementById('full_head');
    head.style.animation = 'block';
    var antennae = document.getElementById('antennae');
    antennae.style.animation = 'block';

  }, 900);
}


    var move_bot = function(element){
      element.style.animation = 'come-to-me 12s linear';

      element.addEventListener("webkitAnimationEnd", callfunction,false);
      element.addEventListener("animationend", callfunction,false);
      element.addEventListener("oanimationend", callfunction,false);
      var land = document.getElementById('land');
      var roboty = document.getElementById('sovog-container');
      /*setTimeout(function(){
        //land.classList.add('fadeOut');
        //roboty.style.opacity = 0 ;
      }, 20000);*/
    }
    var robot = document.getElementById('sovog-container');

    robot.addEventListener('click', function(){
      move_bot(robot)}
      );




      var invader = document.getElementsByClassName('invader'),
      		width = $(document).innerWidth(),
      		traverseDuration = 6,
      		distanceDown = 50,
      		moveSpeed = 1.5;

      function moveDown() {
      	distanceDown += 50;
      	moveSpeed += 0.20;
      	TweenMax.set('section', { marginTop: distanceDown });
      	// Adjust the invader movement speed. 2 is double speed.
      	moveTl.timeScale(moveSpeed);
      	traverseTl.timeScale(moveSpeed);
      }

      var moveTl = new TimelineMax({
      	repeat:-1,
      	duration:1
      })

      var traverseTl = new TimelineMax({
      	repeat:-1
      });

      moveTl.set(invader, {className:'+=move', delay:1})
      	.set(invader, {className:'-=move', delay:1});

      traverseTl.to('section', traverseDuration, { x:width, ease: Power0.easeNone, onComplete:moveDown })
      					.to('section', traverseDuration, { x:0, ease: Power0.easeNone, onComplete:moveDown});


</script>
</body>
</html>
