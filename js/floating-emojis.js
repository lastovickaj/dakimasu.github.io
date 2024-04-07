// Array of emojis
const emojis = ['(✿◠‿◠)', '≧◡≦', '(▰˘◡˘▰)', '(●´ω｀●)', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '（ミ￣ー￣ミ）', '(づ｡◕‿‿◕｡)づ', '◎[▪‿▪]◎', '=＾● ⋏ ●＾=', '(•‿•)', '( •_•)>⌐■-■', '(ツ)', '(⌐■_■)', 'ᕙ(⇀‸↼‶)ᕗ', '(,,◕ ⋏ ◕,,)', '(ᗒᗣᗕ)՞', '(0.o)', '(E.E)', '(P.P)', '>.>', '<.<', ':3', '^^'];
const colors = ['--Rosewater', '--Flamingo', '--Pink', '--Mauve', '--Red', '--Maroon', '--Peach', '--Yellow', '--Green', '--Teal', '--Sky', '--Sapphire', '--Blue', '--Lavender'];
// Function to create and animate emojis
function createEmoji() {
    // Create a new emoji element
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.classList.add('emoji');
  
    // Set random values for initial top and left positions
    emoji.style.top = Math.random() * 100 + 'vh';
    emoji.style.left = Math.random() * 100 + 'vw';

    // Select a random color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    emoji.style.color = `var(${randomColor})`;

    // Apply random text style: normal, bold, or italic
    const randomStyle = Math.random();
    if (randomStyle < 0.33) {
        emoji.style.fontWeight = 'bold';
    } 
    if (randomStyle > 0.33 && randomStyle < 0.66) {
        emoji.style.fontStyle = 'italic';
    }
  
    // Set random values for --random-x and --random-y
    emoji.style.setProperty('--random-x', Math.random() * 2 - 1);
    emoji.style.setProperty('--random-y', Math.random() * 2 - 1);
  
    // Append the emoji to the floating-emojis container
    document.getElementById('floating-emojis').appendChild(emoji);
  
    // Remove the emoji element when animation ends
    setTimeout(function() {
      emoji.remove();
    }, 10000);
}  
// Create emojis at regular intervals
setInterval(createEmoji, 1000);