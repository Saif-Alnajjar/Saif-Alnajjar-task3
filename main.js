const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links){
  toggle.addEventListener('click', ()=>{
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.gap = '12px';
  });
}

document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('mouseenter', ()=>btn.classList.add('hover'));
  btn.addEventListener('mouseleave', ()=>btn.classList.remove('hover'));
});
