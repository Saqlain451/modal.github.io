const col = document.querySelector(".col-8");
const openBtn = document.querySelector(".open-modal");

let closeModal = ()=>{
    col.innerHTML=`<div class="card p-4">
    <div class="card-body">
      <h1 class="text-center mb-5">Modal Project</h1>
      <button onClick="show(this)" class="btn btn-outline-info d-block mx-auto open-modal">
        open modal
      </button>
    </div>
  </div>`
}

let show = ()=>{
    col.innerHTML=`<div class="card card-overlay">
    <div class="card-body">
      <button onClick="closeModal(this)" class="cls-btn"><i class="fa-solid fa-xmark"></i></button>
      <h1 class="text-center mb-4">Modal Content</h1>
    </div>
  </div>`;
}
openBtn.addEventListener("click",show)