import { showLoading, hideLoading } from './loading.actions';
import { loadingReducer } from './loading.reducer';
import { LoadingState } from './loadingState';

describe('Loading store', () => {

    it('Should show the loading', () => {
        const initialState: LoadingState = { show: false }
        const newState = loadingReducer(initialState, showLoading())

        expect(newState).toEqual({show: true})
    })

    it('Should hide the loading',  () => {
        const initialState: LoadingState = { show: true }
        const newState = loadingReducer(initialState, hideLoading())

        expect(newState).toEqual({show: false})
    })
})