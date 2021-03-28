const ADD_POST = "ADD-POST";
const ADD_TEXT_POST = "ADD-TEXT-POST";
const ABOUT_ME = "ABOUT-ME";
const USER_NAME = "USE-NAME";
const AVA = "AVA";
const HIGH_AVA = "HIGH_AVA";
const LOOKING_JOB = "LOOKING_JOB";
const JOB_DESCRIPTION ="JOB_DESCRIPTION";
const SET_CONTACTS ="SET_CONTACTS";
const SET_PROCESS ="SET_PROCESS"
let initialState =/*для первоночальной отрисовки стэйта, после этого стэйт отрисовавыеться при изменении*/
    {
        newPostText: "New post",
        postArray: [
            {
                id: 0,
                date: "24.12.2020",
                name: "СЕРВИСНЫЕ РОБОТЫ",
                img: "https://robogeek.ru/files/blogs/0012/6326/_cache/fit650x800-nuro.jpeg",
                like: 22,
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
                like: 541,
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
                like: 85,
                text: "  В 2020 году Smart Engines заработала на ИИ 247.5 млн руб., продав 91.9 млн распознаваний, и\n" +
                    "опубликовала 64 научные работы\n" +
                    "Российская научная компания Smart Engines, разрабатывающая технологии «зеленого» ИИ,\n" +
                    "подводит\n" +
                    "итоги деятельности за 2020 г. В текущем году компания представила новое поколение систем\n" +
                    "распознавания Smart Vision Engines для автоматического извлечения данных ID документов,\n" +
                    "банковских карт, баркодов, деловых документов, биометрической верификации и компьютерной\n" +
                    "томографии."
            }
        ],
        inProcess: true,
        aboutMe: "",
        contacts: "",
        ava: "",
        highAva: "",
        name: "",
        lookingJod: "",
        jobDescription:"",

    };
const profileReducer = (state = initialState, action) => {
    switch (action.type) {/*otsle*/
        case ADD_POST: {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            today = dd + '.' + mm + '.' + yyyy;//получаем дату
            let newPost = {
                id: 2,
                date: today,
                name: state.newPostText,
                img: "https://robogeek.ru/files/blogs/0012/6325/_cache/fit650x800-fit650x800ai.png",
                like: 0,
                text: ""
            };
            let stateCopy = {...state};//делаем поверностную копию обьекта
            stateCopy.postArray = [...state.postArray];//делаемглубокую копию обьекта
            stateCopy.postArray.unshift(newPost);//пушим в копию массива обьект
            stateCopy.newPostText = ("");//зануляем инпут
            return stateCopy
        }//возвращаем копию
        case ADD_TEXT_POST: {
            let stateCopy = {...state};//делаем поверностную копию обьекта
            stateCopy.newPostText = {...state.newPostText}//делаем глубокую копию обьекта
            stateCopy.newPostText = action.text;/*меняем текс при изменении в поле инпут*/
            return stateCopy;
        }//возвращаем копию
        case USER_NAME: {
            let stateCopy = {...state};//делаем поверностную копию обьекта
            stateCopy.name = {...state.name}//делаем глубокую копию обьекта
            stateCopy.name = action.name;/*меняем текс при изменении в поле инпут*/
            return stateCopy;
        }
        case ABOUT_ME: {
            let stateCopy = {...state};//делаем поверностную копию обьекта
            stateCopy.aboutMe = {...state.aboutMe}//делаем глубокую копию обьекта
            stateCopy.aboutMe = action.about;/*меняем текс при изменении в поле инпут*/
            return stateCopy;
        }
        case AVA: {
            let stateCopy = {...state};//делаем поверностную копию обьекта
            stateCopy.ava = {...state.ava}//делаем глубокую копию обьекта
            stateCopy.ava = action.link;/*меняем текс при изменении в поле инпут*/
            return stateCopy;
        }
        case HIGH_AVA: {
            let stateCopy = {...state};//делаем поверностную копию обьекта
            stateCopy.highAva = {...state.highAva}//делаем глубокую копию обьекта
            stateCopy.highAva = action.link;/*меняем текс при изменении в поле инпут*/
            return stateCopy;
        }
        case LOOKING_JOB: {
            let stateCopy = {...state};//делаем поверностную копию обьекта
            stateCopy.lookingJod = {...state.lookingJod}//делаем глубокую копию обьекта
            stateCopy.lookingJod = action.data;/*меняем текс при изменении в поле инпут*/
            return stateCopy;
        }
        case JOB_DESCRIPTION: {
            let stateCopy = {...state};//делаем поверностную копию обьекта
            stateCopy.jobDescription = {...state.jobDescription}//делаем глубокую копию обьекта
            stateCopy.jobDescription = action.data;/*меняем текс при изменении в поле инпут*/
            return stateCopy;
        }
        case SET_CONTACTS: {
            let stateCopy = {...state};//делаем поверностную копию обьекта
            stateCopy.contacts = {...state.contacts}//делаем глубокую копию обьекта
            stateCopy.contacts = action.data;/*меняем текс при изменении в поле инпут*/
            return stateCopy;
        } case SET_PROCESS: {
            let stateCopy = {...state};//делаем поверностную копию обьекта
            stateCopy.inProcess = {...state.inProcess}//делаем глубокую копию обьекта
            stateCopy.inProcess = action.data;/*меняем текс при изменении в поле инпут*/
            return stateCopy;
        }
        default: {
            return state;/*по умолчанию возвращаем стайт который к нам пришел без изменения*/
        }
    }
}
/*создание экшенов для диспатча*/
export const newPostTextActionCreator = (text) => ({type: ADD_TEXT_POST, text: text});/*from addTextPost in Profile*/
/*если функция только возвращает значение ее можно записать так*/
export const addPostActionCreator = () => ({type: ADD_POST}); /*export from addPost in Profile*/
export const setAboutMe = (about) => ({type: ABOUT_ME, about}); /*export from addPost in Profile*/
export const setUserName = (name) => ({type: USER_NAME, name}); /*export from addPost in Profile*/
export const setAva = (link) => ({type: AVA, link}); /*export from addPost in Profile*/
export const setHeaderAva = (link) => ({type: HIGH_AVA, link}); /*export from addPost in Profile*/
export const setLookingJob = (data) => ({type: LOOKING_JOB, data}); /*export from addPost in Profile*/
export const setJobDescription = (data) => ({type: JOB_DESCRIPTION, data}); /*export from addPost in Profile*/
export const setContacts = (data) => ({type: SET_CONTACTS, data});
export const setInProcess = (data) => ({type: SET_PROCESS, data});
export default profileReducer;