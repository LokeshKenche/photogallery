function openModal(imgSrc) {
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('myModal').style.display = 'flex';
  }

  
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  
  window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      closeModal();
    }
  };