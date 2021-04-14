/////Grabs all Elements that might be clicked on /////
const welcomeScreen = document.querySelector('#welcomeSection')
const signUpScreen = document.querySelector('#signUpSection')
const signInScreen = document.querySelector('#loginSection')
const allBusinessScreen = document.querySelector('#businessListSection')
const createBusinessScreen = document.querySelector('#createBusiness')
const singleBusinessScreen = document.querySelector('#businessPage')

const home = document.querySelector("#homeNav")
const signUp = document.querySelector("#signUpNav")
const login = document.querySelector("#loginNav")
const allBusiness = document.querySelector("#allBusinessNav")
let singleBusiness = document.querySelector("#business")

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
})

singleBusiness.addEventListener('click', () => {
    switchToSingleBusinessScreen()
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
    console.log("Home")
}