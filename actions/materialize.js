document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});