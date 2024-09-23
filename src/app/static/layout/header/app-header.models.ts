import { AuthUser } from "../../../auth/domains/auth-user.domain";

export interface AppHeaderModel {
  user?: AuthUser;
  isAuthenticated?: boolean;
}
