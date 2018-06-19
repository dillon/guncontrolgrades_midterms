if yarn start or npm start gives error, try $ `nvm use node`
if that doesn't work, try deleting node_modules folder and running $ `npm install`

# radio buttons
each candidate is rendered as a radio button

when button is clicked:
LOCAL:
	1. split the string into an array
	2. determine constants for current state and future state of rSelected
		if current state and future state are the same
			change future state to empty
	3. fire props.handleChange with each of the two constants as arguments
	4. setState with the future state constant



MANAGED IN PARENT:
handleChange takes two args and will have an if/else statement:
	create index and a temp value
	if first arg length is 0
		add second arg to value
	else if index of first arg in this.state.value is found
		index and remove first arg
		add future state arg to temp value
	else
		index and remove second arg 
	push tempvalue to setState




	three options:
	1.
		state = []
		pressed = [x]
		futureState = [pressed]

	2.
		state = [x]
		pressed = [x]
		futureState = []

	3.
		state = [x]
		pressed = [y]
		futureState = [y]

local:
if current state = pressed
	future state = []
else
	future state = pressed



parent:

currentState = []
futureState = [x]
	push futureState

currentState = [x]
futureState = []
	remove currentState

currentState = [x]
futureState = [y]
	remove currentState
	push futureState