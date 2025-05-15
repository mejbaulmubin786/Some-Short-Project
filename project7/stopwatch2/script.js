const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {

  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('startButton')) {
      // btn.style.color = 'red';
    } else if (styles.contains('resetButton')) {
      // btn.style.color = 'blue';
    } else {
      // btn.style.color = 'green';
    }

  })


});