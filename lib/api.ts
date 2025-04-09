import axios from "axios"

const API_BASE_URL = "http://localhost:5000"

// Codeforces API
export const fetchCodeforcesUser = async (username: string) => {
  try {
    const response = await axios.get(`https://codeforces.com/api/user.info?handles=${username}`)
    return response.data.result[0]
  } catch (error) {
    console.error("Error fetching Codeforces user:", error)
    throw error
  }
}

export const fetchCodeforcesSubmissions = async (username: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/codeforces/${username}`)
    return response.data
  } catch (error) {
    console.error("Error fetching Codeforces submissions:", error)
    throw error
  }
}

// CodeChef API
export const fetchCodeChefUser = async (username: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/codechef/${username}`)
    return response.data
  } catch (error) {
    console.error("Error fetching CodeChef user:", error)
    throw error
  }
}

// GitHub API
export const fetchGitHubUser = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    return response.data
  } catch (error) {
    console.error("Error fetching GitHub user:", error)
    throw error
  }
}

export const fetchGitHubCommits = async (username: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/github/${username}`)
    return response.data
  } catch (error) {
    console.error("Error fetching GitHub commits:", error)
    throw error
  }
}

// Fetch GitHub repositories
export const fetchGitHubRepos = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`)
    return response.data
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    throw error
  }
}

// Fetch GitHub languages for a user
export const fetchGitHubLanguages = async (username: string) => {
  try {
    const repos = await fetchGitHubRepos(username)
    const languagePromises = repos.map(async (repo: any) => {
      const response = await axios.get(repo.languages_url)
      return response.data
    })

    const languagesData = await Promise.all(languagePromises)

    // Combine language data from all repos
    const combinedLanguages: Record<string, number> = {}
    languagesData.forEach((repoLanguages) => {
      Object.entries(repoLanguages).forEach(([language, bytes]: [string, any]) => {
        if (combinedLanguages[language]) {
          combinedLanguages[language] += bytes
        } else {
          combinedLanguages[language] = bytes
        }
      })
    })

    // Convert to percentages
    const totalBytes = Object.values(combinedLanguages).reduce((sum: number, bytes: number) => sum + bytes, 0)
    const languagePercentages: Record<string, number> = {}

    Object.entries(combinedLanguages).forEach(([language, bytes]: [string, number]) => {
      languagePercentages[language] = Math.round((bytes / totalBytes) * 100)
    })

    return languagePercentages
  } catch (error) {
    console.error("Error fetching GitHub languages:", error)
    throw error
  }
}

// Meme Generator API
export const generateMeme = async (template: string, topText: string, bottomText: string) => {
  try {
    // Using imgflip API for meme generation
    const response = await axios.post("https://api.imgflip.com/caption_image", null, {
      params: {
        template_id: template,
        username: process.env.NEXT_PUBLIC_IMGFLIP_USERNAME || "demo_user",
        password: process.env.NEXT_PUBLIC_IMGFLIP_PASSWORD || "demo_password",
        text0: topText,
        text1: bottomText,
      },
    })
    return response.data
  } catch (error) {
    console.error("Error generating meme:", error)
    throw error
  }
}

// Books API (Google Books)
export const searchBooks = async (query: string) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:programming&maxResults=8`,
    )
    return response.data.items
  } catch (error) {
    console.error("Error searching books:", error)
    throw error
  }
}
