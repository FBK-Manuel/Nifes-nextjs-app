export type RegisterFormData = {
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  email: string;
  school: string;
  profileImage: string;
  department: string;
  level: string;
  fellowship: string;
};

export type EventCardProps = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: Date;
  eventDate: Date;
  check: number;
};

export type PassedEventCardProps = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: Date;
  eventDate: Date;
  movedAt: Date;
  check: number;
};
