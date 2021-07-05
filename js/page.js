var emailBtn = document.getElementById('email');


var show_modal = function () {

  uglipop({
    class: 'emailModal', //styling class for Modal
    source: 'div',
    content: 'emailModal'
  });

};


emailBtn.addEventListener('click', show_modal, false);


