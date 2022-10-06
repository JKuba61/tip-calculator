const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const calc = document.querySelector('.count')
const err = document.querySelector('.error')
const costInfo = document.querySelector('.costInfo')
const cost = document.querySelector('.cost')


const calcBill = () => {
	const bill = Math.ceil((price.value / people.value) * tip.value * 100) / 100
	costInfo.style.display = 'block'
	cost.textContent = `${bill}$`
}

const check = () => {
	if (price.value < 1 && people.value < 1) {
		err.textContent = 'Please put the values in!'
		costInfo.style.display = 'none'
	} else if (price.value < 1) {
		err.textContent = 'The cost must not be empty!'
		costInfo.style.display = 'none'
	} else if (people.value < 1) {
		err.textContent = 'The number of people cant be less than 1!'
		costInfo.style.display = 'none'
	} else {
		err.textContent = ''
		calcBill()
	}
}

calc.addEventListener(`click`, check)
