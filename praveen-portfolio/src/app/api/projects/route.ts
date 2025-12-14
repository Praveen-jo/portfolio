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
}

export async function GET() {
  try {
    const githubToken = process.env.GITHUB_TOKEN;
    const githubUsername = process.env.GITHUB_USERNAME;

    if (!githubToken || !githubUsername) {
      return NextResponse.json({ error: 'GitHub token or username is not set' }, { status: 500 });
    }

    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`,
      {
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github+json',
          'User-Agent': 'Praveen-Portfolio',
        },
        next: {
          revalidate: 3600,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch GitHub repos: ${response.statusText}`);
    }

    const repos: GitHubRepo[] = await response.json();
    // only filter private repos, keep forks
    const publicRepos = repos
      .filter((repo) => !repo.private)
      .sort((a, b) => {
        const aScore = a.stargazers_count + (new Date(a.updated_at).getTime() / (1000 * 60 * 60 * 24));
        const bScore = b.stargazers_count + (new Date(b.updated_at).getTime() / (1000 * 60 * 60 * 24));
        return bScore - aScore;
      });

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