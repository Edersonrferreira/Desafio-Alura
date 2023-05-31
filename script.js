function criptografar() {
    var texto = document.querySelector('.textarea').value;
  
    var resCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
      .replace(/o/g, "ober").replace(/u/g, "ufat");
  
    document.querySelector('.mensagem').value = resCripto;
  }
  
  function descriptografar() {
    var texto = document.querySelector('.textarea').value;
  
    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
      .replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.querySelector('.mensagem').value = resultDescripto;
  }
  
  function copiar() {
    var mensagem = document.querySelector('.mensagem');
    mensagem.select();
    document.execCommand('copy');
  }