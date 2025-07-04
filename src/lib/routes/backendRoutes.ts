class AuthRoutes {
  private readonly base: string = "/users/auth";

  signup() {
    return `${this.base}/signup`;
  }

  signin() {
    return `${this.base}/signin`;
  }
}

class UserRoutes {
  private readonly base: string = "/users";

  getAllUsers() {
    return this.base;
  }

  getUser(id: string) {
    return `${this.base}/${id}`;
  }

  createUser() {
    return this.base;
  }

  updateUser(id: string) {
    return `${this.base}/${id}`;
  }

  deleteUser(id: string) {
    return `${this.base}/${id}`;
  }
}

class RolesRoute {
  private readonly base: string = "/roles";

  getAllUsers() {
    return this.base;
  }

  getRole(id: string) {
    return `${this.base}/${id}`;
  }

  createRole() {
    return this.base;
  }

  updateRole(id: string) {
    return `${this.base}/${id}`;
  }

  deleteRole(id: string) {
    return `${this.base}/${id}`;
  }
}

class PermissionsRoutes {
  private readonly base: string = "/permissions";

  getAllUsers() {
    return this.base;
  }

  getPermission(id: string) {
    return `${this.base}/${id}`;
  }

  createPermission() {
    return this.base;
  }

  updatePermission(id: string) {
    return `${this.base}/${id}`;
  }

  deletePermission(id: string) {
    return `${this.base}/${id}`;
  }
}

export const authRoutes = new AuthRoutes();
export const userRoutes = new UserRoutes();
export const rolesRoute = new RolesRoute();
export const permissionsRoute = new PermissionsRoutes();
