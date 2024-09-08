import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="mt-16 mb-16 md:mb-12">
      <h1 className="font-bold tracking-tighter leading-tight md:pr-8">
        Pixelated thoughts about design, creativity, and memes.
      </h1>
      <h4 className=" text-gray-500 text-sm text-center md:text-left mt-5">
       A blog by Riley Jones using Next.js <em>(he has no idea what he is doing)</em>
      </h4>
    </section>


  );
}
