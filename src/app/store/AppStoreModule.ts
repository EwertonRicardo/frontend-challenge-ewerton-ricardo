import { loadingReducer } from './loading/loading.reducer';
import { StoreModule } from "@ngrx/store";

export const AppStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature("loading", loadingReducer)
]