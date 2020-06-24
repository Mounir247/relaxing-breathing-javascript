const container = document.querySelector('.container')
const NavLink = document.querySelectorAll('NavFull > ul > li > a')
const text = document.querySelector('#text')
const circle = document.querySelector('.circle')
const circleChange = document.querySelector('.circleChange')
const shrink = document.querySelector('.shrink')
const gradientCircleChange = document.querySelector('.gradientCircleChange')
const toggleBtn = document.querySelector('.toggleMenuBtn')
const spinnerImg1 =document.querySelector('.Spinner1-Img')
const spinnerImg2 =document.querySelector('.Spinner2-Img')
const spinnerImg3 =document.querySelector('.Spinner3-Img')
const spinnerImg4 =document.querySelector('.Spinner4-Img')
const totalTime = 7500
const breathTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breathAnimation()

function breathAnimation(){
    text.innerHTML = 'Breath In'
    container.className = 'container grow'
    circle.className = 'circle circle-inner circleChange'
    setTimeout(()=>{
        text.innerText = 'Hold'
        setTimeout(()=>{
            text.innerText = 'Breath Out'
            container.className = 'container shrink'
            circle.className = 'circle shrink circleChange'
        },holdTime)
    }, breathTime)
}

setInterval(breathAnimation, totalTime)
function toggleMenu() {
    let bgMenu = document.querySelector('.BackgroundMenu');
    if (bgMenu.style.display === "flex") {
      bgMenu.style.display = "none";
      toggleBtn.innerHTML = "Change Theme"
    } else {
      bgMenu.style.display = "flex";
      toggleBtn.innerHTML="Hide"
    }
  }
NeutralBg=()=>{
  circleChange.style.backgroundColor= "#C9C6C1"
  circleChange.style.background= "#C9C6C1"  
  text.style.color="#000"
  gradientCircleChange.style.background = "conic-gradient(#838483 0%, #000000 30%, #ffffff 50%, #ffffff 50%, #000000 70%, #838483 100%)"
  document.body.className = "NeutralBg"
  spinnerImg1.src = "./img/SpinnerLight.png"  
  spinnerImg2.src = "./img/SpinnerLight.png"  
  spinnerImg3.src = "./img/SpinnerLight.png"  
  spinnerImg4.src = "./img/SpinnerLight.png" 
};
NeutralDarkBg=()=>{
  circleChange.style.backgroundColor= "#0E1A23"
  circleChange.style.background= "#0E1A23"

  gradientCircleChange.style.background = "conic-gradient(#232629 0%, #232629 30%, #ffffff 50%, #ffffff 50%, #838483 70%, #232629 100%)"
  text.style.color="#fff"

  document.body.className = "NeutralDarkBg";
  spinnerImg1.src = "./img/SpinnerDark5.png"  
  spinnerImg2.src = "./img/SpinnerDark5.png"  
  spinnerImg3.src = "./img/SpinnerDark5.png"  
  spinnerImg4.src = "./img/SpinnerDark5.png"  
} 
SummerBg = () =>{
  circleChange.style.background = "#ffffff url('./img/SummerCenter2.png') no-repeat center center/cover";
  gradientCircleChange.style.background = "conic-gradient(#2fc8ce 0%, #82d8b2 30%, #ffffff 50%, #ffffff 50%, #82d8b2 70%, #2fc8ce 100%)"
  text.style.color="#fff"

  document.body.className = "SummerBg"
  spinnerImg1.src = "./img/SpinnerShell2.png"  
  spinnerImg2.src = "./img/SpinnerShell2.png"  
  spinnerImg3.src = "./img/SpinnerShell2.png"  
  spinnerImg4.src = "./img/SpinnerShell2.png"  
  
};
MountainBg=()=>{  
  circleChange.style.background = "#ffffff url('./img/mountainCenter1.png') no-repeat center center/cover";
  gradientCircleChange.style.background = "conic-gradient(#356887 0%, #9AAAB3 30%, #EDBD7C 50%, #EDBD7C 50%, #9AAAB3 70%, #356887 100%)"
  text.style.color="#000"

  document.body.className = "MountainBg"
  spinnerImg1.src = "./img/leaf12.png"  
  spinnerImg2.src = "./img/leaf12.png"  
  spinnerImg3.src = "./img/leaf12.png"  
  spinnerImg4.src = "./img/leaf12.png"  
  
};
ForestBg = () =>{
  circleChange.style.background = "#ffffff url('./img/MountainCenter0.png') no-repeat center center/cover";
  gradientCircleChange.style.background = "conic-gradient(#1E830D 0%, #93DC37 30%, #646D2C 50%, #646D2C 50%, #93DC37 70%, #1E830D 100%)"
  text.style.color="#fff"
  document.body.className = "ForestBg"
  spinnerImg1.src = "./img/leaf10.png"  
  spinnerImg2.src = "./img/leaf10.png"  
  spinnerImg3.src = "./img/leaf10.png"  
  spinnerImg4.src = "./img/leaf10.png"  
};
SpaceBg=()=>{
  circleChange.style.background = "#00192F url('./img/spaceCenter.png') no-repeat center center/cover";
  gradientCircleChange.style.background = "conic-gradient(#000000 0%, #015AAA 30%, #ffffff 50%, #ffffff 50%, #015AAA 70%, #000000 100%)"
  text.style.color="#fff"
  document.body.className = "SpaceBg"
  spinnerImg1.src = "./img/SpinnerSpace3.png"  
  spinnerImg2.src = "./img/SpinnerSpace3.png"  
  spinnerImg3.src = "./img/SpinnerSpace3.png"  
  spinnerImg4.src = "./img/SpinnerSpace3.png"  
};