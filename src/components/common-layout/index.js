// import { currentUser } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs";

// import Header from "../header";
// import { fetchProfileAction } from "@/actions";
// import * as React from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

// async function CommonLayout({ children, ...props }) {
//   // const user = await currentUser();
//    // const  user = auth();
//      const { userId } = auth();


//   const profileInfo = await fetchProfileAction(userId?.id);

//   return (
//     <NextThemesProvider {...props}>
//       <div className="mx-auto max-w-7xl p-6 lg:px-8">
//         {/* Header Component */}
//         <Header
//           profileInfo={profileInfo}
//           user={JSON.parse(JSON.stringify(user))}
//         />
//         {/* Header Component */}

//         {/* Main Content */}
//         <main>{children}</main>

//         {/* Main Content */}
//       </div>
//     </NextThemesProvider>
//   );
// }

// export default CommonLayout;



import { auth } from "@clerk/nextjs/server";
import Header from "../header";
import { fetchProfileAction } from "@/actions";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

async function CommonLayout({ children, ...props }) {
  // Clerk auth (server-side)
  const { userId } = auth(); // userId is a STRING or null

  // Fetch profile using userId
  const profileInfo = userId
    ? await fetchProfileAction(userId)
    : null;

  return (
    <NextThemesProvider {...props}>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        {/* Header */}
        <Header
          profileInfo={profileInfo}
          userId={userId}   // ✅ pass userId instead of undefined user
        />

        {/* Main Content */}
        <main>{children}</main>
      </div>
    </NextThemesProvider>
  );
}

export default CommonLayout;
