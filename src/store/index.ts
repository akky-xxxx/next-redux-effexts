/// import node_modules
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
} from "react-redux"
import reduxEffectsSteps from "redux-effects-steps"
import reduxEffectsSpecter from "@specter/redux-effects-specter"
import { MakeStore, createWrapper } from "next-redux-wrapper"

// import reducer
import { reducer } from "./reducers"

// import others
import { specterClient } from "./modules/specterClient"
import { Common } from "../shared/const/Common"

// main
const { IS_DEV } = Common
const middleware = [
  /* cSpell: disable-next-line */
  ...getDefaultMiddleware({ serializableCheck: false }),
  reduxEffectsSteps,
  reduxEffectsSpecter(specterClient),
]

const store = configureStore({ reducer, middleware })

// types
export type RootState = ReturnType<typeof reducer>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

type AppDispatch = typeof store.dispatch
export const useDispatch = (): ReturnType<typeof useReduxDispatch> =>
  useReduxDispatch<AppDispatch>()

export type Dispatch = ReturnType<typeof useDispatch>

const makeStore: MakeStore<RootState> = () => store

export const wrapper = createWrapper<RootState>(makeStore, { debug: IS_DEV })
