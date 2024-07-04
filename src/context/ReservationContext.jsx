'use client';
import { createContext, useContext, useState } from 'react';

const ReservationContext = createContext();
const initialState = { from: undefined, to: undefined };

export function ReservationProvider({ children }) {
	const [range, setRange] = useState(initialState);
	const resetRange = () => setRange(initialState);

	return (
		<ReservationContext.Provider value={{ range, setRange, resetRange }}>
			{children}
		</ReservationContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useReservation() {
	const context = useContext(ReservationContext);

	if (context === undefined)
		throw new Error(
			'ReservationContext was used outside of Provider. The context can only be used in children of the Provider'
		);

	return context;
}
