class FrontRoutes {
  signup() {
    return "/signup";
  }

  signin() {
    return "/signin";
  }

  dashboard() {
    return "/dashboard";
  }
  dashboardUsers() {
    return "/dashboard/users";
  }
}

const frontRoutes = new FrontRoutes();

export default frontRoutes;
