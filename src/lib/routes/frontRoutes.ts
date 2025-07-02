class FrontRoutes {
  signup() {
    return "/signup";
  }

  signin() {
    return "/signin";
  }

  dashboard(){
    return "/dashboard"
  }
}

const frontRoutes = new FrontRoutes();

export default frontRoutes;
