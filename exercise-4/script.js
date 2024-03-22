let nouns = ["pigeons", "flowers", "rubber duckies", "rotten eggs", "roaches", "piles of trash", "burnt cookies", "grapes", "puppies", "whales"];
let adjectives = ["miserable", "gross", "delusional", "messy", "sweaty", "energetic","hungry", "dirty", "smelly", "irritating"]

document.getElementById("noun1").innerHTML = (nouns[Math.floor(Math.random() * nouns.length)])
document.getElementById("noun2").innerHTML = (nouns[Math.floor(Math.random() * nouns.length)])
document.getElementById("noun3").innerHTML = (nouns[Math.floor(Math.random() * nouns.length)])
document.getElementById("noun4").innerHTML = (nouns[Math.floor(Math.random() * nouns.length)])

document.getElementById("adj1").innerHTML = (adjectives[Math.floor(Math.random() * adjectives.length)])
document.getElementById("adj2").innerHTML = (adjectives[Math.floor(Math.random() * adjectives.length)])
document.getElementById("adj3").innerHTML = (adjectives[Math.floor(Math.random() * adjectives.length)])
document.getElementById("adj4").innerHTML = (adjectives[Math.floor(Math.random() * adjectives.length)])
