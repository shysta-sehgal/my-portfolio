import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 space-y-6">

<div className="relative w-[240px] h-[240px] rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300">
  <Image
    src="/Shysta Sehgal-07.jpg"
    alt="Profile picture"
    fill
    className="object-cover"
  />
</div>
    {/* <main className="min-h-screen flex flex-col items-center justify-center text-center p-8 space-y-6"> */}
      <h1 className="text-4xl font-bold">Hi, I’m Shysta Sehgal</h1>
<div className="text-xl max-w-xl leading-relaxed">
  Ph.D. student @{" "}
  <a
    href="https://torontotnbs.com"
    className="text-rose-400 hover:text-rose-300 underline underline-offset-4 decoration-[1px] decoration-rose-400 hover:decoration-rose-300 transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    Translational Neurophysiology & Brain Stimulation Lab
  </a>
</div>
<p className="text-xl max-w-xl">
  Previously, B.Sc. (Hons) CS & CogSci @ UofT
</p>
     
    </main>
  );
}