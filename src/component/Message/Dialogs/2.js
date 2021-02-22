import s from "../../Message/Message.module.css";
import Aponent from "./Aponent/Aponent";
import MyMessage from "./MyMessage/MyMessage";
const Dialogs3=()=>{
    return(
        <div className={s.message}>
            <Aponent time={"21.02.2021 21:58"} name={"Vladimir Putin"} message={"Андрей Здравствуйте!"}/>
            <Aponent time={"21.02.2021 21:59"} name={"Vladimir Putin"} message={"Мне Очень понравился Ваш сайт!"}/>
            <Aponent time={"21.02.2021 22:00"} name={"Vladimir Putin"} message={"Хочу такой же себе в бункер," +
            " можете сделать?"}/>
            <MyMessage time={""} message={""}/>
            <Aponent time={""} name={""} message={""}/>
            <Aponent time={""} name={""} message={""}/>
        </div>
    )
}
export default Dialogs3;