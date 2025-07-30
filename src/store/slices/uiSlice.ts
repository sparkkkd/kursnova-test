import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
	mode: 'parents' | 'students'
	isModalOpen: boolean
	isModalSuccess: boolean
	isSidebarOpen: boolean
	isCanAddSection: boolean
	isPresentOpen: boolean
	isAlreadyPresentOpen: boolean
}

const initialState: IInitialState = {
	mode: 'students',
	isModalOpen: false,
	isModalSuccess: false,
	isSidebarOpen: false,
	isCanAddSection: false,
	isPresentOpen: false,
	isAlreadyPresentOpen: false,
}

export const uiSlice = createSlice({
	name: 'uiSicee',
	initialState,
	reducers: {
		switchMode: (state, action: PayloadAction<'parents' | 'students'>) => {
			state.mode = action.payload
		},

		setIsModalOpen: (state, action: PayloadAction<boolean>) => {
			state.isModalOpen = action.payload
		},

		setIsModalSuccess: (state, action: PayloadAction<boolean>) => {
			state.isModalSuccess = action.payload
		},

		setIsSiderbarOpen: (state, action: PayloadAction<boolean>) => {
			state.isSidebarOpen = action.payload
		},

		setIsCanAddSection: (state, action: PayloadAction<boolean>) => {
			state.isCanAddSection = action.payload
		},

		setIsPresentOpen: (state, action: PayloadAction<boolean>) => {
			state.isPresentOpen = action.payload
			state.isAlreadyPresentOpen = true
		},

		successPresentAction: (state) => {
			state.isPresentOpen = false
			state.isModalOpen = true
			state.isModalSuccess = true
		},
	},
})

export default uiSlice.reducer
export const {
	switchMode,
	setIsModalOpen,
	setIsModalSuccess,
	setIsSiderbarOpen,
	setIsCanAddSection,
	setIsPresentOpen,
	successPresentAction,
} = uiSlice.actions
