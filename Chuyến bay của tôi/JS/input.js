function CheckThongTin() {
    var name = document.getElementById("Ten").value;
    var lastname = document.getElementById("Ho").value;
    var id = document.getElementById("MaDatCho").value;

    var nameCheck = /^[A-Za-z]+$/;
    var lastnameCheck = /^[A-Za-z]+$/;
    var idCheck = /^[A-Za-z0-9]+$/;


    if (name == "" || lastname == "" || id == "") {
      const openPopupButton = document.querySelector('.button');
      const overlay = document.getElementById('overlay');
      const closeButton = document.getElementById('close-btn');

      openPopupButton.addEventListener('click', () => {
        overlay.style.display = 'block';
      });

      closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
      });

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.style.display = 'none';
        }
      });
    }


    else if (!nameCheck.test(name) || !idCheck.test(id) || !lastnameCheck.test(lastname)) {
      const openPopupButton = document.querySelector('.button');
      const overlay = document.getElementById('saiDinhDang');
      const closeButton = document.getElementById('close-btn');

      openPopupButton.addEventListener('click', () => {
        overlay.style.display = 'block';
      });

      closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
      });

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.style.display = 'none';
        }
      });
    }


  }