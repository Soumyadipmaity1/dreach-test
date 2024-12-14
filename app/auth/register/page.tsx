import Register from "@/components/page-components/Auth/Register";
import React from "react";

import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

const page = () => {
  if (getCookie("Auth", { cookies })) return redirect("/");

  return <Register />;
};

export default page;
