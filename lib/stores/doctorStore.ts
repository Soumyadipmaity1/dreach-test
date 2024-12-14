import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import axios from 'axios';

// Create a fetch-based fallback client
const createHttpClient = () => {
  if (typeof axios !== 'undefined') {
    return axios;
  }

  return {
    get: async (url: string, config?: { params?: any }) => {
      const queryParams = config?.params 
        ? '?' + new URLSearchParams(config.params).toString() 
        : '';
      const response = await fetch(url + queryParams);
      if (!response.ok) throw new Error('Network response was not ok');
      return { data: await response.json() };
    },
    post: async (url: string, data: any) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return { data: await response.json() };
    },
  };
};

const httpClient = createHttpClient();

// Types
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  availability: string[];
}

export interface Appointment {
  id?: string;
  doctorId: string;
  patientName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  specialty: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
}

interface DoctorState {
  doctors: Doctor[];
  filteredDoctors: Doctor[];
  loading: boolean;
  error: string | null;

  // Actions
  fetchDoctors: (specialty?: string) => Promise<void>;
  searchDoctors: (query: string) => void;
  bookAppointment: (appointment: Appointment) => Promise<Appointment | null>;
}

export const useDoctorStore = create<DoctorState>()(
  devtools(
    (set, get) => ({
      doctors: [],
      filteredDoctors: [],
      loading: false,
      error: null,

      fetchDoctors: async (specialty) => {
        set({ loading: true, error: null });
        try {
          const response = await httpClient.get('/api/doctors', { 
            params: { specialty } 
          });
          set({ 
            doctors: response.data, 
            filteredDoctors: response.data,
            loading: false 
          });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to fetch doctors', 
            loading: false 
          });
        }
      },

      searchDoctors: (query) => {
        const { doctors } = get();
        const filtered = doctors.filter(
          doctor => 
            doctor.name.toLowerCase().includes(query.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(query.toLowerCase())
        );
        set({ filteredDoctors: filtered });
      },

      bookAppointment: async (appointment) => {
        set({ loading: true, error: null });
        try {
          const response = await httpClient.post('/api/appointments', appointment);
          set({ loading: false });
          return response.data;
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to book appointment', 
            loading: false 
          });
          return null;
        }
      }
    }),
    { name: 'DoctorStore' }
  )
);
