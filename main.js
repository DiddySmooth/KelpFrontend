

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
const updateBusiness = document.querySelector('#updateBusiness')
const updateBusinessForm = document.querySelector('#updateBusinessForm')

const signUpForm = document.querySelector("#signUpForm")
const reviews = document.querySelector('#reviews')
const createReview = document.querySelector('#createReview')
const createReviewForm = document.querySelector('#createReviewForm')
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

createReviewButton.addEventListener('click', () => {
    createUserReview()
})


///// Switch Screen Functions /////
const switchToUpdateBusiness = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    updateBusiness.classList.remove("hidden")
    singleBusinessScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
    reviews.classList.add("hidden")
    createReview.classList.add("hidden")
}

const switchToHome = () => {
    welcomeScreen.classList.remove("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
    updateBusiness.classList.add("hidden")
    reviews.classList.add("hidden")
    createReview.classList.add("hidden")
}

const switchToSignUp = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.remove("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
    updateBusiness.classList.add("hidden")
    reviews.classList.add("hidden")
    createReview.classList.add("hidden")
}

const switchToLogin = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.remove("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
    updateBusiness.classList.add("hidden")
    reviews.classList.add("hidden")
    createReview.classList.add("hidden")
}

const switchToAllBusiness = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.remove("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
    updateBusiness.classList.add("hidden")
    reviews.classList.add("hidden")
    createReview.classList.add("hidden")
}

const switchToCreateBusinessScreen = () => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.remove("hidden")
    singleBusinessScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
    updateBusiness.classList.add("hidden")
    reviews.classList.add("hidden")
    createReview.classList.add("hidden")

}

const switchToSingleBusinessScreen = (id) => {
    welcomeScreen.classList.add("hidden")
    signUpScreen.classList.add("hidden")
    signInScreen.classList.add("hidden")
    allBusinessScreen.classList.add("hidden")
    createBusinessScreen.classList.add("hidden")
    singleBusinessScreen.classList.remove("hidden")
    reviews.classList.remove("hidden")
    profileScreen.classList.add("hidden")
    updateBusiness.classList.add("hidden")
    createReview.classList.add("hidden")

    getSingleBusiness(id)
    displayReviews()
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
    updateBusiness.classList.add("hidden")
    reviews.classList.add("hidden")
    createReview.classList.add("hidden")

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
    console.log(response)
    const userId = await response.data.user.id
    const userName =  await response.data.user.name
    localStorage.setItem('userId', userId) 
    localStorage.setItem('userName', userName) 
    switchToHome()
    authCheck()
    } catch (error) {
        console.log(error)
    }
})

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = document.querySelector('#loginEmail').value
    const password = document.querySelector('#loginPassword').value
    console.log(password)

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
        alert('wrong username and password')
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
    createSubmit.reset()
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
        h2.setAttribute("id","businessNameDisplay")
        p.setAttribute("id", "businessDescriptionDisplay")

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
    for(i = 0; i<response.data.business.length; i++){
        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')


        div.setAttribute("businessId", response.data.business[i].id)
        div.classList.add("business")
        h2.setAttribute("id","businessNameDisplay")
        p.setAttribute("id", "businessDescriptionDisplay")

        h2.innerText = response.data.business[i].name
        p.innerText = response.data.business[i].description

        div.append(h2)
        div.append(p)
        div.addEventListener('click', () => {
            switchToSingleBusinessScreen(div.getAttribute("businessId"))
        })
        businessList.append(div)
        createBusinessScreen.append(div)
    }
    
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
    h2.setAttribute("id","businessNameDisplay")
    p.setAttribute("id", "businessDescriptionDisplay")

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

const businessEdit = async (id) =>{
    // e.preventDefault()

    try {
        const response = await axios.get(`http://localhost:3000/business/${id}`, {
    })
    console.log(response)
    switchToUpdateBusiness()
    let userId = localStorage.getItem('userId')
    document.querySelector('#editBusinessName').value = response.data.business.name
    document.querySelector('#editBusinessAddress').value = response.data.business.address
    document.querySelector('#editBusinessDescription').value = response.data.business.description
    document.querySelector('#editBusinessType').value = response.data.business.type
    document.querySelector('#editBusinessImg').value = response.data.business.image

    } catch (error) {
        console.log(error)
    }
}

updateBusinessForm.addEventListener('submit', async (e) => {
    e.preventDefault() 
    let userId = localStorage.getItem('userId')
    const name = document.querySelector('#editBusinessName').value
    const address = document.querySelector('#editBusinessAddress').value
    const description = document.querySelector('#editBusinessDescription').value
    const type = document.querySelector('#editBusinessType').value
    const image = document.querySelector('#editBusinessImg').value
    console.log(name, address, description, type, image)

    try {
        const response = await axios.put(`http://localhost:3000/business/${singleId}`, {
            name: name,
            address: address,
            description: description,
            type: type,
            img: image
        
    }) 
    console.log(response)
    } catch (error) {
        console.log(error)
    }
})  

const createUserReview = () => {
    // console.log('review')
    createReview.classList.remove("hidden")
}


const displayReviews = async () => {
    while (reviews.firstChild) {
        reviews.firstChild.remove()
    }
    const response = await axios.get(`http://localhost:3000/business/${singleId}/reviews`)
    console.log(response.data.reviews)
    for (i = 0; i < response.data.reviews.length; i++) {
        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let content = document.createElement('p')
        let rating = document.createElement('p')
        div.setAttribute('id', 'reviewContainer')
        h2.setAttribute('id', 'reviewTitle')
        content.setAttribute('id', 'reviewContent')
        rating.setAttribute('id', 'reviewRating')
        h2.innerText = response.data.reviews[i].headline
        content.innerText = response.data.reviews[i].content
        rating.innerText = response.data.reviews[i].rating
        div.append(h2)
        div.append(content)
        div.append(rating)
        reviews.append(div) 
    }
    
}




createReviewForm.addEventListener('submit', async (e) => {
    e.preventDefault() 

    let userId = localStorage.getItem('userId')
    const headline = document.querySelector('#createReviewHeadline').value
    const content = document.querySelector('#createReviewContent').value
    const rating = document.querySelector('#createReviewRating').value
    console.log(headline,content,rating)
    try {
        const response = await axios.post(`http://localhost:3000/business/${singleId}/comment/${userId}`, {
            headline: headline,
            content: content,
            rating: rating
        })      
    createReviewForm.reset()
    switchToSingleBusinessScreen(singleId)
    } catch (error) {
        console.log(error)
    }
})


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










