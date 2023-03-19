const Calculator = () => {
	const calcBtn = document.getElementById('calculator')
	const containerCalc = document.querySelector('.calculator')
	const calcHeader = document.querySelector('.calcHeader')
	const keys = document.querySelector('.keys')
	
	const appaerCalc = () => {
		containerCalc.style.height = '0'
		calcHeader.style.display = 'none'
		keys.style.display = 'none'
		calcBtn.addEventListener('click', (e) => {
			e.preventDefault()
				containerCalc.style.height = containerCalc.style.height == '50%' ? '0' : '50%'
				calcHeader.style.display = calcHeader.style.display == 'none' ? 'flex' : 'none'
				keys.style.display = keys.style.display == 'none' ? 'grid' : 'none'
		})
	};appaerCalc()


	const input = document.getElementById('input')
	const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

	const calculate = () => {
		input.value = eval(input.value)
	}

	input.addEventListener('keydown', (e) => {
		e.preventDefault()
		if(allowedKeys.includes(e.key)){
			input.value += e.key
		}
		if(e.key === 'Backspace'){
			input.value = input.value.slice(0,-1)
		}
		if(e.key === 'Enter'){
			calculate()
		}
	})


	document.getElementById('equal').addEventListener('click', calculate)
	document.getElementById('clear').addEventListener('click', (e) => {
		e.preventDefault()
		input.value = ''
		input.focus()
	})

	document.querySelectorAll('#charKey').forEach((key) => {
		key.addEventListener('click', (e) => {
			e.preventDefault()
			input.focus()
			const value = e.currentTarget.dataset.value
			input.value += value
		})
	})

};Calculator()