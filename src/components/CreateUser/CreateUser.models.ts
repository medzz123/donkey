export interface UserValues {
  username: string;
  name: string;
  password: string;
}

export interface CreateUserProps {
  onSuccess: () => void;
  open: boolean;
  handleClose: () => void;
}
