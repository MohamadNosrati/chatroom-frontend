// import frontRoutes from "@/lib/routes/frontRoutes";
// import { NextResponse, NextRequest } from "next/server";

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
//     "/!signin",
//     "/!signup",
//   ],
// };

// export async function middleware(request: NextRequest) {
//   const pathName = request.nextUrl.pathname;
//   const token = request.cookies.get(
//     process.env.NEXT_PUBLIC_TOKEN_KEY as string
//   )?.value;
//   if (pathName === frontRoutes.signin() || pathName === frontRoutes.signup()) {
//     if (token) {
//       NextResponse.redirect(new URL(frontRoutes.dashboard(), request.url));
//     }
//   }
//   if(pathName.startsWith(frontRoutes.dashboard()) && !token){
//       NextResponse.redirect(new URL(frontRoutes.signin(), request.url));
//   }
//   NextResponse.next();
// }
