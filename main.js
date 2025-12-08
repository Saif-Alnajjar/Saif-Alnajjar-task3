const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle){
  toggle.addEventListener('click', ()=>{
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.gap = '12px';
  });
}

// Button subtle hover ripple (CSS-driven, JS toggle class example)
document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('mouseenter', ()=>btn.classList.add('hover'));
  btn.addEventListener('mouseleave', ()=>btn.classList.remove('hover'));
});
