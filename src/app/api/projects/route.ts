import { NextResponse } from "next/server";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  private: boolean;
  owner: { login: string };
  has_pages?: boolean;
}

async function getLiveUrl(
  repo: GitHubRepo,
  headers: HeadersInit
): Promise<string | null> {
  // 1. Explicit website (best case)
  if (repo.homepage) return repo.homepage;

  // 2. GitHub Pages API (authoritative)
  if (repo.has_pages) {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${repo.owner.login}/${repo.name}/pages`,
        { headers }
      );

      if (res.ok) {
        const data = (await res.json()) as { html_url?: string; url?: string };
        if (data.html_url) return data.html_url;
      }
    } catch {
      // ignore and fallback
    }

    // 3. Deterministic fallback
    return `https://${repo.owner.login}.github.io/${repo.name}/`;
  }

  // 4. No live site
  return null;
}

export async function GET() {
  try {
    const githubToken = process.env.GITHUB_TOKEN;
    const githubUsername = process.env.GITHUB_USERNAME;

    if (!githubToken || !githubUsername) {
      return NextResponse.json({ error: 'GitHub token or username is not set' }, { status: 500 });
    }

    const headers: HeadersInit = {
      Authorization: `token ${githubToken}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "Praveen-Portfolio",
    };

    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch GitHub repos: ${response.statusText}`);
    }

    const repos: GitHubRepo[] = await response.json();
    // only filter private repos, keep forks
    const filteredAndSorted = repos
      .filter((repo) => !repo.private)
      .sort((a, b) => {
        const aScore = a.stargazers_count + new Date(a.updated_at).getTime() / (1000 * 60 * 60 * 24);
        const bScore = b.stargazers_count + new Date(b.updated_at).getTime() / (1000 * 60 * 60 * 24);
        return bScore - aScore;
      });

    const publicRepos = await Promise.all(
      filteredAndSorted.map(async (repo) => ({
        ...repo,
        homepage: await getLiveUrl(repo, headers),
      }))
    );

    return NextResponse.json(publicRepos, {
      headers: {
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=7200, public',
      }
    });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json({ error: 'Failed to fetch GitHub repos' }, { status: 500 });
  }
}