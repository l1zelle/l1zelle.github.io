let boxes = document.querySelectorAll(".box");
let title = document.querySelectorAll(".title");

let palette = ["#7582AE", "#703002","#000008","#F37800","#4297BC","#017342","#017342","007EBB","#F0E0D3","#FF9501","#DC4A01","#A2C080","#4C3273","010066", "#EDE9DE", "#EDE9DE", "#EDE9DE", "#EDE9DE", "#000008", "#000008"]

for (box of boxes) {
    box.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)]
}

let palette2 = ["#7582AE", "#703002","#000008","#F37800","#4297BC","#017342","#017342","007EBB","#F0E0D3","#FF9501","#DC4A01","#A2C080","#4C3273","010066", "#000008"]

for (title of title) {
    title.style.color = palette2[Math.floor(Math.random() * palette2.length)]
}

