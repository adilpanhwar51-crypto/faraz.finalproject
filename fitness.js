const classesData = [
  { title: 'HIIT Blast', duration:'30 min', level:'All levels' },
  { title: 'Strength + Bars', duration:'45 min', level:'Intermediate' },
  { title: 'Yoga Flow', duration:'60 min', level:'All levels' }
];
const trainersData = [
  { id: 1, name: 'ALI MUHAMMAD', title: 'Strength Coach', img: 'WhatsApp Image 2025-11-10 at 11.21.03 PM (2).jpeg' },
  { id: 2, name: 'ALI RAZA', title: 'HIIT Coach', img: 'WhatsApp Image 2025-11-10 at 11.21.03 PM (1).jpeg' },
  { id: 3, name: 'AYANII', title: 'Yoga Expert', img: 'WhatsApp Image 2025-11-10 at 11.21.03 PM.jpeg' }
];
const pricingData = [
  { name:'Basic', price:'$19', perks:['Access to gym','3 classes/week'] },
  { name:'Pro', price:'$49', perks:['Unlimited classes','Nutrition plan'] },
  { name:'Coach', price:'$129', perks:['1:1 Coaching','Custom Program'] }
];

function renderClasses(){
  const grid=document.getElementById('classesGrid');
  classesData.forEach(c=>{
    grid.innerHTML+=`
      <div class="class-card">
        <h3>${c.title}</h3>
        <p class="muted">${c.duration} • ${c.level}</p>
        <button class="btn" onclick="book('class','${c.title}')">Book</button>
      </div>`;
  });
}
function renderTrainers(){
  const container=document.getElementById('trainersContainer');
  trainersData.forEach(t=>{
    container.innerHTML+=`
      <div class="trainer">
        <img src="${t.img}">
        <div style="font-weight:800">${t.name}</div>
        <div class="muted">${t.title}</div>
        <button class="btn" onclick="book('trainer','${t.name}')">Book</button>
      </div>`;
  });
}
function renderPricing(){
  const container=document.getElementById('pricingContainer');
  pricingData.forEach(p=>{
    container.innerHTML+=`
      <div class="plan">
        <div style="font-weight:800">${p.name}</div>
        <div class="price">${p.price} / month</div>
        <ul>${p.perks.map(x=>`<li>${x}</li>`).join('')}</ul>
        <button class="btn" onclick="book('plan','${p.name}')">Choose</button>
      </div>`;
  });
}
function book(type,name){
  window.location.href = `booking.html?type=${type}&name=${encodeURIComponent(name)}`;
}
document.addEventListener('DOMContentLoaded',()=>{renderClasses();renderTrainers();renderPricing();});
