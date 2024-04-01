import SvgLogo from "@/components/chatbotLogo";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-10">
        <h1 className="text-4xl font-bold mt-20">
          <a href="#" className="flex items-center">
            <SvgLogo />
            <span
              className="ml-2 font-bold text-indigo-700"
              style={{ fontSize: "1em" }}
            >
              SiteGenie
            </span>
          </a>
        </h1>
        <SignIn className="bg-black" />
      </div>
    </>
  );
}
