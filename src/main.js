var btn = document.createElement('button');
btn.id = "tjscrollbutton";
btn.addEventListener("click", () => { 
  window.scroll({
    top: document.documentElement.scrollHeight - document.documentElement.clientHeight,
    behavior: 'smooth'
  });
  // btn.remove();
  btn.blur();
});
document.body.appendChild(btn);

var css = 'button#tjscrollbutton { ' + 
            'position: fixed;' + 
            'left: 0;' + 
            'right: 0;' +
            'bottom: 0;' +
            'width: 100vw;' +
            'height: 2vh;' +
            'background-color: #FFFFFF00;' +
            'border-color: #FFFFFF00;' + 
          '}\n' + 
          'button#tjscrollbutton:hover {' +
            'position: fixed;' + 
            'left: 0;' + 
            'right: 0;' +
            'bottom: 0;' +
            'width: 100vw;' +
            'height: 2vh;' +
            'background-color: #666666AA;' +
            'border-color: #666666AA;' + 
          '}';
var style = document.createElement('style');
if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
document.getElementsByTagName('head')[0].appendChild(style);