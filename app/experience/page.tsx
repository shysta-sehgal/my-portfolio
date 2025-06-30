import Image from "next/image";

export default function ExperiencePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-12 text-white">
      <h1 className="text-4xl font-bold mb-8">💼 Work Experience</h1>

      {/* BMO Lab Experience */}
      <section className="flex items-start gap-6">
        <Image
          src="/logos/bmo.png" // Ensure this logo exists at public/logos/bmo.png
          alt="BMO Lab"
          width={56}
          height={56}
          className="rounded-md object-contain bg-white p-1"
        />
        <div>
          <h2 className="text-xl font-semibold text-rose-400">Research Intern – BMO Lab, University of Toronto</h2>
          <p className="text-sm text-gray-400">Sep 2024 – Apr 2025</p>
          <p className="mt-2 text-base leading-relaxed">
            Worked on implementing <strong>sparse autoencoders</strong> to improve feature interpretability in large language models.
          </p>
        </div>
      </section>

      {/* City of Toronto Experience */}
      <section className="flex items-start gap-6">
        <Image
          src="/logos/city_of_toronto_logo.jpeg" // Ensure this logo exists at public/logos/toronto.png
          alt="City of Toronto"
          width={56}
          height={56}
          className="rounded-md object-contain bg-white p-1"
        />
        <div>
          <h2 className="text-xl font-semibold text-rose-400">Data Science Intern – City of Toronto</h2>
          <p className="text-sm text-gray-400">May 2024 – Aug 2024</p>
          <p className="mt-2 text-base leading-relaxed">
            Designed and implemented data validation rules to flag erroneous submissions from private transportation companies
            like Uber and Lyft, helping improve the integrity of data submitted to the City of Toronto.
          </p>
        </div>
      </section>
            <section className="flex items-start gap-6">
        <Image
          src="/logos/qualcomm.jpg" // Ensure this logo exists at public/logos/bmo.png
          alt="Qualcomm"
          width={56}
          height={56}
          className="rounded-md object-contain bg-white p-1"
        />
        <div>
          <h2 className="text-xl font-semibold text-rose-400">Machine Learning Research Intern – Qualcomm</h2>
          <p className="text-sm text-gray-400">May 2023 – Dec 2023</p>
          <p className="mt-2 text-base leading-relaxed">
            Researched and built proof-of-concept for forward gradients with sparse weight updates to eliminate backpropagation, enabling low-power on-device AI solutions.
          </p>
        </div>
      </section>
      <section className="flex items-start gap-6">
        <Image
          src="/logos/images.png" // Ensure this logo exists at public/logos/bmo.png
          alt="Vector"
          width={56}
          height={56}
          className="rounded-md object-contain bg-white p-1"
        />
        <div>
          <h2 className="text-xl font-semibold text-rose-400">Research Intern – Qualcomm</h2>
          <p className="text-sm text-gray-400">May 2022 – Aug 2022</p>
          <p className="mt-2 text-base leading-relaxed">
            Developed simulation environments (e.g., suturing, needle grasp, peg transfer) in
NVIDIA Isaac Sim for surgical robots to enable learning on soft objects and facilitate
real-life surgical interventions.
          </p>
        </div>
      </section>
    </main>
  );
}
