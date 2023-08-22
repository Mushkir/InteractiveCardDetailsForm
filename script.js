function confirmAndShow(){
    if(validateName() && validateCardNumber() && validateMonth() && validateYear() && validateCvc())
    {
        showCardHolderName()
        showCardNumber()
        showCardMonth()
        showCardYear()
        showCardCvc()
        popUpOpen()
    }
    else{
        alert('Enter valid data...')
    }
}

const btnClose = document.getElementById('close')
btnClose.addEventListener('click',
closePopUp()
)

// Function for Popup Open
function popUpOpen(){
    let popup = document.querySelector('.popup')
    popup.classList.add('popup-open')
}

// Function for Popup Close
function closePopUp(){
    let popup = document.querySelector('.popup')
    popup.classList.remove('popup-open')
}



function showCardHolderName() {
    const holderName = document.getElementById('holder-name');
    const cardName = document.getElementById('name').value;
    holderName.textContent = cardName;
}

function showCardNumber(){
    const card_front_number = document.getElementById('card-front-number')
    const card_number = document.getElementById('crdNumber').value
    card_front_number.innerHTML = card_number
}

function showCardMonth(){
    const front_exp_month = document.getElementById('card-exp-month')
    const exp_month = document.getElementById('month').value

    if(exp_month<10)
    {
        front_exp_month.innerHTML = '0'+exp_month
    }
    else{
        front_exp_month.innerHTML = exp_month
    }
}

function showCardYear(){
    const front_exp_year = document.getElementById('card-exp-year')
    const exp_year = document.getElementById('year').value

    front_exp_year.innerHTML = exp_year
}

function showCardCvc(){
    const card_back_cvc = document.getElementById('cvc-number')
    const cvc_number = document.getElementById('cvc').value

    card_back_cvc.innerHTML = cvc_number
}


// Validation Functions
function validateName() {
    const nameBox = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    const name = nameBox.value.trim();

    if (name.length === 0) {
        nameError.textContent = "Name can't be blank";
        nameBox.style.borderColor = 'red';
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.textContent = 'Please enter your full name';
        nameBox.style.borderColor = 'red';
        return false;
    }

    nameError.textContent = '';
    nameBox.style.borderColor = 'green';
    return true;
}

function validateCardNumber() {
    const cardNumBox = document.getElementById('crdNumber');
    const cardError = document.getElementById('card-number-error');
    const cardNumber = cardNumBox.value

    if (cardNumber.length === 0) {
        cardError.textContent = "Card number can't be empty";
        cardNumBox.style.borderColor = 'red';
        return false;
    }

    if (cardNumber.length !== 19) {
        cardError.textContent = 'Card number must be 16 digits';
        cardNumBox.style.borderColor = 'red';
        return false;
    }

    // if (!/^\d+$/.test(cardNumber)) {
    //     cardError.textContent = 'Card number can only contain digits';
    //     cardNumBox.style.borderColor = 'red';
    //     return false;
    // }

    cardError.textContent = '';
    cardNumBox.style.borderColor = 'green';
    return true;
}

function validateMonth() {
    const monthInput = document.getElementById('month');
    const monthError = document.getElementById('month-year-error');
    const month = parseInt(monthInput.value);

    if (isNaN(month) || month <= 0 || month > 12) {
        monthError.textContent = 'Invalid month';
        monthInput.style.borderColor = 'red';
        return false;
    }

    monthError.textContent = '';
    monthInput.style.borderColor = 'green';
    return true;
}

function validateYear() {
    const yearInput = document.getElementById('year');
    const monthError = document.getElementById('month-year-error');
    const year = yearInput.value.trim();

    if (year.length === 0) {
        monthError.textContent = "Year can't be blank";
        yearInput.style.borderColor = 'red';
        return false;
    }

    if (!/^\d+$/.test(year)) {
        monthError.textContent = 'Year can only contain digits';
        yearInput.style.borderColor = 'red';
        return false;
    }

    monthError.textContent = '';
    yearInput.style.borderColor = 'green';
    return true;
}

function validateCvc() {
    const cvcInput = document.getElementById('cvc');
    const cvcError = document.getElementById('cvc-error');
    const cvc = cvcInput.value.trim();

    if (cvc.length === 0) {
        cvcError.textContent = "CVC can't be blank";
        cvcInput.style.borderColor = 'red';
        return false;
    }

    if (!/^\d+$/.test(cvc)) {
        cvcError.textContent = 'CVC can only contain digits';
        cvcInput.style.borderColor = 'red';
        return false;
    }

    if (cvc.length !== 3) {
        cvcError.textContent = 'CVC must be 3 digits';
        cvcInput.style.borderColor = 'red';
        return false;
    }

    cvcError.textContent = '';
    cvcInput.style.borderColor = 'green';
    return true;
}
