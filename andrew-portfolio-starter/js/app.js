(function(){
  const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();
  const modeBtn = document.getElementById('modeBtn');
  function setMode(m){ document.documentElement.classList.toggle('dark', m==='dark'); localStorage.setItem('mode', m); }
  if(modeBtn){ modeBtn.addEventListener('click', ()=>{ const cur = localStorage.getItem('mode')==='dark' ? 'light' : 'dark'; setMode(cur); }); const saved = localStorage.getItem('mode'); if(saved){ setMode(saved); } }
  const dataEl = document.getElementById('projectsData'); if(!dataEl) return; const DATA = JSON.parse(dataEl.textContent);
  const corpse = document.getElementById('corpse'); if(corpse){ const imgs = DATA.corpsePlaceholders;
    corpse.innerHTML = imgs.map((src,i)=>`<a class="slice" href="./project.html?slug=${(DATA.projects[i%DATA.projects.length]||DATA.projects[0]).slug}"><img src="${src}" alt="Slice ${i+1}" loading="eager"/></a>`).join(''); }
  const grid = document.getElementById('workGrid'); if(grid){ grid.innerHTML = DATA.projects.map((p,i)=>`
    <article class="card ${i%5===0?'wide':''}"><a href="./project.html?slug=${p.slug}">
      <img src="${p.cover}" alt="${p.title} cover"/><div style="padding:10px 12px;">
      <div style="font-weight:500">${p.title}</div><div style="color:var(--muted);font-size:14px">${[p.location,p.year].filter(Boolean).join(' · ')}</div></div></a></article>`).join(''); }
  const dialog = document.getElementById('project'); if(dialog && grid){ grid.addEventListener('click',(e)=>{
    const a = e.target.closest('a'); if(!a) return; const url = new URL(a.href, location.href); const slug = url.searchParams.get('slug');
    const p = DATA.projects.find(x=>x.slug===slug); if(!p) return; e.preventDefault();
    document.getElementById('projTitle').textContent = p.title; document.getElementById('projText').textContent = p.description||'';
    document.getElementById('projMeta').textContent = [p.location,p.year].filter(Boolean).join(' · ');
    const track = document.getElementById('carTrack'); track.innerHTML = (p.images||[]).map(i=>`<div class="slide"><img src="${i.src}" alt="${i.cap||p.title}"></div>`).join(''); dialog.showModal();
  }); dialog.addEventListener('click',(e)=>{ const rect = dialog.querySelector('.modal').getBoundingClientRect();
    const inside = rect.top<=e.clientY && e.clientY<=rect.bottom && rect.left<=e.clientX && e.clientX<=rect.right; if(!inside) dialog.close(); }); }
})();