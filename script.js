function valida_form (){
  
  if (usuario.value == "") {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algum campo ainda está vazio\nPreencha-os para continuar'
      })
  }
  
  if (senha.value == "") {
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Algum campo ainda está vazio\nPreencha-os para continuar',
    })
  }
}