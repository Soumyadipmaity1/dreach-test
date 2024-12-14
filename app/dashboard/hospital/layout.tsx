import { ubuntu } from "@/@types/font/Font";
import { RNChildProp } from "@/@types/interface/Interface";
import { Header, HospitalSideNav } from "@/components/Dashboard/ui";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession } from "next-auth/react";
import React from "react";

const Layout: React.FC<RNChildProp> = ({ children }: RNChildProp) => {
  return (
    <main className={ubuntu.className}>
      <div className="flex">
        <section>
          <HospitalSideNav />
        </section>
        <div className="w-[100%] h-screen overflow-y-auto mx-auto">
          <div className="bg-[#125872] text-white ">
            <Header />
          </div>
          <ScrollArea className="h-[93.9dvh] bg-[#497585]">{children}</ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default Layout;
