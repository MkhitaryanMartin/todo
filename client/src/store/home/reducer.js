import { createSlice, isRejectedWithValue, isPending} from "@reduxjs/toolkit";
import { fetchTodo, editItem, createItem, deleteItem } from "./actions";

const initialState = {
  isLoading: false,
  error: "",
  data: [],
  isOpenModal: false,
  activeItemId: null
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setData: (state, action)=>{
        state.data = action.payload
    },
    setIsOpenModal:(state, action)=>{
        state.isOpenModal = action.payload
    },
    setActiveItemId: (state, action)=>{
        state.activeItemId = action.payload
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchTodo.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.data = action.payload
    })
      builder.addCase(editItem.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.data = state.data.map((item)=>{
            if(item._id === action.payload.id){
                return action.payload.data
            }
            return item
        });
    })
      builder.addCase(createItem.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.data = [...state.data, action.payload]
    })
      builder.addCase(deleteItem.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.data = action.payload
    })
    builder.addMatcher(isRejectedWithValue, (state, action) => {
        state.error = action.payload;
      });
      builder.addMatcher(isPending, (state, action) => {
        state.isLoading = true;
    });
  }
});

export default homeSlice.reducer;
export const  {setData, setIsOpenModal, setActiveItemId}  = homeSlice.actions
