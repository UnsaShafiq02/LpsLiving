import React from 'react';
import ShortServices from './ShortServices';

// const Layout = ({ children }) => {
//   return (
//     <div className="bg-white min-h-screen w-full">

//       {/* soft premium background glow */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
//         <div className="absolute top-[-180px] left-[-120px] w-[320px] h-[320px] bg-[#224C26]/5 blur-3xl rounded-full" />
//         <div className="absolute bottom-[-180px] right-[-120px] w-[320px] h-[320px] bg-[#0D2040]/5 blur-3xl rounded-full" />
//       </div>

//       <div className="relative max-w-[1650px] mx-auto px-2 sm:px-3 lg:px-3">

//         {/* ================= DESKTOP ================= */}
//         {/* ================= MAIN FULL WIDTH ================= */}
// <div className="py-3">

//   <main className="w-full">
//     <div
//       className="
//         bg-[#ECE5DD]
//         border border-[#E5E7EB]
//         shadow-sm
//         rounded-2xl
//         overflow-hidden
//       "
//     >
//       {children}
//     </div>
//   </main>

// </div>

//         {/* ================= TABLET ================= */}
//         <div className="hidden md:block lg:hidden">

//           <div
//             className="
//               bg-[#ECE5DD]
//               rounded-2xl
//               shadow-sm
//               border border-[#E5E7EB]
//               overflow-hidden
//             "
//           >
//             {children}
//           </div>

//           <div className="grid grid-cols-2 gap-4 mt-4">
//             <ShortServices />
//           </div>

//         </div>

//         {/* ================= MOBILE ================= */}
//         <div className="block md:hidden">

//           <div
//             className="
//               bg-[#ECE5DD]
//               rounded-2xl
//               shadow-sm
//               border border-[#E5E7EB]
//               overflow-hidden
//             "
//           >
//             {children}
//           </div>

//           <div className="mt-4">
//             <ShortServices />
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };
const Layout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen w-full">

      {/* background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-180px] left-[-120px] w-[320px] h-[320px] bg-[#224C26]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[-180px] right-[-120px] w-[320px] h-[320px] bg-[#0D2040]/5 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-[1650px] mx-auto px-2 sm:px-3 lg:px-3">

        {/* MAIN CONTENT (ONLY ONCE) */}
        <main className="w-full py-3">
          <div className="bg-[#ECE5DD] border border-[#E5E7EB] shadow-sm rounded-2xl overflow-hidden">
            {children}
          </div>
        </main>

        {/* SHORT SERVICES (responsive only) */}
        {/* ================= SECTION TITLE ================= */}
<div className="w-full flex justify-center mt-20 mb-6 px-6">
  <div className="text-center max-w-xl">

    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#0D2040] tracking-wide">
      Our Services
    </h2>

    {/* minimal premium line */}
    <div className="w-16 h-[2px] bg-[#224C26] mx-auto mt-3 rounded-full" />

  </div>
</div>
       {/* ================= DESKTOP SPLIT ================= */}
<div className="hidden lg:grid grid-cols-[45%_45%] gap-12 mt-12">

  {/* LEFT → SCROLLABLE CARDS */}
  <div className="h-[80vh] overflow-y-auto pr-4 overscroll-contain">
    <ShortServices />
  </div>

  {/* RIGHT → STICKY TEXT */}
  <div className="sticky top-28 h-[80vh] flex items-center pointer-events-none">
  <div className="text-3xl xl:text-4xl font-light text-[#0D2040] leading-[1.7] font-serif">
    Strategic accounting and tax solutions built for modern businesses
    and individuals, combining technical expertise with a clear,
    commercially focused approach.Delivering clarity, control, and confident financial decisions for clients.

  </div>
</div>
  

</div>

{/* ================= MOBILE / TABLET ================= */}
<div className="block lg:hidden mt-10 space-y-8">

  <h2 className="text-2xl sm:text-3xl font-medium text-[#0D2040] leading-[1.5] px-4">
    Strategic accounting solutions designed to support growth, ensure
    compliance, and provide clarity at every stage of your financial journey.
  </h2>

  <div className="px-4">
    <ShortServices />
  </div>

</div>

      </div>
    </div>
  );
};

export default Layout;