let state={
    postArray :[
        {
            id: 0,
            date: "24.12.2020",
            name: "СЕРВИСНЫЕ РОБОТЫ",
            img: "https://robogeek.ru/files/blogs/0012/6326/_cache/fit650x800-nuro.jpeg",
            like:22,
            text: "   Беспилотники Nuro начинают коммерческие доставки в Калифорнии\n" +
                "Nuro получила разрешение на коммерческую эксплуатацию беспилотных транспортных средств\n" +
                "доставки\n" +
                "в Калифорнии. Это означает, что компания из Кремниевой долины сможет начать взимать с\n" +
                "клиентов\n" +
                "плату за услуги по доставке, используя свои беспилотные автомобили."
        },

        {
            id: 1,
            date: "23.12.2020",
            name: "ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ",
            img: "https://robogeek.ru/files/blogs/0012/6325/_cache/fit650x800-fit650x800ai.png",
            like:541,
            text: "   Утверждена программа стандартизации в области искусственного интеллекта\n" +
                "Перспективная программа стандартизации по приоритетному направлению «Искусственный\n" +
                "интеллект» на\n" +
                "период 2021 – 2024 годы утверждена заместителем министра экономического развития России\n" +
                "Оксаной\n" +
                "Тарасенко и заместителем руководителя Росстандарта Антоном Шалаевым"
        },
        {
            id: 2,
            date: "22.12.2020",
            name: "НОВОСТИ КОМПАНИЙ",
            img: "https://robogeek.ru/files/blogs/0012/6330/_cache/fit650x800-cuberover.JPG",
            like:85,
            text: "  В 2020 году Smart Engines заработала на ИИ 247.5 млн руб., продав 91.9 млн распознаваний, и\n" +
                "опубликовала 64 научные работы\n" +
                "Российская научная компания Smart Engines, разрабатывающая технологии «зеленого» ИИ,\n" +
                "подводит\n" +
                "итоги деятельности за 2020 г. В текущем году компания представила новое поколение систем\n" +
                "распознавания Smart Vision Engines для автоматического извлечения данных ID документов,\n" +
                "банковских карт, баркодов, деловых документов, биометрической верификации и компьютерной\n" +
                "томографии."
        }
    ],/*массив с постами*/
    myFriendsArray :[
        {id:"0",
            name: "Andrew Gerasimenko",
            work: "ЧМЗ",
            years: "45 лет",
            about: "Еще в 13 лет, когда я плавил свинец из аккумуляторов в кастеты я понял что метталургия это мое призвание",
            do: "2 сообщения",
            ava: "https://sun9-65.userapi.com/impf/m7BRMOfqQjIkU2WepJlZaSI18dVyX1xi8h1Acw/r3MvEJAjqqM.jpg?size=1280x720&quality=96&sign=63a8f1481c6d59e66348a850de4ebe7e&type=album",
            unread: "2 сообщения",
            message: [
                "Привет видел сегодня твой байк возле завода, ты работешь по выходным?",
                "Блин круто, отличный у тебя байк!",
                "И покатался и денег заработал)"
            ]
        },
        {id:"1",
            name: "Mark Stavrovich",
            work: "Бовид",
            years: "35 лет",
            about: "В детсве все смеялись на до мной когда я ездил в игрушечной машинке без дна. Теперь мое время смеяться за рулем моего XC-90 2021 года\"",
            do: "2 сообщения",
            ava: "https://sun9-65.userapi.com/impf/m7BRMOfqQjIkU2WepJlZaSI18dVyX1xi8h1Acw/r3MvEJAjqqM.jpg?size=1280x720&quality=96&sign=63a8f1481c6d59e66348a850de4ebe7e&type=album",
            unread: "2 сообщения",
            message:["Андрей привет!",
                "Помнишь я у тебякасарь занимал? "
            ]
        },
        {id:"2",
            name: "Vladimir Putin",
            work: "РФ",
            years: "62 года",
            about: "Мне предначертано сюдьбой страною править" +
                " . Лишь только тот кто чист душой достоин ее возглавить",
            do: "2 сообщения",
            ava: "https://sun9-65.userapi.com/impf/m7BRMOfqQjIkU2WepJlZaSI18dVyX1xi8h1Acw/r3MvEJAjqqM.jpg?size=1280x720&quality=96&sign=63a8f1481c6d59e66348a850de4ebe7e&type=album",
            unread: "2 сообщения",
            message:[]
        },
        {id:"3",
            name: "Vladimir Skoroportov",
            work: "ЖЭУ-6",
            years: "41 год",
            about: "Вроде только вчера с пацанами от" +
                "мечали мои проводы. А вот уже 20 лет работаю в ЖЭКе(",
            do: "2 сообщения",
            ava: "https://sun9-65.userapi.com/impf/m7BRMOfqQjIkU2WepJlZaSI18dVyX1xi8h1Acw/r3MvEJAjqqM.jpg?size=1280x720&quality=96&sign=63a8f1481c6d59e66348a850de4ebe7e&type=album",
            unread: "2 сообщения",
            message:[]
        },
        {id:"4",
            name: "Andrew Zasimenko",
            work: "ЧЭМК",
            years: "38 лет",
            about: "Все мои друзья здесь. А я че лысый? " +
                "Неее я не лысый!",
            do: "2 сообщения",
            ava: "https://sun9-65.userapi.com/impf/m7BRMOfqQjIkU2WepJlZaSI18dVyX1xi8h1Acw/r3MvEJAjqqM.jpg?size=1280x720&quality=96&sign=63a8f1481c6d59e66348a850de4ebe7e&type=album",
            unread: "2 сообщения",
            message:[]
        },
        {id:"5",
            name: "Nikolay Iceman",
            work: "",
            years: "",
            about: "",
            do: "нет новых сообщений",
            ava: "https://sun9-65.userapi.com/impf/m7BRMOfqQjIkU2WepJlZaSI18dVyX1xi8h1Acw/r3MvEJAjqqM.jpg?size=1280x720&quality=96&sign=63a8f1481c6d59e66348a850de4ebe7e&type=album",
            unread: "2 сообщения",
            message:[]
        },
        {id:"6",
            name: "Mark Stavrovich",
            work: "",
            years: "",
            about: "",
            do: "4 сообщения",
            ava: "https://sun9-65.userapi.com/impf/m7BRMOfqQjIkU2WepJlZaSI18dVyX1xi8h1Acw/r3MvEJAjqqM.jpg?size=1280x720&quality=96&sign=63a8f1481c6d59e66348a850de4ebe7e&type=album",
            unread: "2 сообщения",
            message:[]
        },

        {id:"7",
            name: "Георгий Волосошвилли",
            work: "",
            years: "",
            about: "",
            do: "3 сообщения",
            ava: "https://sun9-65.userapi.com/impf/m7BRMOfqQjIkU2WepJlZaSI18dVyX1xi8h1Acw/r3MvEJAjqqM.jpg?size=1280x720&quality=96&sign=63a8f1481c6d59e66348a850de4ebe7e&type=album",
            unread: "2 сообщения",
            message:[]
        }


    ]/*массив с френдами*/
}

export default state;