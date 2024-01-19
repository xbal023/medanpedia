export interface Options {
  url?: string;
  method?: string;
}

export interface Profile {
  username: string;
  full_name: string;
  balance: string;
}

export interface Services {
  id: string;
  category: string;
  name: string;
  price: string;
  min: string;
  max: string;
  description: string;
  type: string;
  refill: string;
  masa_refill: string | null;
  average_time: string;
}

export interface Order {
  id: number;
  price: number;
}

export interface Status {
  id: number;
  status: string;
  start_count: number;
  remains: number;
}

export interface Refill {
  id_refill: number;
}

export interface RefillStatus {
  status: string;
}

export interface Data<T> {
  status: boolean;
  data: T;
}

export interface PProfile {}
export interface PServices {
  service_fav?: boolean;
}
export interface POrder {
  service: number;
  target: string;
  quantity: number;
  custom_comments?: string;
  custom_link?: string;
}
export interface PStatus {
  id: string | number;
}
export interface PRefill {
  id_order: string | number;
}
export interface PRefillStatus {
  id_refill: string | number;
}