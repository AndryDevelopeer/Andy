import s from "../../Message/Message.module.css";
import Aponent from "./Aponent/Aponent";
import MyMessage from "./MyMessage/MyMessage";
const Dialogs6=()=>{
    return(
        <div className={s.message}>
            <Aponent time={""} name={""} message={""}/>
            <MyMessage time={""} message={""}/>
            <Aponent time={""} name={""} message={""}/>
            <Aponent time={""} name={""} message={""}/>
        </div>
    )
}
export default Dialogs6;