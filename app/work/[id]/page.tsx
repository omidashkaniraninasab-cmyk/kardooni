import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectContent from "./ProjectContent";

const projectData: Record<
  string,
  {
    title: string;
    category: string;
    year: string;
    client: string;
    description: string;
    gradient: string;
  }
> = {
  "1": {
    title: "Beyond the Veil",
    category: "Feature Film",
    year: "2025",
    client: "Placeholder Studio",
    description:
      "A full-VFX feature film exploring the boundaries between dreams and reality. Kardooni handled over 400 shots, from environment design to creature animation.",
    gradient: "from-indigo-900 via-purple-900 to-black",
  },
  "2": {
    title: "Nova",
    category: "Series · Season 1",
    year: "2025",
    client: "Placeholder Network",
    description:
      "An 8-episode science fiction series. We built entire planets, designed a new alien species, and delivered over 1,200 finished shots.",
    gradient: "from-slate-800 via-blue-900 to-black",
  },
  "3": {
    title: "Silent Orbit",
    category: "Commercial",
    year: "2024",
    client: "Placeholder Brand",
    description:
      "A 60-second spot for a global technology brand. Filmed entirely in-camera, with all space environments created in CG.",
    gradient: "from-rose-900 via-red-900 to-black",
  },
  "4": {
    title: "Ashes of Eden",
    category: "Music Video",
    year: "2024",
    client: "Placeholder Artist",
    description:
      "A visual album companion piece. Kardooni designed the full visual language — from concept art to final grade.",
    gradient: "from-amber-900 via-orange-900 to-black",
  },
};

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
  ];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectData[id] || projectData["1"];

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-32 md:pt-40">
        <ProjectContent project={project} />
      </main>
      <Footer />
    </>
  );
}