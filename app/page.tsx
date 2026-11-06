import Image from "next/image";

const courseTopics = [
  {
    title: "React",
    description: "Learning the basics of building web interfaces with React.",
  },
  {
    title: "Vite",
    description: "Using Vite to set up and run React projects during development.",
  },
  {
    title: "Next.js",
    description: "Exploring Next.js and how it is used to build web applications.",
  },
  {
    title: "Front-End Practice",
    description: "Practicing web development through classwork and small projects.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto mt-4 max-w-5xl px-4">
      <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm md:grid-cols-[minmax(230px,0.8fr)_minmax(0,1.2fr)] md:p-4">
        <article className="overflow-hidden rounded-lg border border-gray-200">
          <div className="relative aspect-[4/3]">
            <Image
              src="/animation/5340.jpg"
              alt="Student portrait"
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover"
            />
          </div>

          <div className="space-y-1 p-3 text-sm leading-relaxed text-gray-700">
            <p>
              <strong className="text-gray-900">Chaiyanun Thammasa</strong>
            </p>
            <p>Second-year student, Semester 1</p>
            <p>Sripatum University (SPU)</p>
            <p>Currently learning front-end web development</p>
          </div>
        </article>

        <article className="flex flex-col px-1 py-1 text-sm leading-relaxed text-gray-700 md:px-2">
          <h1 className="mb-2 font-semibold text-gray-900">
            What I’m Learning This Semester:
          </h1>

          <ul className="list-disc space-y-1.5 pl-5">
            {courseTopics.map((topic) => (
              <li key={topic.title}>
                <strong className="text-gray-900">{topic.title}:</strong>{" "}
                {topic.description}
              </li>
            ))}
          </ul>

          <div className="relative mt-4 h-32 w-full overflow-hidden rounded-lg">
            <Image
              src="/animation/1234.jpg"
              alt="Course illustration"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </article>
      </section>
    </main>
  );
}