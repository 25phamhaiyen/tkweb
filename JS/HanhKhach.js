let adultCount = 1;
let childCount = 0;
let infantCount = 0;

function toggleDropdown() {
  const dropdown = document.getElementById("dropdown-menu");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function updatePassengerCount() {
  const passengerCountText = `${adultCount} người lớn${childCount > 0 ? `, ${childCount} trẻ em` : ''}${infantCount > 0 ? `, ${infantCount} em bé` : ''}`;
  document.getElementById("passenger-count").innerText = passengerCountText;
}

function increaseCount(type) {
  if (type === 'adult') {
    adultCount++;
    document.getElementById("adult-count").innerText = adultCount;
  } else if (type === 'child') {
    childCount++;
    document.getElementById("child-count").innerText = childCount;
  } else if (type === 'infant') {
    infantCount++;
    document.getElementById("infant-count").innerText = infantCount;
  }
  updatePassengerCount();
}

function decreaseCount(type) {
  if (type === 'adult' && adultCount > 1) {
    adultCount--;
    document.getElementById("adult-count").innerText = adultCount;
  } else if (type === 'child' && childCount > 0) {
    childCount--;
    document.getElementById("child-count").innerText = childCount;
  } else if (type === 'infant' && infantCount > 0) {
    infantCount--;
    document.getElementById("infant-count").innerText = infantCount;
  }
  updatePassengerCount();
}

document.addEventListener('click', function(event) {
  const isClickInside = document.querySelector('.passenger-selector').contains(event.target);
  if (!isClickInside) {
    document.getElementById("dropdown-menu").style.display = "none";
  }
});