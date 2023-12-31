import { Tilt_Warp } from "next/font/google";

const tiltWarp = Tilt_Warp({ subsets: ["latin"] });

const FormWrapper = ({ children, header }) => (
  <div className="flex flex-col border-2 border-solid border-blue-300 rounded-md p-8 gap-4">
    <span
      className={`-mt-14 md:-mt-16 mb-4 p-2 extra-bold text-2xl md:text-3xl text-blue-300 bg-black self-start ${tiltWarp.className}`}
    >
      {header}
    </span>
    {children}
  </div>
);

export default FormWrapper;
