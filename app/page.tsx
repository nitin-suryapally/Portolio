import Clients from "@/components/main/Clients";
import Encryption from "@/components/main/Encription";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import RecentProjects from "@/components/main/RecentProjects";
import Skills from "@/components/main/Skills";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <RecentProjects />
        {/* <Clients /> */}
        {/* <Footer /> */}
      </div>
    </main>
  );
}
