// Dropdown se size chunne par price aur email link badalta hai
var select = document.getElementById('size');
var priceBox = document.getElementById('price');
var emailBtn = document.getElementById('wa');

function updateOrder() {
  var parts = select.value.split('|');   // ["Cup (1 scoop)", "100"]
  var name = parts[0];
  var price = parts[1];

  priceBox.textContent = 'Rs. ' + price;

  emailBtn.href =
    'mailto:gasif9684@gmail.com' +
    '?subject=' + encodeURIComponent('Ice cream order') +
    '&body=' + encodeURIComponent('Hi! I would like to order strawberry ice cream: ' + name);
}

select.addEventListener('change', updateOrder);
updateOrder();