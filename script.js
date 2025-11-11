const sliderPC = document.getElementById("pricing-slider");
const sliderPhone = document.getElementById("pricing-slider-phone");
const pageviews = document.querySelector(".pageviews");
const price = document.querySelector(".price span");
const discount = document.querySelector(".discount");

const pricingData = [
  { views: "10K", price: 8 },
  { views: "50K", price: 12 },
  { views: "100K", price: 16 },
  { views: "500K", price: 24 },
  { views: "1M", price: 36 },
];

function updatePricing(value) {
  pageviews.textContent = `${pricingData[value].views} Pageviews`;
  price.textContent = `$${pricingData[value].price}.00`;

  const percentage = (value / 4) * 100;
  [sliderPC, sliderPhone].forEach((slider) => {
    if (slider) {
      slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${percentage}%, hsl(224, 65%, 95%) ${percentage}%)`;
    }
  });
}

function syncSliders(changedSlider) {
  const value = parseInt(changedSlider.value);
  [sliderPC, sliderPhone].forEach((slider) => {
    if (slider && slider !== changedSlider) {
      slider.value = value;
    }
  });
  updatePricing(value);
}

function updateDiscountText() {
  discount.textContent = window.innerWidth <= 768 ? "-25%" : "25% discount";
}

[sliderPC, sliderPhone].forEach((slider) => {
  if (slider) {
    slider.addEventListener("input", () => syncSliders(slider));
  }
});

window.addEventListener("resize", updateDiscountText);
window.addEventListener("load", () => {
  updatePricing(2);
  updateDiscountText();
});

const toggleInput = document.getElementById("toggle-billing-time");
if (toggleInput) {
  toggleInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      toggleInput.checked = !toggleInput.checked;
    }
  });
}

const trialBtn = document.querySelector(".trial-btn");
if (trialBtn) {
  trialBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      trialBtn.click();
    }
  });
}
