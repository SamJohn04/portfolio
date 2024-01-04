import Navigation from "./components/Navigation";
import SelfIntro from "./components/SelfIntro";
import SkillBoxes from "./components/SkillBoxes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-2 pb-32 md:p-16 lg:p-24">
      <Navigation />
      <SelfIntro />
      <SkillBoxes />
    </main>
  )
}
