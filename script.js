const cards = document.querySelector(".cards");

Array.from(cards.children).forEach(card => {
    Array.from(cards.children).forEach(card=>{
        card.classList.contains("active")?card.classList.remove("active"):console.log("");
        card.innerHTML = "";
    })
    card.addEventListener("mouseover", ()=>{
        card.classList.add("active");
          card.innerHTML="Lorem Ipsum Dolor Sit"
    })
    card.onmouseleave = () =>
        {
            card.classList.remove("active");
            card.innerHTML = "";

    }
  
});