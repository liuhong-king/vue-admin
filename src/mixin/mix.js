export default {
  computed:{
    contentheght:function(){
      let winWidth
      if (window.innerWidth)
        winWidth = window.innerWidth
      else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth
      if (winWidth < 1660) {
        return 470;
      }else {
        return 650;
      }
    }
  }
}
