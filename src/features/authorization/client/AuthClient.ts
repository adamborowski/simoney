import { AuthStateHook } from "react-firebase-hooks/auth";

type AsyncResult = { success: true } | { success: false; message: string };

export interface AuthClient {
  login(username: string, password: string): Promise<AsyncResult>;
  register(username: string, password: string): Promise<AsyncResult>;
  logout(): Promise<AsyncResult>;
  useAuthState: () => AuthStateHook;
}
