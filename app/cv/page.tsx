export const metadata = {
  title: "CV & Tech Stack – Shysta Sehgal",
  description: "My resume and technical skill set.",
};

export default function CVPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-10">📄 CV & Tech Stack</h1>

      {/* CV */}
      <div className="mb-12">
        <a
          href="/pdfs/shysta_sehgal_cv.pdf"
          target="_blank"
          className="text-lg underline text-rose-400 hover:text-rose-300"
        >
          👉 View my CV
        </a>
      </div>

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">🔧 Tech Stack</h2>

        {/* Programming Languages */}
        <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white",
            "https://img.shields.io/badge/-C-A8B9CC?style=flat-square&logo=c&logoColor=white",
            "https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java",
            "https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white",
            "https://img.shields.io/badge/-C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white",
            "https://img.shields.io/badge/-C%23-239120?style=flat-square&logo=csharp&logoColor=white",
            "https://img.shields.io/badge/-R-276DC3?style=flat-square&logo=r&logoColor=white",
          ].map((src, i) => (
            <img key={i} src={src} alt="Badge" className="h-6" />
          ))}
        </div>

        {/* Libraries & Frameworks */}
        <h3 className="text-xl font-semibold mb-2">Libraries & Frameworks</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "https://img.shields.io/badge/-PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white",
            "https://img.shields.io/badge/-Scikit%20Learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white",
            "https://img.shields.io/badge/-SciPy-8CAAE6?style=flat-square&logo=scipy&logoColor=white",
            "https://img.shields.io/badge/-Matplotlib-11557C?style=flat-square&logo=matplotlib&logoColor=white",
            "https://img.shields.io/badge/-NumPy-013243?style=flat-square&logo=numpy&logoColor=white",
            "https://img.shields.io/badge/-Pandas-150458?style=flat-square&logo=pandas&logoColor=white",
            "https://img.shields.io/badge/-Seaborn-008080?style=flat-square",
            "https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white",
            "https://img.shields.io/badge/-ROS-22314E?style=flat-square&logo=ros&logoColor=white",
            "https://img.shields.io/badge/-TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white",
          ].map((src, i) => (
            <img key={i} src={src} alt="Badge" className="h-6" />
          ))}
        </div>

        {/* Tools & Software */}
        <h3 className="text-xl font-semibold mb-2">Tools & Software</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
            "https://img.shields.io/badge/-Linux-FCC624?style=flat-square&logo=linux&logoColor=black",
          ].map((src, i) => (
            <img key={i} src={src} alt="Badge" className="h-6" />
          ))}
        </div>
      </section>
    </main>
  );
}
