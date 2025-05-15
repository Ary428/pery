export const auth = {
    getToken: () => localStorage.getItem("pery_token"),
    setToken: (token: string) => localStorage.setItem("pery_token", token),
    clear: () => localStorage.removeItem("pery_token"),
  };
  