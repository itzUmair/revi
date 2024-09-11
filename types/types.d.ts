export type User = {
  user_id: number;
  first_name: string;
  last_name: string | null;
  email: string;
  user_type: string;
};

export type UserRaw = {
  user_id: number;
  first_name: string;
  last_name: string | null;
  email: string;
  user_type: number;
};
