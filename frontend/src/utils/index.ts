export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
