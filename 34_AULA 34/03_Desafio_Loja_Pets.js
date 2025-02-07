const pet1FoodSelect = document.getElementById('pet1-food');
const pet1AccessorySelect = document.getElementById('pet1-accessory');
const pet2FoodSelect = document.getElementById('pet2-food');
const pet2AccessorySelect = document.getElementById('pet2-accessory');
const pet3FoodSelect = document.getElementById('pet3-food');
const pet3AccessorySelect = document.getElementById('pet3-accessory');
const totalPriceElement = document.getElementById('total-price');

pet1FoodSelect.addEventListener('change', calculateTotalPrice);
pet1AccessorySelect.addEventListener('change', calculateTotalPrice);
pet2FoodSelect.addEventListener('change', calculateTotalPrice);
pet2AccessorySelect.addEventListener('change', calculateTotalPrice);
pet3FoodSelect.addEventListener('change', calculateTotalPrice);
pet3AccessorySelect.addEventListener('change', calculateTotalPrice);

function calculateTotalPrice() {
  const pet1FoodPrice = parseInt(pet1FoodSelect.value);
  const pet1AccessoryPrice = parseInt(pet1AccessorySelect.value);
  const pet2FoodPrice = parseInt(pet2FoodSelect.value);
  const pet2AccessoryPrice = parseInt(pet2AccessorySelect.value);
  const pet3FoodPrice = parseInt(pet3FoodSelect.value);
  const pet3AccessoryPrice = parseInt(pet3AccessorySelect.value);
  
  const totalPrice = pet1FoodPrice + pet1AccessoryPrice + pet2FoodPrice + pet2AccessoryPrice + pet3FoodPrice + pet3AccessoryPrice;
  totalPriceElement.textContent = totalPrice;
}
