import Image from "next/image";
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-8">
      <h1 className="text-4xl font-bold mb-4">🙋‍♀️ About Me</h1>

      <p className="text-lg leading-relaxed">
        I'm a PhD student in <strong>Biomedical Engineering</strong> at the University of Toronto, working in the{" "}
        <a
          href="https://torontotnbs.com"
           className="text-rose-400 hover:text-rose-300 underline underline-offset-4 decoration-rose-400 hover:decoration-rose-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Translational Neurophysiology & Brain Stimulation Lab
        </a>{" "}
        under the supervision of{" "}
        <a
          href="https://www.uhnresearch.ca/researcher/luka-milosevic"
          className="text-rose-400 hover:text-rose-300 underline underline-offset-4 decoration-rose-400 hover:decoration-rose-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Luka Milosevic
        </a>{" "}
        and{" "}
        <a
          href="https://research.sunnybrook.ca/researchers/benjamin-davidson/"
           className="text-rose-400 hover:text-rose-300 underline underline-offset-4 decoration-rose-400 hover:decoration-rose-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Benjamin Davidson
        </a>.
      </p>

      <p className="text-lg leading-relaxed">
        My research focuses on <strong>Deep Brain Stimulation for the treatment of psychiatric and mood disorders
        like depression, OCD, and substance addiction</strong>.
      </p>

      <p className="text-lg leading-relaxed">
        I completed my undergraduate studies at the University of Toronto in Computer Science and Cognitive Science,
        where I worked on projects involving machine learning, ethics of AI, and psychedelics for neurodegenerative disorders.
        I am very interested in brain-computer interfaces, and I hope to engage in high-impact clinical work to better lives of patients.
      </p>

      <p className="text-lg leading-relaxed">
        Outside of research, I enjoy listening to braindance and trip-hop, watching surrealistic movies I don't understand,
        making very specific to-do lists about things I might never do, taking care of my plants, lifting, and reading psychology and philosophy.
        I indulge in daily espresso and choline overdose.
      </p>

      {/* Timeline */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">My life so far ...</h2>
        <ul className="space-y-6">
          <li className="flex items-center gap-6">
            <Image
              src="/amritsar.jpg"
              alt="Amritsar"
              width={56}
              height={56}
              className="rounded-xl shadow-md object-cover aspect-square"
            />
            <div>
              <time className="text-sm text-gray-400">2001</time>
              <p className="text-base text-white font-medium">Born in Amritsar, India</p>
            </div>
          </li>
          <li className="flex items-center gap-6">
            <Image
              src="/uoft.jpg"
              alt="Uoft"
              width={56}
              height={56}
              className="rounded-xl shadow-md object-cover aspect-square"
            />
            <div>
              <time className="text-sm text-gray-400">2020</time>
              <p className="text-base text-white font-medium">Started undergrad at UofT (Covid-era)</p>
            </div>
          </li>
          <li className="flex items-center gap-6">
            <Image
              src="/toronto.jpg"
              alt="Toronto"
              width={56}
              height={56}
              className="rounded-xl shadow-md object-cover aspect-square"
            />
            <div>
              <time className="text-sm text-gray-400">2021</time>
              <p className="text-base text-white font-medium">Moved to Toronto</p>
            </div>
          </li>
          <li className="flex items-center gap-6">
            <Image
              src="/istanbul.jpg"
              alt="Istanbul"
              width={56}
              height={56}
              className="rounded-xl shadow-md object-cover aspect-square"
            />
            <div>
              <time className="text-sm text-gray-400">2022</time>
              <p className="text-base text-white font-medium">Traveled to Istanbul, which was the closest experience to heaven on earth for me</p>
            </div>
          </li>
          <li className="flex items-center gap-6">
            <Image
              src="/phd.jpg"
              alt="PHD"
              width={56}
              height={56}
              className="rounded-xl shadow-md object-cover aspect-square"
            />
            <div>
              <time className="text-sm text-gray-400">2025</time>
              <p className="text-base text-white font-medium">Started PhD in Biomedical Engineering at UofT</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
  
}
