function changeColor() {
    const colors = ['--Rosewater', '--Flamingo', '--Pink', '--Mauve', '--Red', '--Maroon', '--Peach', '--Yellow', '--Green', '--Teal', '--Sky', '--Sapphire', '--Blue', '--Lavender'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    const shadowWords = document.querySelectorAll('.shadow-words');
    shadowWords.forEach(word => {
      word.style.color = `var(${randomColor})`;
      word.style.textShadow = `0px 0px 4px var(${randomColor})`;
    });
}
window.onload = changeColor; 