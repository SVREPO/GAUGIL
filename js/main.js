// nav
const hd=document.getElementById("top"),bg=document.querySelector(".burger"),lk=document.getElementById("links");
addEventListener("scroll",()=>hd.classList.toggle("sc",scrollY>30),{passive:true});
bg.onclick=()=>{const o=lk.classList.toggle("open");bg.setAttribute("aria-expanded",o);document.documentElement.classList.toggle("no-scroll",o)};
lk.querySelectorAll("a").forEach(a=>a.onclick=()=>{lk.classList.remove("open");bg.setAttribute("aria-expanded",false);document.documentElement.classList.remove("no-scroll")});
lk.onclick=e=>{if(e.target===lk){lk.classList.remove("open");bg.setAttribute("aria-expanded",false);document.documentElement.classList.remove("no-scroll")}};
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach((el,i)=>{el.style.transitionDelay=(i%5)*80+"ms";io.observe(el)});
// card glow
document.querySelectorAll(".card").forEach(c=>c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect();c.style.setProperty("--x",e.clientX-r.left+"px");c.style.setProperty("--y",e.clientY-r.top+"px")}));
// particles
const cv=document.getElementById("fx"),cx=cv.getContext("2d");let W,H,P=[],m={x:-999,y:-999};
function rs(){const d=devicePixelRatio||1;W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);
 const n=Math.min(90,Math.floor(W*H/14000));P=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))}
addEventListener("resize",rs);rs();
cv.parentElement.addEventListener("pointermove",e=>{const r=cv.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});
cv.parentElement.addEventListener("pointerleave",()=>m.x=-999);
function tick(){cx.clearRect(0,0,W,H);
 for(const p of P){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
  const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);if(d<130){p.x+=dx/d*1.6;p.y+=dy/d*1.6}
  cx.fillStyle="rgba(190,200,255,.7)";cx.beginPath();cx.arc(p.x,p.y,1.4,0,6.3);cx.fill()}
 for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const d=Math.hypot(P[i].x-P[j].x,P[i].y-P[j].y);
  if(d<120){cx.strokeStyle=`rgba(142,168,255,${.22*(1-d/120)})`;cx.beginPath();cx.moveTo(P[i].x,P[i].y);cx.lineTo(P[j].x,P[j].y);cx.stroke()}}
 requestAnimationFrame(tick)}
if(!matchMedia("(prefers-reduced-motion:reduce)").matches)tick();