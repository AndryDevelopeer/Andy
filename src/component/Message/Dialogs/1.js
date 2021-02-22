import s from "../../Message/Message.module.css";
import Aponent from "./Aponent/Aponent";
import MyMessage from "./MyMessage/MyMessage";

const Dialogs2=()=>{
    return(
        <div className={s.message}>
            <Aponent time={"21.02.2021 21:56"} name={"Mark Stavrovich"} message={"Андрей привет!"}/>
            <Aponent time={"21.02.2021 21:56"} name={"Mark Stavrovich"} message={"Помнишь я у тебякасарь занимал? " +
            "Давай я тебе его отдам в следующем месяце?"}/>
            <MyMessage time={""} message={""}/>
            <Aponent time={""} name={""} message={""}/>
            <Aponent time={""} name={""} message={""}/>
        </div>
    )
}
export default Dialogs2;