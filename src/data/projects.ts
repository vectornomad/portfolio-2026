export type ProjectStatus = "Active" | "In development" | "Prototype" | "Completed";
export type Project = {
  id: string; title: string; category: string; description: string;
  stack: string[]; status: ProjectStatus; details: string[];
  href?: string; github?: string;
};
export const projects: Project[] = [
  { id:"spite", title:"SPITE", category:"Local-first Compute",
    description:"A Rust sandbox runtime for creating, managing, and executing isolated development environments.",
    stack:["Rust","CLI","Sandboxing","Runtime"],status:"Active",
    details:["Process-runtime lifecycle: create, ps, exec, start, stop, remove","Local sandbox state management","Docker runtime integration in progress"] },
  { id:"rustcraft", title:"RustCraft", category:"Rendering / Game Infrastructure",
    description:"Experimental native rendering technology and a Minecraft launcher tuned for low-overhead local workflows.",
    stack:["Rust","Rendering","macOS","Forge"],status:"Prototype",
    details:["Chunk rendering and performance profiling experiments","Forge 1.20.1 launcher and Java 17 setup","External-drive instances and modpack import"] },
  { id:"neurodeck", title:"NeuroDeck", category:"Interactive Visualization",
    description:"A macOS brain-region visualization that turns foreground application activity into illustrative activity profiles.",
    stack:["Swift","Three.js","WKWebView","macOS"],status:"Prototype",
    details:["Interactive labeled 3D brain regions","Application context mapped to illustrative activity profiles","Real brain-sensor measurement is planned, not yet integrated"] },
  { id:"gridiron-vision",title:"Gridiron Vision",category:"Applied AI / Video",
    description:"A football video-intelligence pipeline for scene segmentation, clip extraction, and embedding experiments.",
    stack:["Python","OpenCV","VideoMAE","Embeddings"],status:"In development",
    details:["Scene detection on game footage","Clip extraction for downstream processing","Semantic video embedding experiments"] },
  { id:"campusatlas",title:"CampusAtlas",category:"Geospatial Interfaces",
    description:"An exploratory map-based experience for navigating and understanding U.S. campus incident data.",
    stack:["Cesium","Geospatial","Data UI"],status:"In development",
    details:["Interactive campus incident map","Geographic exploration and visual context","Ongoing data presentation work"] },
  { id:"recuris",title:"Recuris",category:"AI Agent Systems",
    description:"An autonomous software-team experiment coordinating specialized agents, tasks, and developer workflows.",
    stack:["Python","FastAPI","Agents","Ollama"],status:"In development",
    github:"https://github.com/vectornomad/Recuris",
    details:["Specialized agent coordination","Workflow tasks and shared context","Developer-focused CLI"] },
];
