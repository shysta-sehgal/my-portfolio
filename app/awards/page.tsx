// app/awards/page.tsx
export const metadata = {
  title: "Awards – Shysta Sehgal",
  description: "Recognitions and scholarships I’ve received.",
};

export default function AwardsPage() {
  const awards = [
    {
      title: "International Scholar Award",
      issuer: "University of Toronto",
      date: "Feb 2020",
      amount: "$100,000",
      description:
        "Offered to exceptional international students at the U of T. Recipients are selected by the admissions committee and awarded on the basis of academic achievement and overall academic competitiveness.",
    },
    {
      title: "Laidlaw Scholars Award",
      issuer: "Laidlaw Foundation",
      date: "Jun 2021",
      amount: "$10,000",
      description:
        "Received a scholarship to conduct independent university-level summer research and leadership projects over two summers.",
    },
        {
      title: "The Regents Participation Award",
      issuer: "Victoria University",
      date: "Aug 2021",
      amount: "$1,000",
      description:
        "Awarded to students who have made a significant contribution to student life including athletics, stage productions, student government, or volunteer services.",
    },
        {
      title: "Jackman Scholars-in-Residence",
      issuer: "University of Toronto",
      date: "May 2022",
      amount: "$1,000 + free housing and food",
      description:
        "Awarded funding to conduct intensive research for four weeks at the Computational and Psycholinguistics Lab.",
    },
    {
      title: "The Professor William Kingston and Dr John Kingston Scholarship",
      issuer: "Victoria College",
      date: "Sep 2024",
      amount: "$1,000",
      description: "In-course scholarship awarded based on academic merit.",
    },
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">🏅 Awards & Scholarships</h1>
      <div className="space-y-8">
        {awards.map((award, idx) => (
          <div key={idx} className="border border-zinc-700 rounded-lg p-4 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-rose-400 mb-1">{award.title}</h2>
            <p className="text-sm text-gray-400 italic mb-2">
              {award.issuer} &middot; {award.date}
            </p>
            <p className="text-sm text-gray-300 mb-2 font-medium">💰 {award.amount}</p>
            <p className="text-base">{award.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
