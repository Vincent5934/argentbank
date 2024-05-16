import {createStore} from "redux"
import  UserSlice  from "./UserSlice";

const store = createStore(UserSlice)
export default store