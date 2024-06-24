/* ------------------------------------------------------------------------------------------------------------------- */

function showHideField() {
  const deliveryRadio = document.getElementById("DeliveryRadio");
  const collectRadio = document.getElementById("CollectRadio");
  const deliveryInput = document.getElementById("Deliveryaddres");
  const collectInst = document.getElementById("collectionInst");

  if (deliveryRadio.checked) {
    deliveryInput.style.display = "flex";
    collectInst.style.display = "none";
  } else if (collectRadio.checked) {
    deliveryInput.style.display = "none";
    collectInst.style.display = "flex";
  } else {
    // Handle no selection case (optional)
    deliveryInput.style.display = "none";
    collectInst.style.display = "none";
  }
}

/* ------------------------------------------------------------------------------------------------------------------- */

const orderSelect = document.getElementById("OrderSelect");
const shirtsDiv = document.querySelector(".shirts");
const cupsDiv = document.querySelector(".Drinkware");
const otherDiv = document.querySelector(".other");

function showOrderDetails() {
  const selectedValue = orderSelect.value;

  shirtsDiv.style.display = "none";
  cupsDiv.style.display = "none";
  otherDiv.style.display = "none";

  if (selectedValue === "Shirts&hoodies") {
    shirtsDiv.style.display = "flex";
  } else if (selectedValue === "Mugs&Cups") {
    cupsDiv.style.display = "flex";
  } else if (selectedValue === "Other") {
    otherDiv.style.display = "flex";
  }
}

// Call the function initially to handle default selection
showOrderDetails();

// Call the function again whenever the selection changes
orderSelect.addEventListener("change", showOrderDetails);

/* ----------------------------------------Shirts And Hoodies----------------------------------------------------------------- */

const shirtCheckbox = document.getElementById('cCBShrit');
  const hoodieCheckbox = document.getElementById('cCBHoodie');
  const shirtAmountInput = document.querySelector('#Shirtamount input');
  const hoodieAmountInput = document.querySelector('#Hoodieamount input');
  const shirtAmountDiv = document.getElementById('Shirtamount');
  const hoodieAmountDiv = document.getElementById('Hoodieamount');
  const orderDescDiv = document.querySelector('.ShirtColors');

  function showHideInputsAndDesc() {
    const isShirtSelected = shirtCheckbox.checked;
    const isHoodieSelected = hoodieCheckbox.checked;

    shirtAmountDiv.style.display = isShirtSelected ? 'flex' : 'none';
    hoodieAmountDiv.style.display = isHoodieSelected ? 'flex' : 'none';

    const hasInput = shirtAmountInput.value !== '' || hoodieAmountInput.value !== '' || isShirtSelected || isHoodieSelected;
    orderDescDiv.style.display = (shirtAmountInput.value !== '' || hoodieAmountInput.value !== '') ? 'flex' : 'none';

  }

  // Call the function initially to handle default state (hide text area initially)
  showHideInputsAndDesc(); // This ensures initial check

  // Call the function again whenever a checkbox is checked/unchecked or an amount changes
  shirtCheckbox.addEventListener('change', showHideInputsAndDesc);
  hoodieCheckbox.addEventListener('change', showHideInputsAndDesc);
  shirtAmountInput.addEventListener('input', showHideInputsAndDesc);
  hoodieAmountInput.addEventListener('input', showHideInputsAndDesc);

/* -----------------------------------------------Shirts Font and image---------------------------------------------------- */

const ShirtfontCheckbox = document.getElementById('cCBShirtsI');
const ShirtimageCheckbox = document.getElementById('cCBShirtsF');

const fontNameDiv = document.getElementById('ShirtFontName');
const ShirtfontSizeDiv = document.getElementById('ShirtFontSize');
const ShirtimageDetailsDiv = document.getElementById('ShirtImageDetails');

function showHideFontAndImageSections() {
    const isFontSelected = ShirtfontCheckbox.checked;
    const isImageSelected = ShirtimageCheckbox.checked;

    fontNameDiv.style.display = isFontSelected ? 'flex' : 'none';
    ShirtfontSizeDiv.style.display = isFontSelected ? 'flex' : 'none';
    ShirtimageDetailsDiv.style.display = isImageSelected ? 'flex' : 'none';

    console.log("Font Selected:", isFontSelected);
    console.log("Image Selected:", isImageSelected);
}

// Call the function initially to handle default state
showHideFontAndImageSections();

// Add event listeners to checkboxes
ShirtfontCheckbox.addEventListener('change', showHideFontAndImageSections);
ShirtimageCheckbox.addEventListener('change', showHideFontAndImageSections);


/* -----------------------------------------------Drinkware---------------------------------------------------- */

const glasCheckbox = document.getElementById('cCBGlas');
const mugCheckbox = document.getElementById('cCBMug');
const tumblerCheckbox = document.getElementById('cCBTumbler');
const fontCheckbox = document.getElementById('cCBDF');
const imageCheckbox = document.getElementById('cCBDI');

const glasAmountDiv = document.getElementById('GlasAmount');
const mugAmountDiv = document.getElementById('MugAmount');
const tumblerAmountDiv = document.getElementById('TumblerAmount');
const fontSectionDiv = document.getElementById('DWFontName');
const fontSizeDiv = document.getElementById('DWFontSize');
const imageUploadDiv = document.getElementById('DrinkWareImageUpload');
const imageDetailsDiv = document.getElementById('DrinkWareImageDetails');

function showHideSections() {
    const isGlasSelected = glasCheckbox.checked;
    const isMugSelected = mugCheckbox.checked;
    const isTumblerSelected = tumblerCheckbox.checked;
    const isFontSelected = fontCheckbox.checked;
    const isImageSelected = imageCheckbox.checked;

    glasAmountDiv.style.display = isGlasSelected ? 'flex' : 'none';
    mugAmountDiv.style.display = isMugSelected ? 'flex' : 'none';
    tumblerAmountDiv.style.display = isTumblerSelected ? 'flex' : 'none';
    fontSectionDiv.style.display = isFontSelected ? 'flex' : 'none';
    fontSizeDiv.style.display = isFontSelected ? 'flex' : 'none';
    imageUploadDiv.style.display = isImageSelected ? 'flex' : 'none';
    imageDetailsDiv.style.display = isImageSelected ? 'flex' : 'none';
}

// Call the function initially to handle default state
showHideSections();

// Add event listeners to checkboxes
glasCheckbox.addEventListener('change', showHideSections);
mugCheckbox.addEventListener('change', showHideSections);
tumblerCheckbox.addEventListener('change', showHideSections);
fontCheckbox.addEventListener('change', showHideSections);
imageCheckbox.addEventListener('change', showHideSections);

/* ------------------------------------------------other--------------------------------------------------- */


