// React import
import { useState } from "react";

interface TokenHook {
  token: string | null;
  setToken: (userToken: string, save: boolean) => void;
}

export default function useToken(): TokenHook {
  const getToken = (): string | null => {
    const tokenStringSes = sessionStorage.getItem("strong-admin");
    const tokenStringLoc = localStorage.getItem("strong-admin");
    const userToken = JSON.parse(tokenStringSes || tokenStringLoc || 'null');
    return userToken;
  };

  const [token, setToken] = useState<string | null>(getToken());

  const saveToken = (userToken: string, save: boolean): void => {
    save
      ? localStorage.setItem("strong-admin", JSON.stringify(userToken))
      : sessionStorage.setItem("strong-admin", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
