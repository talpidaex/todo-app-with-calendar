import { relative } from "path";
import Timeline from "./modules/timeline/timeline";

export default function Home() {

  return (
    <>
      <Timeline />
      <div id="modal"></div>
    </>
  )
}
