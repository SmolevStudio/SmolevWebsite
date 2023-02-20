function toggleNav(){
  var state = document.getElementsByTagName("div")[0].style.display
  if(state == 'block'){
    document.getElementsByTagName("div")[0].style.display = 'none';
  }

  else{
    document.getElementsByTagName("div")[0].style.display = 'block';
  }

}
