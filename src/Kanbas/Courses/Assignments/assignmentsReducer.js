import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  assignments: [],
  assignment: { title: "", points:"", due:"", availableFrom:"", until:"" },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      setAssignments: (state, action) => {
        state.assignments = action.payload;
      },
  
      addAssignment: (state, action) => {
        console.log("in add assignment")
        state.assignments = [
          { ...action.payload, _id: new Date().getTime().toString() },
            ...state.assignments,
        ];
        console.log(":ass" , ...state.assignments)
      },
      deleteAssignment: (state, action) => {
        console.log("in delete assignments")
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
        );
      },
      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
      });
  },
  setAssignment: (state, action) => {
    state.module = action.payload;
  },
  },
  });


export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
    export default assignmentsSlice.reducer;
