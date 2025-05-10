export interface Hotel {
    id: number;
    url: string | null;
    name: string;
    pool: boolean;
    spa: boolean;
    rating: number | null;
    location: string | null;
    description: string | null;
    price: number | null;
}

export interface HotelForParams {
    id: number;
    image_url: string | null;
    name: string;
    have_pool: boolean;
    have_spa: boolean;
    rating: number | null;
    location: string | null;
    description: string | null;
    price: number | null;
}

export interface User {
    name: string;
    fullname: string;
    job: string;
    id: string;
}
