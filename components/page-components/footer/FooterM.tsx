import React from "react";

const curryear = new Date().getFullYear();

const FooterM = () => {
  return (
    <div>
      <main className="tfooter">
        <div className="pb-4">
          <div className="footer-container p-8">
            <div></div>
          </div>
          <div>Footer</div>
        </div>
        <div className="h-0.5 w-[80%] mx-auto opacity-10 rounded-sm bg-slate-300 flex items-center justify-center"></div>
        <footer className="tfooter-copyright">
          <p>
            © {curryear} Healthunity Solutions Pvt Ltd | All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default FooterM;
