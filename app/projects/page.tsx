'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  github?: string;
  paper?: string;
  slides?: string;
};

const projectsByYear: Record<string, Project[]> = {
  "2024": [
    {
      title: "🎵 Deep Music Generation Robustness",
      description:
        "Recent advances in deep music generation frequently involve training on extensive datasets comprising thousands of hours of music. However, despite the availability of such data, many contemporary models, such as MetaAI’s MusicGen, often forego the implementation of data augmentation techniques during pre-processing. This oversight raises questions about the robustness and flexibility of the models when confronted with modified input data. This study aims to bridge this gap by conducting experiments that employ diverse augmentation techniques, including pitch shifting, time stretching, and volume modification, to critically assess the model’s ability to maintain musical coherence and quality. By presenting both original and systematically augmented datasets to MusicGen, we evaluate the model’s generative performance through quantitative metrics such as Root Mean Squared Error and Mel-frequency Cepstral Coefficients, as well as qualitative human judgment via a Turing-like test. The findings suggest that while the model demonstrates a basic competency in generating continuations from unaltered prompts, its ability to adapt to and correct for augmented inputs is limited. These results underscore the necessity for incorporating resilience to data imperfections as a key criterion in the evolution of deep learning models for music generation.",
      github: "https://github.com/shysta-sehgal/MusicGen",
      paper: "/pdfs/report.pdf",
    },
    {
      title: "🧠 Deciphering Cognition with CNNs",
      description:
        "This study explores the intersection of cognitive science, machine learning, and computer vision, by leveraging convolutional neural networks (CNNs) and highlighting their similarity to human cognition both in terms of structure and function. It delves into the depth versus width trade-off in CNNs, mirrored in human cognition’s efficiency and depth of processing, as seen in various cognitive tasks including memory and learning. Leveraging MNIST and CIFAR-10 datasets, this research conducts two depth-width trade-off experiments to compare the learning capacity of CNNs with respect to human visual cognition models. Through a controlled experimental setup in which CNN depth and width are incrementally manipulated, this study aims to offer a nuanced understanding of how computational models reflect and can enhance our grasp of human cognition and ultimately finds that more shallow models demonstrate superior learning efficiency in shorter training sessions, particularly on more simple datasets.",
      github: "https://github.com/shysta-sehgal/CompVisNet",
      paper: "/pdfs/compvis.pdf",
    },
  ],
  "2022": [
    {
      title: "📚 Improving Reading Curricula",
      description:
        "This project is undertaken as work done for the Jackman Scholars-in-Residence 2022 research program at the Computational and Psycholinguistics Lab at the University of Toronto. The specific research focuses on improving reading curricula by developing an explicit theory of reading instruction. Broadly, the research is undertaken to understand how children learn to read and what kind of teaching helps pre-literate children acquire reading rules.",
      github: "https://github.com/shysta-sehgal/reading-curricula-analysis",
      slides: "/pdfs/SiR Presentation.pdf",
    },
  ],
};

export default function ProjectsPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
  if (typeof window === "undefined") return; // SSR guard

  if (openIndex && refs.current[openIndex]) {
    // Delay scroll to avoid layout shifts on hydration
    setTimeout(() => {
      refs.current[openIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }
}, [openIndex]);

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      {Object.entries(projectsByYear)
        .sort(([a], [b]) => parseInt(b) - parseInt(a))
        .map(([year, projects]) => (
          <section key={year} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">{year}</h2>

            {projects.map((project, index) => {
              const key = `${year}-${index}`;
              const isOpen = openIndex === key;

              return (
                <div
                  key={key}
                  className="border-b border-gray-700 py-4"
                  ref={(el) => {
  refs.current[key] = el;
}}
                >
                  <button
                    className="w-full text-left text-xl font-semibold hover:text-rose-400 transition"
                    onClick={() => setOpenIndex(isOpen ? null : key)}
                  >
                    {project.title}
                  </button>

                  {isOpen && (
                    <div className="mt-4 space-y-4 text-lg">
                      <p>{project.description}</p>
                      <div className="space-x-4">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            className="underline text-rose-400"
                          >
                            GitHub
                          </Link>
                        )}
                        {project.paper && (
                          <>
                            <Link
                              href={project.paper}
                              target="_blank"
                              className="underline text-rose-400"
                            >
                              Paper
                            </Link>
                            <iframe
                              src={project.paper}
                              className="w-full h-[700px] rounded-lg shadow-lg border"
                            />
                          </>
                        )}
                        {project.slides && (
                          <>
                            <Link
                              href={project.slides}
                              target="_blank"
                              className="underline text-rose-400"
                            >
                              Slides
                            </Link>
                            <iframe
                              src={project.slides}
                              className="w-full h-[700px] rounded-lg shadow-lg border"
                            />
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        ))}
    </main>
  );
}
