import { useState, useEffect } from "react"
import Header from './components/Header/index'


export default function App() {
	const [minutes, setMinutes] = useState(1)
	const [seconds, setSeconds] = useState(10)
/*
	useEffect ( () => {
		if(seconds === 0 && minutes === 0){
			alert("Tempo acabaou")
		}else{
			setTimeout(() => {
				setSeconds(seconds -1)
				resetSeconds()
	
			}, 1000)
		}
		
	})

	function resetSeconds(){
		if(seconds === 0){
			setSeconds(59)
			desiMinutes()
		}
	}

	function desiMinutes(){
		setMinutes(minutes - 1)

	}

	
	*/
	
	return(
		<>
		<Header/>

		</>
	)
}


