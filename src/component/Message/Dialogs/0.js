import s from "../../Message/Message.module.css";
import Aponent from "./Aponent/Aponent";
import MyMessage from "./MyMessage/MyMessage";

const Dialogs0=()=>{
    return(
        <div className={s.message}>
            <Aponent time={"20.02.2021 18:48"} name={"Nikolay Iceman"} message={"Привет видел сегодня твой байк возле завода, ты работешь по выходным?"}/>
            <MyMessage time={"21.02.2021 15:00"} name={"Me"} message={"Да бывает вызывают по выходным, за это хорошо платят, привет)"}/>
            <Aponent time={"21.02.2021 15:02"} name={"Nikolay Iceman"} message={"Блин круто, отличный у тебя байк!"}/>
            <Aponent time={"21.02.2021 15:03"} name={"Nikolay Iceman"} message={"И покатался и денег заработал)"}/>
        </div>
    )
}
export default Dialogs0;