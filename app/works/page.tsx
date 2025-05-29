"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Talktous from "../../components/talktous";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RadialGlow } from "../../components/ui/radial-glow";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";

// Tip tanımı
interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  license?: { spdx_id: string } | null;
  homepage?: string | null;
  html_url: string;
}

function getSkillIcon(language: string | null | undefined): string {
  if (!language) return "https://skillicons.dev/icons?i=github";
  const map: Record<string, string> = {
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "Python": "python",
    "Go": "go",
    "C": "c",
    "C++": "cpp",
    "C#": "csharp",
    "Java": "java",
    "Kotlin": "kotlin",
    "Swift": "swift",
    "Ruby": "ruby",
    "Rust": "rust",
    "Dart": "dart",
    "Scala": "scala",
    "Perl": "perl",
    "Shell": "bash",
    "HTML": "html",
    "CSS": "css",
    "PHP": "php",
    "Vue": "vue",
    "Vue.js": "vue",
    "Next.js": "nextjs",
    "Node.js": "nodejs",
    "Docker": "docker",
    "Git": "git",
    "Jupyter Notebook": "jupyter",
    "TeX": "latex",
    "PowerShell": "powershell",
    "Objective-C": "objectivec",
    "Makefile": "make",
    "SCSS": "sass",
    "Less": "less",
    "Svelte": "svelte",
    "Astro": "astro",
    "Elixir": "elixir",
    "Elm": "elm",
    "Haskell": "haskell",
    "Lua": "lua",
    "MATLAB": "matlab",
    "R": "r",
    "Vim script": "vim",
    "Zig": "zig",
  };
  // C# fallback
  if (language === "C#") return "https://skillicons.dev/icons?i=cs";
  // Diğer fallback
  return `https://skillicons.dev/icons?i=${map[language] || language.toLowerCase()}`;
}

export default function Works() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filtered, setFiltered] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [languages, setLanguages] = useState<string[]>([]);
  const [filterLang, setFilterLang] = useState("");
  const [search, setSearch] = useState("");

  // Skeleton kartı
  const SkeletonCard = () => (
    <div className="bg-[#181825]/60 border border-[#23233a] rounded-2xl shadow-lg p-8 flex flex-col items-center animate-pulse min-h-[340px]">
      <div className="w-20 h-20 mb-4 bg-[#23233a] rounded-xl" />
      <div className="h-7 w-2/3 bg-[#23233a] rounded mb-3" />
      <div className="h-4 w-3/4 bg-[#23233a] rounded mb-2" />
      <div className="h-4 w-1/2 bg-[#23233a] rounded mb-6" />
      <div className="flex gap-2 w-full justify-center mb-4">
        <div className="h-6 w-16 bg-[#23233a] rounded" />
        <div className="h-6 w-10 bg-[#23233a] rounded" />
        <div className="h-6 w-10 bg-[#23233a] rounded" />
      </div>
      <div className="flex gap-3 w-full justify-center mt-auto">
        <div className="h-9 w-24 bg-[#23233a] rounded" />
        <div className="h-9 w-28 bg-[#23233a] rounded" />
      </div>
    </div>
  );

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1800); // Skeleton daha uzun görünsün
    async function fetchRepos() {
      const res = await fetch("https://api.github.com/users/TMBilalTM/repos?per_page=100", {
        headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }
      });
      let data: Repo[] = await res.json();
      if (!Array.isArray(data)) data = [];
      data.sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count);
      setRepos(data);
      setFiltered(data);
      setLanguages([
        ...new Set(data.map((r: Repo) => r.language).filter((lang): lang is string => Boolean(lang)))
      ]);
    }
    fetchRepos();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let result = repos;
    if (filterLang) result = result.filter((r: Repo) => r.language === filterLang);
    if (search) result = result.filter((r: Repo) => r.name.toLowerCase().includes(search.toLowerCase()));
    setFiltered(result);
  }, [filterLang, search, repos]);

  return (
    <div>
      <Header />
      <div className="h-12 md:h-20" />
      <main className="container mx-auto px-4 py-12 min-h-[60vh]">
        <section className="flex flex-col items-center text-center mb-10">
          <span className="text-base font-semibold text-[#a78bfa] mb-2 z-1">My Works</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 mb-4 z-1">
            My Public GitHub Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 z-1">
            Here are some of my public projects from my GitHub account (TMBilalTM).
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4 z-1">
            <input
              type="text"
              placeholder="Search project..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 rounded-full border border-[#23233a] bg-[#181825] text-gray-200 focus:outline-none"
            />
            <select
              value={filterLang}
              onChange={e => setFilterLang(e.target.value)}
              className="px-4 py-2 rounded-full border border-[#23233a] bg-[#181825] text-gray-200 focus:outline-none"
            >
              <option value="">All Languages</option>
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            filtered.map((repo: Repo) => (
              <div key={repo.id} className="bg-[#181825]/60 border z-1 border-[#23233a] rounded-2xl shadow-lg p-8 flex flex-col items-center group transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl min-h-[340px]">
                <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-xl bg-[#23233a]">
                  <Image
                    src={getSkillIcon(repo.language)}
                    alt={repo.language || "Language"}
                    width={64}
                    height={64}
                    className="object-contain rounded-xl"
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 mb-2 text-center w-full truncate">
                  {repo.name}
                </h2>
                <p className="text-gray-400 mb-3 line-clamp-3 min-h-[48px] text-center w-full text-sm">
                  {repo.description || "No description."}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center w-full">
                  {repo.language && (
                    <span className="px-2 py-1 rounded bg-[#23233a] text-xs text-gray-300">{repo.language}</span>
                  )}
                  <span className="px-2 py-1 rounded bg-[#23233a] text-xs text-yellow-400">★ {repo.stargazers_count}</span>
                  <span className="px-2 py-1 rounded bg-[#23233a] text-xs text-gray-400">Forks: {repo.forks_count}</span>
                  {repo.license && repo.license.spdx_id !== "NOASSERTION" && (
                    <span className="px-2 py-1 rounded bg-[#23233a] text-xs text-green-400">{repo.license.spdx_id}</span>
                  )}
                  {repo.homepage && (
                    <Link href={repo.homepage} target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded bg-[#a78bfa] text-xs text-white font-medium hover:underline">Live Demo</Link>
                  )}
                </div>
                <div className="flex gap-3 mt-auto w-full justify-center">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#23233a] hover:bg-[#a78bfa]/20 text-[#a78bfa] font-semibold transition-colors border border-[#a78bfa] shadow-sm group"
                  >
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#a78bfa] group-hover:text-[#7c3aed] transition-colors"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
                    GitHub
                  </a>
                  <a
                    href={`https://github1s.com/TMBilalTM/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#23233a] hover:bg-[#7c3aed]/20 text-[#7c3aed] font-semibold transition-colors border border-[#7c3aed] shadow-sm group"
                  >
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#7c3aed] group-hover:text-[#a78bfa] transition-colors"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17l4-4-4-4m8 8V7"/></svg>
                    Kodu İncele
                  </a>
                </div>
              </div>
            ))
          )}
        </section>
        <div className="h-16" />
        <div className="flex flex-col items-center justify-center text-center gap-3 mb-16">
          <span className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-br from-violet-500 to-indigo-600 font-semibold">
            Works
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 leading-tight">
            Our Projects
          </h1>
          <p className="text-sm sm:text-base font-medium text-gray-500 max-w-md sm:max-w-lg">
            Explore our open source and client projects.
          </p>
        </div>
        {/* RadialGlow örnek kart */}
        <RadialGlow className="max-w-md mx-auto p-8 rounded-2xl border border-[#23233a] bg-[#181825]/60 mb-8">
          <h2 className="text-lg font-bold mb-2">Radial Glow Hover Efekti</h2>
          <p className="text-gray-400">Bu kartın üstüne mouse ile gelince ışık efekti oluşur.</p>
        </RadialGlow>
        <Talktous />
        <div className="h-40" />
      </main>
      <Footer />
    </div>
  );
}
