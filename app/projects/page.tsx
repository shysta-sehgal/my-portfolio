'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  github?: string;
  paper?: string;
  report?: string;
  slides?: string;
};

const projectsByYear: Record<string, Project[]> = {
  "2025": [
    {
      title: "🍄 Evaluating Psychedelic Therapies for Neurodegenerative Disorders: Research Gaps, Risks, and Future Directions",
      description: "This report was prepared as final coursework for HMB491: Project in Biotechnology. In this course, I interned with Tidal Care Inc., a psychedelics-based research organisation in Alberta. \n\nThe primary objectives of this project are to synthesize and critically evaluate the current evidence on the therapeutic potential of psychedelics in various health contexts, with a particular focus on neurodegenerative disorders like Alzheimer’s and Parkinson’s Disease. Specifically, this project aims to identify proposed mechanisms of action like serotonergic modulation, enhancement of brain-derived neurotrophic factor (BDNF), regulation of the mTOR pathway, and reductions in neuroinflammation that may underpin the observed or hypothesized clinical benefits.",
      report: "/pdfs/hmb491_report_shysta_sehgal.pdf",
    },
  ],
  "2024": [
    {
      title: "🎧 Deep Music Generation Robustness",
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
  "2023": [
    {
      title: "🤖 Towards the Ontological Unfolding of Generative AI: An Interdisciplinary Exploration of Creativity, Epistemology, and Ethics",
      description:
       "This paper explores the complex interplay between Generative Art and Artificial Intelligence (AI), focusing on its emerging role as a creative agent, its epistemological implications, and the ethical questions it raises. It introduces the term 'Generative Singularity'—a theoretical stage where Generative AI can produce artistic, scientific, and intellectual outputs comparable to humans, while generating unique forms of algorithmic 'thought' or 'consciousness'. This phase is marked by unpredictability and autonomy, challenging existing human-centered ethical and ontological frameworks. The paper dives into the ethical labyrinth of 'AI Identity', raising urgent questions: Should such entities be granted rights, responsibilities, or moral consideration? If an AI-designed building collapses, is it accountable? It emphasizes the impact of training data on AI decision-making and argues for unbiased, ethical curation. A key focus is 'Ethical Frameworks for Generative AI in Architecture and Design', where creative algorithms could influence urban planning and social interactions—sometimes risking psychological or socioeconomic harm. The work underscores the need for human-AI collaboration and feedback loops to ensure ethical, innovative design. It concludes with a call for interdisciplinary dialogue—across philosophy, computer science, social science, and art—to redefine creativity and ethics in an age of autonomous algorithmic agents.",
      paper: "/pdfs/shystasehgal.pdf",
    },
  ],
  "2022": [
    {
      title: "📚 Improving Reading Curricula",
      description:
        "This project was undertaken as work done for the Jackman Scholars-in-Residence 2022 research program at the Computational and Psycholinguistics Lab at the University of Toronto. The specific research focuses on improving reading curricula by developing an explicit theory of reading instruction. Broadly, the research is undertaken to understand how children learn to read and what kind of teaching helps pre-literate children acquire reading rules.",
      github: "https://github.com/shysta-sehgal/reading-curricula-analysis",
      slides: "/pdfs/SiR Presentation.pdf",
    },
  ],
  "2021": [
    {
      title: "👭 Drivers of Women’s Participation in STEM in The Academy",
      description: "This project was made possible with funding from the Laidlaw Scholars Program as well as Dr. Caroline Manion at the Ontario Institute for Studies, who helped me review the draft and provided research guidance whenever required. \n\nThis research explored the enabling and constraining factors for women’s participation in tertiary STEM education. A literature review of 19 peer-reviewed articles was conducted to explore these factors. Theories like cognitive consistency theory, social role theory, spotlighting theory, gender-equality education paradox, and learning styles theory were considered to explain the findings. Active instruction, community and support, and role models and a higher percentage of women in STEM in a university were the enabling factors for women’s participation and persistence in STEM majors. Negative gender stereotypes and the gendered ideologies in affluent societies and globalised areas were found to dissuade women from pursuing STEM.",
        github: "https://github.com/shysta-sehgal/reading-curricula-analysis",
      paper: "/pdfs/Research paper.pdf",
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
      <h1 className="text-4xl font-bold mb-8">🚧 Projects and Papers</h1>

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
                      {project.description.split("\n\n").map((para, i) => (
  <p key={i} className="mb-4">{para}</p>
))}
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
                        {project.report && (
                          <>
                            <Link
                              href={project.report}
                              target="_blank"
                              className="underline text-rose-400"
                            >
                              Report
                            </Link>
                            <iframe
                              src={project.report}
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
