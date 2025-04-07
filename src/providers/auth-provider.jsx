import React, { useEffect } from "react";
import { useMe } from "../hooks/auth/use-me";
import useAuthentication from "../stores/use-authentication";

export const AuthProvider = ({ children }) => {
  const { authenticate, logout } = useAuthentication((state) => state);
  const { data, isLoading } = useMe({ options: { staleTime: 0 } });

  useEffect(() => {
    if (!isLoading && data && data.id) {
      authenticate(data);
    }
  }, [data, isLoading]);
  return <div>{children}</div>;
};

