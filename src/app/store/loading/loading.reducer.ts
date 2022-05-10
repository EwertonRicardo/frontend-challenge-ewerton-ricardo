import { LoadingState } from './loadingState';
import { showLoading, hideLoading } from './loading.actions';
import { createReducer, on } from "@ngrx/store";

const initialState: LoadingState = {
    show: false
}
const reducer = createReducer(
    initialState,
    on(showLoading, () => ({show: true})),
    on(hideLoading, () => ({show: false}))
)

export const loadingReducer = (state: LoadingState, action) => reducer(state, action)