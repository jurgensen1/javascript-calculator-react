import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    computeString,
    handleChange,
    answerChange,
    bufferClear,
    inputBufferClear,
    clearAll,
    selectAnswer,
    selectInputString,
    selectBuffer,
    selectInputBuffer,
    selectEqualsBo
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
    const answer = useSelector(selectAnswer);
    const inputString = useSelector(selectInputString);
    const buffer = useSelector(selectBuffer);
    const inputBuffer = useSelector(selectInputBuffer);
    const equalsBo = useSelector(selectEqualsBo);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div id={styles.displayWrapper}>
                    <div id='stringDisplay' className={styles.display}>{inputString ? inputString : "0"}</div>
                    <div id='display' className={styles.display}>{answer}</div>
                </div>
                <div id={styles.buttonsWrapper}>
                    <button
                            className={styles.buttonWide}
                            aria-label="clear"
                            id="clear"
                            onClick={(e) => {
                                dispatch(clearAll());
                            }}
                        >
                            AC
                    </button>
                    <button
                        className={styles.buttonWide}
                        aria-label="divide"
                        id="divide"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '/'));
                            dispatch(answerChange('/'));
                            dispatch(bufferClear());
                        }}
                    >
                        /
                    </button>
                    <button
                        className={styles.button}
                        aria-label="seven"
                        id="seven"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '7'));
                            dispatch(answerChange(buffer + '7'));
                        }}
                    >
                        7
                    </button>
                    <button
                        className={styles.button}
                        aria-label="eight"
                        id="eight"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '8'));
                            dispatch(answerChange(buffer + '8'));
                        }}
                    >
                        8
                    </button>
                    <button
                        className={styles.button}
                        aria-label="nine"
                        id="nine"
                        onClick={(e) => {
                            dispatch(handleChange(inputString + '9'));
                            dispatch(answerChange(buffer + '9'));
                        }}
                    >
                        9
                    </button>
                    <button
                        className={styles.button}
                        aria-label="multiply"
                        id="multiply"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '*'));
                            dispatch(answerChange('*'));
                            dispatch(bufferClear());
                        }}
                    >
                        *
                    </button>
                    <button
                        className={styles.button}
                        aria-label="four"
                        id="four"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '4'));
                            dispatch(answerChange(buffer + '4'));
                        }}
                    >
                        4
                    </button>
                    <button
                        className={styles.button}
                        aria-label="five"
                        id="five"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '5'));
                            dispatch(answerChange(buffer + '5'));
                        }}
                    >
                        5
                    </button>
                    <button
                        className={styles.button}
                        aria-label="six"
                        id="six"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '6'));
                            dispatch(answerChange(buffer + '6'));
                        }}
                    >
                        6
                    </button>
                    <button
                        className={styles.button}
                        aria-label="subtract"
                        id="subtract"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '-'));
                            dispatch(answerChange('-'));
                            dispatch(bufferClear());
                        }}
                    >
                        -
                    </button>
                    <button
                        className={styles.button}
                        aria-label="one"
                        id="one"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '1'));
                            dispatch(answerChange(buffer + '1'));
                        }}
                    >
                        1
                    </button>
                    <button
                        className={styles.button}
                        aria-label="two"
                        id="two"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '2'));
                            dispatch(answerChange(buffer + '2'));
                        }}
                    >
                        2
                    </button>
                    <button
                        className={styles.button}
                        aria-label="three"
                        id="three"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '3'));
                            dispatch(answerChange(buffer + '3'));
                        }}
                    >
                        3
                    </button>
                    <button
                        className={styles.button}
                        aria-label="add"
                        id="add"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '+'));
                            dispatch(answerChange('+'));
                            dispatch(bufferClear());
                        }}
                    >
                        +
                    </button>
                    <button
                        className={styles.buttonWide}
                        aria-label="zero"
                        id="zero"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '0'));
                            dispatch(answerChange(buffer + '0'));
                        }}
                    >
                        0
                    </button>
                    <button
                        className={styles.button}
                        aria-label="decimal"
                        id="decimal"
                        onClick={(e) => {
                            dispatch(handleChange(inputBuffer + '.'));
                            dispatch(answerChange(buffer + '.'));
                        }}
                    >
                        .
                    </button>
                    <button
                        className={styles.button}
                        aria-label="equals"
                        id="equals"
                        onClick={() => {
                            dispatch(computeString(inputString));
                            dispatch(handleChange(inputBuffer + "="));
                            dispatch(inputBufferClear());
                            dispatch(bufferClear());
                        }}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}
