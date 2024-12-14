// Children Prop
export interface RNChildProp {
  children?: React.ReactNode;
}

// Slider Settings
export interface SliderSettings {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  arrows?: boolean;
  pauseOnHover?: boolean;
}

// Doctor Search
export interface SearchLocationProps {
  onSearch: (query: string) => void;
}

// Search Context
export interface SearchContext {
  query: string;
  setQuery: (query: string) => void;
}

// Filter Dropdown
export interface FilterDropdownProps {
  title: string;
  options: string[];
}
