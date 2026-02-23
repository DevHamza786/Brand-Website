'use client';

import { useState } from 'react';

type TechItem = { name: string; icon: React.ReactNode };

const techByCategory: Record<string, TechItem[]> = {
  Backend: [
    { name: 'Node.js', icon: <NodeIcon /> },
    { name: 'Express', icon: <ExpressIcon /> },
    { name: 'Django', icon: <DjangoIcon /> },
    { name: 'Go', icon: <GoIcon /> },
    { name: 'Laravel', icon: <LaravelIcon /> },
    { name: 'Symfony', icon: <SymfonyIcon /> },
    { name: 'ASP.NET Core', icon: <AspNetIcon /> },
    { name: 'NestJS', icon: <NestJsIcon /> },
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'Java', icon: <JavaIcon /> },
  ],
  Frontend: [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Next.js', icon: <NextJsIcon /> },
    { name: 'Vue.js', icon: <VueIcon /> },
    { name: 'TypeScript', icon: <TypeScriptIcon /> },
    { name: 'JavaScript', icon: <JavaScriptIcon /> },
    { name: 'Angular', icon: <AngularIcon /> },
    { name: 'HTML5', icon: <HtmlIcon /> },
    { name: 'CSS3', icon: <CssIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    { name: 'Redux', icon: <ReduxIcon /> },
  ],
  Mobile: [
    { name: 'Flutter', icon: <FlutterIcon /> },
    { name: 'React Native', icon: <ReactNativeIcon /> },
    { name: 'Swift', icon: <SwiftIcon /> },
    { name: 'Kotlin', icon: <KotlinIcon /> },
    { name: 'Ionic', icon: <IonicIcon /> },
    { name: 'Xamarin', icon: <XamarinIcon /> },
  ],
  Database: [
    { name: 'PostgreSQL', icon: <PostgresIcon /> },
    { name: 'MongoDB', icon: <MongoIcon /> },
    { name: 'MySQL', icon: <MySqlIcon /> },
    { name: 'Redis', icon: <RedisIcon /> },
    { name: 'Firebase', icon: <FirebaseIcon /> },
    { name: 'Supabase', icon: <SupabaseIcon /> },
  ],
  DevOps: [
    { name: 'AWS', icon: <AwsIcon /> },
    { name: 'Docker', icon: <DockerIcon /> },
    { name: 'Kubernetes', icon: <K8sIcon /> },
    { name: 'GitHub Actions', icon: <GitHubIcon /> },
    { name: 'Vercel', icon: <VercelIcon /> },
    { name: 'CI/CD', icon: <CICDIcon /> },
  ],
  'UI/UX': [
    { name: 'Figma', icon: <FigmaIcon /> },
    { name: 'Adobe XD', icon: <XdIcon /> },
    { name: 'Sketch', icon: <SketchIcon /> },
    { name: 'Prototyping', icon: <PrototypeIcon /> },
    { name: 'Design Systems', icon: <DesignSystemIcon /> },
  ],
  CMS: [
    { name: 'Contentful', icon: <ContentfulIcon /> },
    { name: 'Sanity', icon: <SanityIcon /> },
    { name: 'Strapi', icon: <StrapiIcon /> },
    { name: 'WordPress', icon: <WordPressIcon /> },
  ],
};

const tabs = Object.keys(techByCategory);

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#339933]">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.038.151-.023.218.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.135-.238V6.921a.283.283 0 00-.138-.242l-8.791-5.072a.278.278 0 00-.271 0L3.075 6.68a.284.284 0 00-.139.241v10.15a.27.27 0 00.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 01-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082a1.93 1.93 0 011.846 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.795 5.078a1.93 1.93 0 01-.924.247z" />
      <path d="M20.094 12.258h-1.098c-.089 0-.174.044-.224.121l-4.563 6.636-2.017-2.951c-.05-.077-.135-.12-.224-.12h-1.097c-.15 0-.224.18-.12.274l2.819 4.076c.05.073.135.12.224.12.089 0 .174-.047.224-.121l5.186-7.533a.272.272 0 00-.12-.376z" />
    </svg>
  );
}
function ExpressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-slate-700">
      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771 2.86-3.838a1.466 1.466 0 011.9-.666l2.965 1.355a.114.114 0 01.065.164l-1.047 1.4a.114.114 0 01-.065.063l-2.165-.99-.744.992 2.165.99a.114.114 0 01.065.164l-1.047 1.4a.114.114 0 01-.065.063l-2.165-.99-3.675 5.015a1.699 1.699 0 01-2.065.676L5.962 18.43a1.576 1.576 0 01-1.09-1.49V6.074a1.408 1.408 0 01.79-1.265L11.602.196a1.653 1.653 0 011.789 0l5.822 4.613a1.41 1.41 0 01.79 1.265v2.728a.282.282 0 01-.279.282h-1.116a.282.282 0 01-.279-.282V6.074a.297.297 0 00-.148-.258l-5.822-4.613a.297.297 0 00-.322 0L6.364 5.816a.297.297 0 00-.148.258v10.862a.297.297 0 00.148.258l5.822 4.613a.297.297 0 00.322 0l5.313-4.21a.282.282 0 01.279-.282h1.116a.282.282 0 01.279.282v1.4a1.408 1.408 0 01-.79 1.265l-2.791 1.355a1.699 1.699 0 01-2.065-.676z" />
    </svg>
  );
}
function DjangoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#092E20]">
      <path d="M14.25 0h-4.5v24h4.5V0zM24 11.974V24h-4.5V12.599a2.526 2.526 0 00-2.5-2.5 2.526 2.526 0 00-2.5 2.5V24h-4.5V8.474a2.526 2.526 0 012.5-2.5 2.526 2.526 0 012.5 2.5v.525h4.5V8.474a2.526 2.526 0 012.5-2.5 2.526 2.526 0 012.5 2.5v3.5zM0 24V0h4.5v24H0z" />
    </svg>
  );
}
function GoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#00ADD8]">
      <path d="M1.811 10.231c-.044-.143-.044-.286-.044-.429 0-.143 0-.286.044-.429l2.264-1.554a.682.682 0 01.932.09l1.87 2.264a.619.619 0 01.09.932l-2.004 2.718a2.217 2.217 0 01-.429.09l-2.905.429a.257.257 0 01-.286-.18l-.429-2.719zm2.718-2.433l-1.554 1.076 2.433.357.357-2.433-1.236-.857zm.804.804l-.179 1.236 2.004.286.286-2.004-2.111-.518zm15.107 2.004c.044.143.044.286.044.429 0 .143 0 .286-.044.429l-2.264 1.554a.682.682 0 01-.932-.09l-1.87-2.264a.619.619 0 01-.09-.932l2.004-2.718c.09-.143.214-.214.429-.29l2.905-.429c.143 0 .214.09.286.18l.429 2.719zm-2.718 2.433l1.554-1.076-2.433-.357-.357 2.433 1.236.857zm-.804-.804l.179-1.236-2.004-.286-.286 2.004 2.111.518z" />
      <path d="M12 6.857c-2.861 0-5.143 2.282-5.143 5.143S9.139 17.143 12 17.143 17.143 14.861 17.143 12 14.861 6.857 12 6.857zm0 8.572a3.429 3.429 0 110-6.858 3.429 3.429 0 010 6.858z" />
    </svg>
  );
}
function LaravelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#FF2D20]">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}
function SymfonyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#000000]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z" />
    </svg>
  );
}
function AspNetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#512BD4]">
      <path d="M12 2L2 6v12l10 4 10-4V6L12 2zm0 2.5l7 2.8v8.4l-7 2.8-7-2.8V7.3l7-2.8z" />
    </svg>
  );
}
function NestJsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#E0234E]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7 2.8v8.4l-7 2.8-7-2.8V7.3l7-2.8z" />
    </svg>
  );
}
function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#3776AB]">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.31.31-.35.25-.38.2-.4.16-.42.13-.44.1-.45.07-.44.05-.43.02-.41-.01-.39-.03-.36-.05-.34-.07-.31-.09-.28-.11-.25-.12-.22-.14-.19-.15-.16-.16-.14-.17-.11-.18-.09-.19-.07-.19-.05-.2-.03-.19-.02-.2-.01-.19.01h-.18l.01-3.26.02-.37.05-.34.09-.31.12-.28.15-.25.18-.22.21-.19.24-.17.27-.14.3-.12.33-.1.36-.08.39-.06.42-.04.45-.02.48.01.5.03.53.05.55.08.58.1.6.13.63.15.65.18.68.2.7.23.73.25.75.28.78.3.8.33.83.35.85.38.88.4.9.43.93.45.95.48.98.5 1 .53 1.03.55 1.05.58 1.08.6 1.1.63 1.13.65 1.15.68 1.18.7 1.2.73 1.23.75 1.25.78 1.28.8 1.3.83 1.33.85 1.35.88 1.38.9 1.4.93 1.43.95 1.45.98 1.48 1 1.5v.18h-8.41l-.01-2.46-.02-.35-.05-.32-.09-.29-.12-.26-.15-.24-.18-.21-.21-.19-.24-.16-.27-.14-.3-.12-.33-.1-.36-.07-.39-.05-.42-.03-.45-.01-.47.01-.5.03-.52.05-.55.08-.57.1-.6.13-.62.15-.65.18-.67.2-.7.23-.72.25-.75.28-.77.3-.8.33-.82.35-.85.38-.87.4-.9.43-.92.45-.95.48-.97.5-1 .53-1.02.55-1.05.58-1.07.6-1.1.63-1.12.65-1.15.68-1.17.7-1.2.73-1.22.75-1.25.78-1.27.8-1.3.83-1.32.85-1.35.88-1.37.9-1.4.93-1.42.95-1.45.98-1.47 1-1.5l1.03-1.52 1.05-1.55 1.08-1.57 1.1-1.6 1.13-1.62 1.15-1.65 1.18-1.67 1.2-1.7 1.23-1.72 1.25-1.75 1.28-1.77 1.3-1.8 1.33-1.82 1.35-1.85 1.38-1.87 1.4-1.9 1.43-1.92 1.45-1.95 1.48-1.97 1.5-2H12V.18z" />
    </svg>
  );
}
function JavaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#ED8B00]">
      <path d="M8.851 18.56s-.917.534.653.714c2.063.185 3.263.157 5.909-.213 0 0 .552.346 1.321.646-4.699 2.013-10.633-.107-7.883-1.147M8.276 15.933s-1.028.761.542.924c2.372.244 5.235.227 8.178-.308 0 0 .384.389.987.602-5.679 1.661-12.007.17-9.707-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.804-11.288 1.262-14.669.033-1.129-.341.749-.89 1.254-.998.233-.049.378-.043.378-.043-.997-.695-6.058 1.091-2.643 1.258 6.359.315 14.215-.418 16.533-1.241M9.292 13.21s-4.362 1.036-1.544 1.405c1.189.156 3.561.123 6.048-.062 1.886-.141 3.618-.352 4.807-.586 0 0 .229.273.497.547-2.531 1.069-9.716 1.378-12.081.801-2.719-.662.323-1.305.323-1.305M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.644 0-.001.07-.062.09-.2M14.401 0s2.494 2.494-2.365 6.33c-3.861 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 6.197-3.665s-2.525.64-5.303 2.33c-2.604 1.577-1.876 2.752.752 4.031-2.243-1.903-4.328-3.893-2.279-6.164C11.495 2.071 14.401 0 14.401 0M9.734 23.924c4.322.277 10.959-.154 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.697-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
    </svg>
  );
}
function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#61DAFB]">
      <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.236-2.235 2.236 2.236 0 012.235 2.235zM12 20.565c-2.526 0-4.75-1.24-6.105-3.146l-1.009 1.644c-.25.407-.664.646-1.126.646H1.02c-.46 0-.875-.24-1.124-.646L.492 19.41c-.46-.75-.46-1.657 0-2.406.152-.25.354-.453.555-.605-.152-.202-.354-.405-.505-.606-.46-.75-.46-1.658 0-2.407l.404-.654c.25-.406.664-.646 1.125-.646h2.74c.46 0 .875.24 1.124.646l1.006 1.644C7.25 4.676 9.474 3.435 12 3.435c2.527 0 4.75 1.24 6.105 3.146l1.009-1.644c.25-.406.664-.646 1.126-.646h2.739c.461 0 .876.24 1.125.646l.403.654c.46.749.46 1.657 0 2.406-.152.25-.354.454-.555.606.152.201.354.404.505.606.46.749.46 1.657 0 2.406l-.403.654c-.25.406-.665.646-1.126.646h-2.74c-.461 0-.875-.24-1.124-.646l-1.006-1.644C16.75 19.325 14.526 20.565 12 20.565z" />
    </svg>
  );
}
function NextJsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-slate-800">
      <path d="M11.5725 0c-.176 0-.311.082-.402.24L.255 15.716c-.091.157-.091.353 0 .51l.592 1.03c.09.157.226.24.401.24.176 0 .312-.083.403-.24L12.38 2.356 22.75 17.256c.09.157.226.24.402.24.175 0 .31-.083.401-.24l.592-1.03c.09-.157.09-.353 0-.51L12.776.24C12.685.082 12.55 0 12.374 0h-.801zM12.374 6.24l6.387 11.034H5.987L12.374 6.24zM.255 22.034L12.374 8.356l4.52 7.81-6.387 11.034H.255zm12.119-14.79l6.388 11.034-4.52 7.81 10.119-13.678L24 22.034h-5.867L12.374 7.244z" />
    </svg>
  );
}
function VueIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#4FC08D]">
      <path d="M24 1.61L12 20.61 0 1.61h4.5L12 13.11 19.5 1.61H24z" />
    </svg>
  );
}
function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#3178C6]">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.468.963.736.268.269.477.571.627.907.15.335.225.716.225 1.142 0 .657-.125 1.21-.375 1.656a3.033 3.033 0 01-1.066 1.085 4.38 4.38 0 01-1.558.596c-.596.135-1.243.202-1.942.202a9.916 9.916 0 01-1.89-.174 5.544 5.544 0 01-1.582-.596v-2.63a6.28 6.28 0 003.127 1.596 5.86 5.86 0 001.574.214c.335 0 .644-.031.926-.094.283-.062.52-.156.714-.281.195-.125.34-.276.435-.453a1.016 1.016 0 00.143-.54c0-.258-.075-.485-.225-.681a2.274 2.274 0 00-.615-.494 6.92 6.92 0 00-.926-.413 26.4 26.4 0 00-1.17-.435c-.423-.156-.79-.34-1.101-.553a2.596 2.596 0 01-.758-.792 2.104 2.104 0 01-.269-1.105c0-.529.125-.976.375-1.341.25-.365.59-.664 1.02-.896.43-.232.924-.403 1.482-.514a7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  );
}
function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#F7DF1E]">
      <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.08-.374-.04-.473.116-.484.687-.63 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.313-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775-.702.038-1.285.309-1.675.731-.42.465-.69 1.016-.832 1.71-.126.686.076 1.354.518 1.998.348.452.795.777 1.312.965.524.19 1.077.313 1.604.377.494.059 1.006.008 1.46.163.459.158.638.474.64.834.003.422-.334.721-.844.899-.507.174-1.287.222-1.951.222-.761 0-1.539-.105-2.223-.312-.528-.16-.987-.42-1.358-.779-.371-.359-.544-.795-.544-1.273 0-.676.328-1.205.881-1.514.552-.309 1.253-.489 2.102-.539.848-.051 1.673.116 2.473.514.205.102.364.199.477.29.113.09.196.18.25.258l-.001.001z" />
    </svg>
  );
}
function AngularIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#DD0031]">
      <path d="M12 2L2 6l2 12 8 4 8-4 2-12L12 2zm0 2.18l7.36 2.64.82 4.64L12 19.18 3.82 11.46l.82-4.64L12 4.18zM12 7.5L9.09 16.5h1.82l.91-2.5h3.36l.91 2.5h1.82L12 7.5zm0 2.18l1.5 4.5h-3l1.5-4.5z" />
    </svg>
  );
}
function HtmlIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#E34F26]">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.79-2.955-.81-.188-2.11H6.248l.33 4.171 5.407 1.458 5.478-1.458.744-8.157H2.778l-.25-2.718z" />
    </svg>
  );
}
function CssIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#1572B6]">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.184-2.11H6.782l-.24 2.716h3.24l-.266 2.511-2.92.805-2.955-.81-.122-1.382-.19-2.11L2.98 5.822l-.248-2.41L20.59 3.41z" />
    </svg>
  );
}
function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#06B6D4]">
      <path d="M12 6.036c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5 1.263.303 1.727 1.318 2.5 2.5.775 1.182 1.667 2.545 3.5 2.5 2.333-.045 3.5-1.5 3.5-1.5s-.5 2.5-2.5 3.5c-2 1-5 1-7-1 0 0-1.5-2.5-1.5-5.5 0-3 1.5-5.5 1.5-5.5 2.667 0 4 1.333 5 4z" />
    </svg>
  );
}
function ReduxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#764ABC]">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  );
}
function FlutterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#02569B]">
      <path d="M14.314 0L2.3 12 6 15.7 21.684 0H14.314zM14.4 14.526L8.526 20.4H2.652L6 17.053l8.4-2.527zm-6.873 6.873L12 15.927l4.473 5.472H7.527z" />
    </svg>
  );
}
function ReactNativeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#61DAFB]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7 2.8v8.4l-7 2.8-7-2.8V7.3l7-2.8z" />
    </svg>
  );
}
function SwiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#FA7343]">
      <path d="M11.508 2.044c-.35-.024-.652.218-.68.567-.028.35.218.652.567.68 2.772.196 5.196 1.398 7.036 3.444.35.398.957.398 1.356 0 .398-.35.398-.957 0-1.356-2.182-2.49-5.018-3.87-8.279-3.335zM8.303 4.26c-.35-.028-.652.218-.68.567-.028.35.218.652.567.68 1.744.124 3.335.698 4.64 1.627.398.35.957.314 1.306-.084.35-.398.314-.957-.084-1.306-1.52-1.33-3.398-2.024-5.349-2.11zm-3.444 2.49c-.35-.028-.652.218-.68.567-.028.35.218.652.567.68.907.065 1.744.314 2.49.698.398.218.87.084 1.088-.314.218-.398.084-.87-.314-1.088-1.044-.523-2.182-.785-3.444-.785-.122 0-.218 0-.35.028z" />
    </svg>
  );
}
function KotlinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#7F52FF]">
      <path d="M2 2h2v20H2V2zm4 0h2v20H6V2zm4 0h2v20h-2V2zm4 0h2v20h-2V2zm4 0h2v20h-2V2zm4 0h2v20h-2V2z" />
    </svg>
  );
}
function IonicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#3880FF]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7 2.8v8.4l-7 2.8-7-2.8V7.3l7-2.8z" />
    </svg>
  );
}
function XamarinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#3498DB]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7 2.8v8.4l-7 2.8-7-2.8V7.3l7-2.8z" />
    </svg>
  );
}
function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#4169E1]">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}
function MongoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#47A248]">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}
function MySqlIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#4479A1]">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}
function RedisIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#DC382D]">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}
function FirebaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#FFCA28]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7 2.8v8.4l-7 2.8-7-2.8V7.3l7-2.8z" />
    </svg>
  );
}
function SupabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#3ECF8E]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7 2.8v8.4l-7 2.8-7-2.8V7.3l7-2.8z" />
    </svg>
  );
}
function AwsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#FF9900]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7 2.8v8.4l-7 2.8-7-2.8V7.3l7-2.8z" />
    </svg>
  );
}
function DockerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#2496ED]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7 2.8v8.4l-7 2.8-7-2.8V7.3l7-2.8z" />
    </svg>
  );
}
function K8sIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#326CE5]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7 2.8v8.4l-7 2.8-7-2.8V7.3l7-2.8z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-slate-700">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
function VercelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-slate-800">
      <path d="M24 22.525H0L12 1.475l12 21.05z" />
    </svg>
  );
}
function CICDIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-slate-600">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
function FigmaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#F24E1E]">
      <path d="M8 24a4 4 0 004-4V8a4 4 0 00-8 0v12a4 4 0 004 4zm0-16a2 2 0 012 2v4H6V10a2 2 0 012-2zm8-4a4 4 0 00-8 0v4h8V8zm-6 0V8a2 2 0 014 0v4h-4zm6 6a4 4 0 01-4 4 4 4 0 01-4-4v-4h8v4zm-4 2a2 2 0 002 2 2 2 0 002-2v-4h-4v4z" />
    </svg>
  );
}
function XdIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#FF61F6]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
    </svg>
  );
}
function SketchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#F7B500]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
    </svg>
  );
}
function PrototypeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-slate-600">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h6M9 13h6M9 17h4" />
    </svg>
  );
}
function DesignSystemIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-slate-600">
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
    </svg>
  );
}
function ContentfulIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#2478CC]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
    </svg>
  );
}
function SanityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#F03E2F]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
    </svg>
  );
}
function StrapiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#2F2E8B]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
    </svg>
  );
}
function WordPressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#21759B]">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}

export default function TechnologyStackSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-24 md:py-32 bg-white border-t border-slate-200">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <p className="text-center text-cyan font-body font-semibold text-sm uppercase tracking-wider mb-3">
          Technology Stack
        </p>
        <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy text-center mb-14">
          Technologies We Work With
        </h2>

        <div className="flex flex-wrap justify-center gap-2 md:gap-1 mb-12 border-b border-slate-200 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 rounded-lg font-body font-medium text-sm transition-colors ${
                activeTab === tab
                  ? 'text-cyan border-b-2 border-cyan bg-cyan/5'
                  : 'text-slate-500 hover:text-navy hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6 md:gap-8">
          {techByCategory[activeTab].map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan/20 hover:shadow-card transition-all duration-200"
            >
              <div className="flex items-center justify-center w-14 h-14 mb-3 text-slate-600 [&>svg]:shrink-0">
                {icon}
              </div>
              <span className="text-slate-700 font-body font-medium text-center text-sm leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
