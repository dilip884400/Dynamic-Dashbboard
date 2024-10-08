import { configureStore } from "@reduxjs/toolkit";
import WidgetSlice from './slices/widget'

export const store = configureStore({
  reducer: {
    categories: WidgetSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
