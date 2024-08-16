import { data } from "@/utils/data";
import { createSlice } from "@reduxjs/toolkit";

const localData =
  typeof window !== "undefined"
    ? window.localStorage.getItem("categories")
    : null;

let local = localData ? JSON.parse(localData) : false;

export const WidgetSlice = createSlice({
  name: "categories",
  initialState: local ? local : data?.categories,
  reducers: {
    addWidget: (state: any, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.find((cat: any) => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);

        let categoryWidgets = JSON.stringify(state);
        localStorage.setItem("categories", categoryWidgets);
      }
    },
    deleteWidget: (state: any, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.find((cat: any) => cat?.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(
          (widget: any) => widget?.id !== widgetId
        );
        let categoryWidgets = JSON.stringify(state);
        localStorage.setItem("categories", categoryWidgets);
      }
    },
    toggleWidgetVisibility: (state: any, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state?.find((cat: any) => cat?.id == categoryId);
      if (category) {
        const widget = category?.widgets.find((w: any) => w?.id == widgetId);
        if (widget) {
          widget.visible = !widget?.visible;
          let categoryWidgets = JSON.stringify(state);
          localStorage.setItem("categories", categoryWidgets);
        }
      }
    },
    searchWidgets: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      if (searchTerm === "") {
        return data.categories;
      }
      return state.map((category: any) => ({
        ...category,
        widgets: category.widgets.filter((widget: any) =>
          widget.name.toLowerCase().includes(searchTerm)
        ),
      }));
    },
  },
});

export const {
  addWidget,
  deleteWidget,
  toggleWidgetVisibility,
  searchWidgets,
} = WidgetSlice.actions;

export default WidgetSlice.reducer;
