export interface IUser {
  id: string;
  email: string;
  username: string;
  image: string | null;
  bookmark: IProperty[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IProperty {
  id: string;
  bookmarkedBy: IUser[];
  ownerId: string;
  name: string;
  type: string;
  description: string | null;

  street: string | null;
  city: string | null;
  state: string | null;
  zipcode: string | null;

  beds: number | null;
  baths: number | null;
  squareFeet: number | null;

  amenities: string[];
  images: string[];

  nightlyRate?: number | null;
  weeklyRate?: number | null;
  monthlyRate?: number | null;

  sellerName?: string | null;
  sellerEmail?: string | null;
  sellerPhone?: string | null;

  createdAt: Date;
  updatedAt: Date;
}
