const Email = document.querySelector("#Mail")
const Password = document.querySelector("#Pass")
const Button = document.querySelector('#Btn')
const Alert = document.querySelector('#alert')

Button.addEventListener("click",(e)=>{
    e.preventDefault()
    if(Password.value === "" || Password.value ===null){
        Alert.innerHTML = "You must enter a password"

        
    }else if(Email.value === "" || Email.value ===null){
        Alert.innerHTML = "You must enter a Email"
    }else if(Password.value.length <6){
        Alert.innerHTML = 'Please enter minimum 6 character'
    
    }else if(Password.value.length >20){
        Alert.innerHTML = 'Maximum 20 character only'
    }else{
        Alert.innerHTML = "successul logged in"
        location.assign("https://athira-portfolio.web.app/")
    }

    setTimeout(()=>{
        Alert.innerHTML = ""
    },2000)

})