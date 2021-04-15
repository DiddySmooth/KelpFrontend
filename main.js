/////Grabs all Elements that might be clicked on /////
const welcomeScreen = document.querySelector('#welcomeSection')
const signUpScreen = document.querySelector('#signUpSection')
const signInScreen = document.querySelector('#loginSection')
const allBusinessScreen = document.querySelector('#businessListSection')
const createBusinessScreen = document.querySelector('#createBusiness')
const singleBusinessScreen = document.querySelector('#businessPage')
const logoutButton = document.querySelector('#logoutNav')
const home = document.querySelector("#homeNav")
const signUp = document.querySelector("#signUpNav")
const login = document.querySelector("#loginNav")
const allBusiness = document.querySelector("#allBusinessNav")
const logout = document.querySelector("#logoutNav")
let singleBusiness = document.querySelector("#business")

const signUpForm = document.querySelector("#signUpForm")
/////Add Events listeners to elements /////


home.addEventListener('click', () => {
    switchToHome()
})

signUp.addEventListener('click', () => {
    switchToSignUp()
})

login.addEventListener('click', () => {
    switchToLogin()
})

allBusiness.addEventListener('click', () => {
    switchToAllBusiness()
    getAllBusiness()
})

singleBusiness.addEventListener('click', () => {
    switchToSingleBusinessScreen()
    
})

logoutButton.addEventListener('click', () => {
    logoutClear()
})


///// Switch Screen Functions /////

const switchToHome = () => {
    welcomeScreen.classList.remove("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
}
const switchToSignUp = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.remove("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
}

const switchToLogin = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.remove("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
}

const switchToAllBusiness = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.remove("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
}

const switchToCreateBusinessScreen = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.remove("hidden")
    singleBusinessScreen.classList.add("hidden")
}

const switchToSingleBusinessScreen = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.remove("hidden")
}

const switchToLoggedIn = () => {
    logout.classList.remove("hidden")
    signUp.classList.add("hidden")
    login.classList.add("hidden")
}
const switchToLoggedOut = () => {
    logout.classList.add("hidden")
    signUp.classList.remove("hidden")
    login.classList.remove("hidden")
}

const logoutClear = () => {
    localStorage.clear()
    authCheck()
    switchToHome()
}

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const name = document.querySelector('#signUpName').value
    const email = document.querySelector('#signUpEmail').value
    const password = document.querySelector('#signUpPassword1').value
    const password2 = document.querySelector('#signUpPassword2').value
    
    console.log(name, email, password, password2)
    try {
        const response = await axios.post('http://localhost:3000/user', {
            name: name,
            email: email,
            password: password
    })
    } catch (error) {
        console.log(error)
    }
})

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    console.log("submitted")
    const email = document.querySelector('#loginEmail').value
    const password = document.querySelector('#loginPassword').value

    
    console.log(email, password)
    try {
        const response = await axios.post('http://localhost:3000/user/login', {
            email: email,
            password: password
    })
    console.log(response)
    const userId = await response.data.id
    const userName =  await response.data.name
    localStorage.setItem('userId', userId) 
    localStorage.setItem('userName', userName) 
    switchToHome()
    authCheck()
    } catch (error) {
        console.log(error)
    }

})

const getAllBusiness = async () =>{
    console.log("getAllBusiness")
    try {
        const response = await axios.get('replace with route', {
    })
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')

    div.setAttribute("businessId", id)
    div.setAttribute("id","business")
    h2.setAttribute("id","businessName")
    p.setAttribute("id", "businessDescription")

    h2.innerText = response.data.name
    p.innerText = response.data.description

    div.append(h2)
    div.append(p)


    } catch (error) { 
        console.log(error)
    }
}



const authCheck = () => {
    const userId = localStorage.getItem('userId')
    if (userId) {
        // let usersName = localStorage.getItem('userName') may need this later
        switchToLoggedIn()
        switchToHome()
    } else {
        
        switchToLoggedOut()
    }
}
authCheck()