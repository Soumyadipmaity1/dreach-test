import React, { createContext, useContext, useReducer } from 'react';

interface DashboardState {
  selectedDepartment: string | null;
  view: 'table' | 'grid';
  filters: any;
}

const DashboardContext = createContext<{
  state: DashboardState;
  dispatch: React.Dispatch<any>;
} | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within DashboardProvider');
  }
  return context;
}; 