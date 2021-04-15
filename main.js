/////Grabs all Elements that might be clicked on /////
const welcomeScreen = document.querySelector('#welcomeSection')
const signUpScreen = document.querySelector('#signUpSection')
const signInScreen = document.querySelector('#loginSection')
const allBusinessScreen = document.querySelector('#businessListSection')
const createBusinessScreen = document.querySelector('#createBusiness')
const singleBusinessScreen = document.querySelector('#businessPage')
const profileScreen = document.querySelector('#profilePage')
const logoutButton = document.querySelector('#logoutNav')
const home = document.querySelector("#homeNav")
const signUp = document.querySelector("#signUpNav")
const login = document.querySelector("#loginNav")
const allBusiness = document.querySelector("#allBusinessNav")
const logout = document.querySelector("#logoutNav")
const myBusiness = document.querySelector("#myBusinessNav")
const profile = document.querySelector("#profileNav")
const businessList = document.querySelector("#businessList")
const singleBusinessList = document.querySelector("#singleBusinessList")
const createSubmit = document.querySelector("#createBusinessForm")
const businessEditButton = document.querySelector("#businessEdit")
const businessDeleteButton = document.querySelector("#businessDelete")

let singleId;

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

logoutButton.addEventListener('click', () => {
    logoutClear()
})

myBusiness.addEventListener('click', () => {
    switchToCreateBusinessScreen()
    getAllUserBusiness()
})

profile.addEventListener('click', () => {
    switchToProfileScreen()
})



///// Switch Screen Functions /////

const switchToHome = () => {
    welcomeScreen.classList.remove("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
}
const switchToSignUp = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.remove("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
}

const switchToLogin = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.remove("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
}

const switchToAllBusiness = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.remove("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
}

const switchToCreateBusinessScreen = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.remove("hidden")
    singleBusinessScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
}

const switchToSingleBusinessScreen = (id) => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.remove("hidden")
    profileScreen.classList.add("hidden")
    getSingleBusiness(id)
}

const switchToLoggedIn = () => {
    logout.classList.remove("hidden")
    signUp.classList.add("hidden")
    login.classList.add("hidden")
    myBusiness.classList.remove("hidden")
    profile.classList.remove("hidden")
}
const switchToLoggedOut = () => {
    logout.classList.add("hidden")
    signUp.classList.remove("hidden")
    login.classList.remove("hidden")
    myBusiness.classList.add("hidden")
    profile.classList.add("hidden")
}

const switchToProfileScreen = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
    profileScreen.classList.remove("hidden")
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

    const email = document.querySelector('#loginEmail').value
    const password = document.querySelector('#loginPassword').value

    try {
        const response = await axios.post('http://localhost:3000/user/login', {
            email: email,
            password: password
    })

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

createSubmit.addEventListener('submit', async (e) => {
    e.preventDefault()


    let userId = localStorage.getItem('userId')
    const name = document.querySelector('#businessName').value
    const address = document.querySelector('#businessAddress').value
    const description = document.querySelector('#businessDescription').value
    const type = document.querySelector('#businessType').value
    const image = document.querySelector('#businessImg').value
    console.log(name, address, description, type, image)

    try {
        const response = await axios.post(`http://localhost:3000/business/${userId}`, {
            name: name,
            address: address,
            description: description,
            type: type,
            img: image
    })
    } catch (error) {
        console.log(error)
    }
})


const getAllBusiness = async () =>{
    /////Removes all business from DOM//////
    while(businessList.firstChild) {
        businessList.firstChild.remove()
    }

    try {
        const response = await axios.get('http://localhost:3000/business', {
    })
    /////Add business into the DOM/////
    for(i = 0; i<response.data.business.length; i++){
        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')


        div.setAttribute("businessId", response.data.business[i].id)
        div.classList.add("business")
        h2.setAttribute("id","businessName")
        p.setAttribute("id", "businessDescription")

        h2.innerText = response.data.business[i].name
        p.innerText = response.data.business[i].description

        div.append(h2)
        div.append(p)
        div.addEventListener('click', () => {
            switchToSingleBusinessScreen(div.getAttribute("businessId"))
        })
        businessList.append(div)
    }
    } catch (error) { 
        console.log(error)
    }
}

const getAllUserBusiness = async () =>{
    userId = localStorage.getItem('userId')
    try {
        const response = await axios.get(`http://localhost:3000/business/`, {
    })
    
    console.log(response)
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')


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

const getSingleBusiness = async (id) =>{
    /////Removes all business from DOM//////
    while(singleBusinessList.firstChild) {
        singleBusinessList.firstChild.remove()
    }
    singleId = id
    try {
        const response = await axios.get(`http://localhost:3000/business/${id}`, {
    })
    /////Add business into the DOM/////
    
    console.log(id, singleId)
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')


    div.classList.add("business")
    h2.setAttribute("id","businessName")
    p.setAttribute("id", "businessDescription")

    h2.innerText = response.data.business.name
    p.innerText = response.data.business.description

    div.append(h2)
    div.append(p)

    singleBusinessList.append(div)
    

    } catch (error) { 
        console.log(error)
    }
}

businessEditButton.addEventListener('click', () => {
    businessEdit(singleId)
})

businessDeleteButton.addEventListener('click', () => {
    businessDelete()
})

const businessDelete = async () => {
    console.log(singleId)
    let response = await axios.delete(`http://localhost:3000/business/${singleId}`)
    console.log(response)
    switchToAllBusiness()
    getAllBusiness()
    
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









