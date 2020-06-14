export interface CustomerValues {
  name: string;
  contact: string;
  lineOne: string;
  lineTwo: string;
  city: string;
  country: string;
  postcode: string;
  mobilePhone: string;
  workPhone: string;
  accountType: string;
}

export interface CreateCustomerProps {
  onSuccess: () => void;
}

export interface CreateCustomerRefs {
  handleClose: () => void;
  handleOpen: () => void;
}
