import { useEffect, useReducer } from "react";
import { fetchText, getMostCommonWords } from '../utils';
import { fetcinghStatuses } from '../constants';

const actionTypes = {
  FETCH_WORDS_REQUEST: 'FETCH_WORDS_REQUEST',
  FETCH_WORDS_SUCCESS: 'FETCH_WORDS_SUCCESS',
  FETCH_WORDS_ERROR: 'FETCH_WORDS_ERROR',
  TOGGLE_WORD_VISIBILITY: 'TOGGLE_WORD_VISIBILITY',
}



const initialState = {
  words: [],
  status: fetcinghStatuses.IDLE,
}

function reducer(state, action) {
  switch(action.type) {
    case actionTypes.FETCH_WORDS_REQUEST:
      return {...state, status: fetcinghStatuses.FETCHING};
    case actionTypes.FETCH_WORDS_SUCCESS:
      return {
        ...state,
        status: fetcinghStatuses.SUCCESS,
        words: action.payload.map((word) => ({...word, visible: true }))
      };
    case actionTypes.FETCH_WORDS_ERROR:
      return {...state, status: fetcinghStatuses.FAILURE};
    case actionTypes.TOGGLE_WORD_VISIBILITY:
      return {
        ...state,
        words: state.words.map((w) => {
          return w.value === action.payload ? { ...w, visible: !w.visible} : w;
        })
      };
    default:
      return { ...state };
  }
}

function useWords(wordsAmount = 5) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCH_WORDS_REQUEST });
    Promise.all([fetchText('1'), fetchText('2'), fetchText('3')]).then((texts) => {
      const mostCommonWords = getMostCommonWords(texts.join(' '), wordsAmount);
      dispatch({ type: actionTypes.FETCH_WORDS_SUCCESS, payload: mostCommonWords });
    }).catch(() => dispatch({ type: actionTypes.FETCH_WORDS_ERROR }));
  }, [wordsAmount]);

  return {
    ...state,
    toggleWordVisibility: (word) => dispatch({
      type: actionTypes.TOGGLE_WORD_VISIBILITY,
      payload: word
    })
  };
}


export default useWords;