import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { round, evaluate } from 'mathjs';

const initialState = {
    value: 0,
    answer: '0',
    buffer: '',
    inputString: '',
    inputBuffer: '',
    equalsBo: false,
    status: 'idle',
};
const regexRedundantOp = /[\+\*\/]{2,}(-[\+\*\/])?/;
const regexSecondPeriod = /\.\d*\./;
const mathOnly = /^[1-9.\-][\d\+\-\/\*\=]*/;
const regexThreeOp = /[\+\-\*\/]{3,}/;
const regexEquals = /\=/

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        computeString: (state, action) => {
            if ((mathOnly.test(action.payload))) {
                state.answer = round(evaluate(action.payload), 5);
                state.inputString = state.inputString + state.answer;
            } else {
                state.answer = 'Invalid Syntax';
            }
        },
        handleChange: (state, action) => {
            if (regexEquals.test(action.payload)) {
                state.equalsBo = true;
                state.inputString = action.payload + state.answer;
            } else if (state.equalsBo) {
                state.inputBuffer = state.answer + action.payload;
                state.inputString = state.answer + action.payload;
                state.equalsBo = false;
            } else {
                state.equalsBo = false;
                if (regexRedundantOp.test(action.payload)) {
                    let tmp = action.payload[action.payload.length - 1];
                    let tmp2 = action.payload.slice(0, -2);
                    action.payload = tmp2 + tmp;
                } else if (regexThreeOp.test(action.payload)) {
                    let tmp = action.payload[action.payload.length - 1];
                    let tmp2 = action.payload.slice(0, -3);
                    action.payload = tmp2 + tmp;
                }
                if ((action.payload[0] !== '0')
                    &&
                    !(regexSecondPeriod.test(action.payload))
                    &&
                    !(regexRedundantOp.test(action.payload))
                ) {
                    state.inputBuffer = action.payload;
                    state.inputString = action.payload;
                }
            }
        },
        answerChange: (state, action) => {
            let k = 0;
            for (let i = 0; i < action.payload.length; i++) {
                if (action.payload[i] === '.') {
                    k++;
                }
            }
            if ((k <= 1) && (action.payload[0] !== '0')) {
                state.answer = action.payload;
                state.buffer = action.payload;
            }
        },
        clearAll: (state) => {
            state.answer = '0';
            state.buffer = '';
            state.inputString = '';
            state.inputBuffer = '';
            state.equalsBo = false;
        },
        bufferClear: (state) => {
            state.buffer = '';
        },
        inputBufferClear: (state) => {
            state.inputBuffer = '';
        },
    }
});

export const { computeString, handleChange, answerChange, bufferClear, inputBufferClear, clearAll, increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectAnswer = (state) => state.counter.answer;
export const selectInputString = (state) => state.counter.inputString;
export const selectBuffer = (state) => state.counter.buffer;
export const selectInputBuffer = (state) => state.counter.inputBuffer;
export const selectEqualsBo = (state) => state.counter.equalsBo;


export default counterSlice.reducer;
