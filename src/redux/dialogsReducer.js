const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {

    /* type:"TEXT"*/ // metod dlya rabotu so storom iz vne
    /*action eto objeckt u cotorogo esti svoistvo type and ....*/
    if (action.type === ADD_NEW_MESSAGE) {/* zamena simvolow esly u prihodyashego dispatch
        type equals "ADD_NEW-MESSAGE" to delaem eto*/
        state.newTextMessage = action.text;/* to 4to prishlo v action s type text*/
    } else if (action.type === SEND_MESSAGE) {
        let text = state.newTextMessage;
        let id = state.sendTextMessage.length
        state.sendTextMessage.push({id: id + 1, message: (text)});/* to 4to prishlo v action s type text*/
        state.newTextMessage = (" ");
    }
    return state;
}
export default dialogsReducer;