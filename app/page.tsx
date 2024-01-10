import About from "./components/About";
import SelfIntro from "./components/SelfIntro";
import SkillBoxes from "./components/SkillBoxes";
import Wrapper from "./components/Wrapper";

export default function Home() {
  const home = <SelfIntro />
  const about = <About />
  const skillBoxes = <SkillBoxes />
  return (
    <main className="flex min-h-screen flex-col items-center p-2 md:p-16">
      <Wrapper home={home} about={about} skillBoxes={skillBoxes}/>
    </main>
  )
}
