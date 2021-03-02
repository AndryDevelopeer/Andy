import React from 'react';
import s from "./News.module.css"

const News = (props) => {
    return (
        <div className={s.News}>

            <div className={s.News_item}>

                <div className={s.News_item_User}>
                    <div className={s.News_item_object}>
                        <img src="https://sun9-65.userapi.com/impf/m7BRMOfqQjIkU2WepJlZaSI18dVyX1xi8h1Acw/r3MvEJAjqqM.jpg?size=1280x720&quality=96&sign=63a8f1481c6d59e66348a850de4ebe7e&type=album" alt=""/>
                    </div>

                    <div className={s.News_item_object_name}>
                        {props.name}

                    </div>
                </div>
                <div className={s.News_item_do}>
                    {props.do}
                </div>
            </div>
        </div>

    )
}
export default News;
