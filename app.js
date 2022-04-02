document.addEventListener("mousemove", parallex);


function parallex(e)
{
   const para =  document.querySelector('.image')
    const speed  = 1;
    const x = (window.innerWidth - e.pageX*speed) / 100
    const y = (window.innerHeight - e.pageY*speed) / 100

    para.style.transform = `translateX(${x}px)  translateY(${y}px)`
}

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.hero');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})