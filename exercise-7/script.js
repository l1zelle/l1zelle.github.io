let userInput = document.getElementById("user-input");
let happyDucks = [
    "https://i.pinimg.com/564x/14/05/27/14052785f9607721ed636d228c659178.jpg",
    "https://i.pinimg.com/564x/b1/af/3c/b1af3cacdf2c15493581834ec763b9e0.jpg",
    "https://i.pinimg.com/564x/3a/34/1b/3a341b9d66fa164ff0899499a20aff1d.jpg",
]

let sadDucks = [
    "https://i.pinimg.com/736x/2e/10/48/2e1048a55cb3f40bfc47747a433b26f5.jpg",
    "https://i.pinimg.com/564x/bc/e0/a1/bce0a1edeb059d2d90280a0ac1d740d5.jpg",
    "https://i.pinimg.com/564x/1a/cb/5b/1acb5b709e42e8f65b3748444bb195dc.jpg",
]
let stressedDucks = [
    "https://i.pinimg.com/564x/76/03/4b/76034b41d31e4c1cbb3f607c045fb272.jpg",
    "https://i.pinimg.com/564x/f9/eb/84/f9eb844f68b9c00a6e8ccfdc827f721e.jpg",
    "https://i.pinimg.com/564x/71/fa/de/71fade810aa2596ad64713a0cef8e79f.jpg",
]

let angryDucks = [
    "https://i.pinimg.com/736x/d6/c6/63/d6c663585d972e0b1f01be2c700422ee.jpg",
    "https://i.pinimg.com/564x/7b/fc/7c/7bfc7c601b621bc1b18e048b7a1e2cc0.jpg",
]

let sleepyDucks = [
    "https://i.pinimg.com/564x/f9/d6/87/f9d6873cc6bebc73cb6f64a90d920c1c.jpg",
    "https://i.pinimg.com/564x/d5/a5/d4/d5a5d4250c741cb0d5b1e9fb19042094.jpg",
    "https://i.pinimg.com/564x/20/20/10/202010135409f8736c2fbc9ecdfb4df2.jpg",
]

let romanticDucks = [
    "https://i.pinimg.com/564x/7f/83/a0/7f83a0cee3ff29e3959d911b7396bcb9.jpg",
    "https://i.pinimg.com/564x/c3/cb/90/c3cb9038e4843d6f5e3d0b47be262a34.jpg",
    "https://i.pinimg.com/564x/a4/f4/87/a4f48728b5ec5e40cac0555b0e8bc98c.jpg",
]

let chaoticDucks = [
    "https://i.pinimg.com/564x/05/9d/4f/059d4fe83a1f5533392742ffef685e03.jpg",
    "https://i.pinimg.com/564x/8a/20/a7/8a20a7f7864985186c8fd62e8f27c576.jpg",
]

let sillyDucks = [
    "https://i.pinimg.com/564x/61/b9/6a/61b96a726bdfaef2fab1afbb0ed01a6a.jpg",
    "https://i.pinimg.com/564x/2e/1a/ee/2e1aeebe2732b4d7e09651bc8bd07c73.jpg",
    "https://i.pinimg.com/564x/6b/19/66/6b1966840a7324e4043548fe05760184.jpg",
    "https://i.pinimg.com/564x/20/47/4e/20474e1856a00445dba6968a6f65520c.jpg",
    "https://i.pinimg.com/564x/42/65/88/426588077d0e88b81330934673dc90c6.jpg",
]

let coolDucks = [
    "https://i.pinimg.com/564x/25/74/a9/2574a939614492c27d75b37bfc9a23d3.jpg",
    "https://i.pinimg.com/564x/69/18/c8/6918c8e1001fa3b61e4de1e43499ccb9.jpg",
    "https://i.pinimg.com/736x/c8/8e/62/c88e62190282de29c0f20cae592780ce.jpg",
    "https://i.pinimg.com/736x/cf/70/a7/cf70a7274093912bae27f84bba10add1.jpg",
]

let randomHappy = Math.floor(Math.random() * happyDucks.length)
let randomSad = Math.floor(Math.random() * sadDucks.length)
let randomStressed = Math.floor(Math.random() * stressedDucks.length)
let randomAngry = Math.floor(Math.random() * angryDucks.length)
let randomSleepy = Math.floor(Math.random() * sleepyDucks.length)
let randomRomantic = Math.floor(Math.random() * romanticDucks.length)
let randomChaotic = Math.floor(Math.random() * chaoticDucks.length)
let randomSilly = Math.floor(Math.random() * sillyDucks.length)
let randomCool = Math.floor(Math.random() * coolDucks.length)

let frame = document.getElementById("frame");
function generateDuck() {
    let randomIndex;
    if (userInput.value == "happy") {
        randomIndex = Math.floor(Math.random() * happyDucks.length);
        frame.style.background = "url('" + happyDucks[randomIndex] + "')";
    } else if (userInput.value == "sad") {
        randomIndex = Math.floor(Math.random() * sadDucks.length)
        frame.style.background = "url('" + sadDucks[randomIndex] + "')";
    } else if (userInput.value == "stressed") {
        randomIndex = Math.floor(Math.random() * stressedDucks.length);
        frame.style.background = "url('" + stressedDucks[randomIndex] + "')";
    } else if (userInput.value == "angry") {
        randomIndex = Math.floor(Math.random() * angryDucks.length);
        frame.style.background = "url('" + angryDucks[randomIndex] + "')";
    } else if (userInput.value == "sleepy") {
        randomIndex = Math.floor(Math.random() * sleepyDucks.length);
        frame.style.background = "url('" + sleepyDucks[randomIndex] + "')";
    } else if (userInput.value == "romantic") {
        randomIndex = Math.floor(Math.random() * romanticDucks.length);
        frame.style.background = "url('" + romanticDucks[randomIndex] + "')";
    } else if (userInput.value == "chaotic") {
        randomIndex = Math.floor(Math.random() * chaoticDucks.length);
        frame.style.background = "url('" + chaoticDucks[randomIndex] + "')";
    } else if (userInput.value == "silly") {
        randomIndex = Math.floor(Math.random() * sillyDucks.length);
        frame.style.background = "url('" + sillyDucks[randomIndex] + "')";
    } else if (userInput.value == "cool") {
        randomIndex = Math.floor(Math.random() * coolDucks.length);
        frame.style.background = "url('" + coolDucks[randomIndex] + "')";
    }
}

    
    
