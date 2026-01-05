function filterProjects(type){
  const projects=document.querySelectorAll('.project');
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  event.target.classList.add('active');

  projects.forEach(p=>{
    p.style.display=(type==='all'||p.classList.contains(type))?'block':'none';
  });
}
