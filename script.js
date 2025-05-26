function randomMove(){
     const randomNumber = Math.random();
    let resultado;
    let image;
    if (randomNumber < 0.5) {
    resultado = "Heads";
    image = "heads.svg";
    } else {
    resultado = "Tails";
    image = "tails.svg";
    }
     document.querySelector('.result').innerHTML = resultado;
     document.querySelector('.coinImage').src = image;

}

document.querySelector('.js-image')
  .addEventListener('click', () => {
    randomMove();
  });
