import { data } from "@/utils/data";
import { createSlice } from "@reduxjs/toolkit";

export const WidgetSlice = createSlice({
    name: "widget",
    initialState: data.categories,
    reducers: {
        addWidget: (state:any, action) => {
            const { categoryId, widget } = action.payload;
            const category = state.categories.find((cat:any) => cat.id === categoryId);
            if (category) {
                category.widgets.push(widget);
            }
        },
        deleteWidget: (state:any, action) => {
            const { categoryId, widgetId } = action.payload;
            const category = state.categories.find((cat:any) => cat.id === categoryId);
            if (category) {
                category.widgets = category.widgets.filter((widget:any) => widget.id !== widgetId);
            }
        },
        toggleWidgetVisibility: (state:any, action) => {
            const { categoryId, widgetId } = action.payload;
            const category = state.categories.find((cat:any) => cat.id === categoryId);
            if (category) {
                const widget = category.widgets.find((w:any) => w.id === widgetId);
                if (widget) {
                    widget.visible = !widget.visible;
                }
            }
        }
    }
});

export const { addWidget, deleteWidget, toggleWidgetVisibility } = WidgetSlice.actions;

export default WidgetSlice.reducer;
