////////////// Exercise

const MyLogic = function () {
  const _posts = []

  localStorage.myPosts = JSON.parse([])

  let idCounter = 1

  const getPosts = () => _posts

  const addPosts = function (text) {
    const newPost = { id: idCounter++, text }
    _posts.push(newPost)
  };

  const saveData = (data) =>{
    if(data[data.length-1].id % 2 == 0){
        (localStorage.myPosts = JSON.stringify(data))
    }
  } 

  return {
    getPosts,
    addPosts,
    saveData,
  }
}

const MyRender = function () {
  const renderPosts = function (_posts) {
    $("#posts").empty()

    for (let post of _posts) {
      $("#posts").append($(`<p id=${post.id} class"texts">${post.text}</p>`));
    }
  }

  return {renderPosts}
}

const myLogic = MyLogic()
const myRender = MyRender()

$("#postButton").on("click", function () {
  myLogic.addPosts($("input").val())
  $("input").val("")
  myRender.renderPosts(myLogic.getPosts())
  myLogic.saveData(myLogic.getPosts())
})


const check1 = JSON.stringify({id:22, text:"anything"})
localStorage.myPosts= JSON.stringify([{id:22, text:"anything"}])
localStorage.myPosts.push(check1)
console.log(localStorage.myPosts)

// const week = [
//     {day: 1, activity:"boxing"},
//     {day: 2, activity:"coding"},
//     {day: 3, activity:"trekking"},
//     {day: 4, activity:"swimming"},
//     {day: 5, activity:"reading"},
//     {day: 6, activity:"learning"},
//     {day: 7, activity:"traveling"}
// ]

// const localData = JSON.parse(localStorage.aboutMe)
// console.log(localData[1])

// const source = $("#store-template").html()
// const template = handlebars.compile(source)

// const newHtml = template({})
////////////////////Local Storage - Material///////////////////////
/*
///////////////
localStorage.name = "shoobert"
localStorage.age = "25"
localStorage["year"]= 2020

console.log(localStorage.name)
console.log(localStorage["year"])

/////////////
console.log("spot check 1")
let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}

localStorage.userStorage = JSON.stringify(userStorage)
console.log(localStorage.userStorage)

const userData = JSON.parse(localStorage.userStorage)
console.log(userData.latestMarks)
console.log(localStorage)

*/
