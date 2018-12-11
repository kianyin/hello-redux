let initState={
    second: 1,
    third: 10,
    forth: 100
}

function createStore(reducer) {
    let state = null; //初始化state
    let listeners = []; //监听变化的回调函数队列
    let subscribe = (listener) => listeners.push(listener); // 定义并随后暴露添加绑定回调函数的方法
    let getState = () => state;// 定义并暴露获取读取 state 的唯一方法
    let dispatch = (action) => {
        state = reducer(state, action);//根据action改变状态
        listeners.forEach((listener) => listener())//把listeners都执行一次
    }
    dispatch({})
    return { subscribe, getState, dispatch }
}

// 改变状态的规则函数
function reducer(state, action) {
    if (!state) {
        state =initState
    }
    switch (action.type) {
        case 'AddOne':
            state.second++;
            state.third++;
            state.forth++;
            break;
        case 'AddTen':
            state.second=state.second+10;
            state.third=state.third+10;
            state.forth=state.forth+10;
            break;
        case 'AddHunreds':
            state.second=state.second+100;
            state.third=state.third+100;
            state.forth=state.forth+100;
            break;
        default:
    }
    return { ...state }
}

export const store = createStore(reducer)