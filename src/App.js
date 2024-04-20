import { useState } from "react"
import "./App.css"

const App = () =>{
  const[emailCheck, setEmailCheck] = useState('')
  const[passCheck, setPassCheck] = useState('')
  const[confirmPassCheck, setConfirmPassCheck] = useState('')
  const[btnCheck, setBtnCheck] = useState('')
  const[isFound,setIsFound] = useState(false)
  const[isPass,setIsPass] = useState(false)
  const[isConfirmPass,setIsConfirmPass] = useState(false)
  const[emailWarning, setEmailWarning] = useState('')
  const[passWarning, setPassWarning] = useState('')
  const[confirmPassWarning, setConfirmPassWarning] = useState('')


const inpEmail = (e) => {
  const queryEmail = e.target.value
  setEmailCheck(queryEmail)
  if(queryEmail.includes("@") && queryEmail.includes(".com") && queryEmail.includes('gmail')){
    setIsFound(true)
    setEmailWarning('')
  }
  else{
    setEmailWarning('Invalid Email Format')
    setIsFound(false)
  }

}
const inpPass = (e) => {
let queryPass = e.target.value
setPassCheck(queryPass)
if(queryPass.length >= 8){
  setIsPass(true)
  setPassWarning('')
}
else{
  setIsPass(false)
  setPassWarning('Password must be at least 8 characters')
}

}
const inpConfirmPass = (e) => {
  let queryConfirmPass = e.target.value
  setConfirmPassCheck(queryConfirmPass)
  if(queryConfirmPass == passCheck){
    setIsConfirmPass(true)
    setConfirmPassWarning('')
  }
  else{
    setIsConfirmPass(false)
    setConfirmPassWarning('Password do not match')

  }

}
const submitBtn = () => {
if(isFound && isPass && isConfirmPass){
  // setBtnCheck()
  alert("Form submitted successfully")
}
else{
  alert('Cannot submit the form')
}
}




  return(
    <div className="container">
    <label htmlFor="email">Email:</label>
    <input value={emailCheck} type={"email"} onChange={inpEmail} id="email"/>
    <p className="emailWarning">{emailWarning}</p>
    <label htmlFor="password">Password:</label>
    <input value={passCheck} type={"password"} onChange={inpPass} id="password"/>
    <p className="passWarning">{passWarning}</p>
    <label htmlFor="confirmpassword">Confirm Password:</label>
    <input value={confirmPassCheck} type={"password"} onChange={inpConfirmPass} id="confirmpassword"/>
    <p className="confirmPassWarning">{confirmPassWarning}</p>
    <div className="btnDiv">
    <button type={"submit"} onClick={submitBtn} className="btn">Sign up</button>
    </div>
    </div>
  )
}
export default App