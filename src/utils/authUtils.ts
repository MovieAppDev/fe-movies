export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const getUserId = (): number | null => {
  const user = localStorage.getItem("user");
  try {
    return user ? JSON.parse(user).id : null;
  } catch {
    return null;
  }
};
