import { put, takeEvery, all, call} from 'redux-saga/effects'
import axios from 'axios'

// api запросы
const fetchUsers = (action) => () => axios.post('/api/users', action);
const fetchUser = (action) => () => axios.post('/api/user', action);
const findUserById = (action) => () => axios.get(`/api/user/${action.payload.userId}`);
const changeUserData = (action) => () => axios.post(`/api/user/${action.payload.userId}`, action.payload);


function* fetchUsersAsync(action){
    // пока ждем ответа сервера, запускаем спинер загрузки
    yield put({ type: 'FETCH_USERS', payload: {loaded: true} })
    const response = yield call(fetchUsers(action))
    yield put({ type: 'FETCH_USERS', payload: response.data})

}

function* fetchUserAsync(action){

    const response = yield call(fetchUser(action))
    yield put({ type: 'FETCH_USER', payload: response.data})

}

function* findUserByIdAsync(action){

    const response = yield call(findUserById(action))
    yield put({ type: 'FIND_USER_BY_ID', payload: response.data})

}

function* changeUserDataAsync(action){

  const response = yield call(changeUserData(action))
  yield put({ type: 'FIND_USER_BY_ID', payload: response.data})

}

export default function* rootSaga(){
    yield takeEvery('FETCH_USERS_ASYNC', fetchUsersAsync)
    yield takeEvery('FETCH_USER_ASYNC', fetchUserAsync)
    yield takeEvery('FIND_USER_BY_ID_ASYNC', findUserByIdAsync)
    yield takeEvery('CHANGE_USER_DATA_ASYNC', changeUserDataAsync)
}
