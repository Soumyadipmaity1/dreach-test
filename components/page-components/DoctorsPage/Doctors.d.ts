export interface DoctorsCardProps {
  name: string;
  speciality: string;
  experience: string;
  location: string;
  clinicName: string;
  availability: string;
  consultationFee: string;
  discountFee: string;
  rating: number;
  patientStories: number;
}

export interface Slot {
  time: string;
  available: boolean;
}
