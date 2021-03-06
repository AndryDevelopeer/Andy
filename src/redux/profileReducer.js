const ADD_POST = "ADD-POST";
const ADD_TEXT_POST = "ADD-TEXT-POST";

const profileReducer =(state,action)=>{

/* type:"TEXT"*/ // metod dlya rabotu so storom iz vne
    /*action eto objeckt u cotorogo esti svoistvo type and ....*/
    if (action.type === ADD_POST) {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = dd + '.' + mm + '.' + yyyy;
        let newPost = {
            id: 2,
            date: today,
            name: state.newPostText,
            img: "https://robogeek.ru/files/blogs/0012/6325/_cache/fit650x800-fit650x800ai.png",
            like: 0,
            text: ""
        };
        state.postArray.unshift(newPost);
        state.newPostText = ("New post");
    } else if (action.type === ADD_TEXT_POST) {/* zamena simvolow esly u prihodyashego dispatch
        type equals "add post" to delaem eto*/
        state.newPostText = action.text;/* to 4to prishlo v action s type text*/
    }
    return state;
}
export default profileReducer;