import { createContext, useState } from "react";
import type { IUser } from "../types/user.type";

interface IUserContext {
  loading: boolean;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
