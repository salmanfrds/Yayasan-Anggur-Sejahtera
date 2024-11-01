import { promises as fsPromises } from 'fs'
import { join } from 'path'

export default async function loadArticles() {
    try {
        // Use path.join to create a reliable file path
        const articlesPath = join(process.cwd(), 'resources', 'js', 'articles.json')
        
        // Use promise-based readFile for cleaner async handling
        const data = await fsPromises.readFile(articlesPath, 'utf8')
        
        // Parse JSON and return articles
        return JSON.parse(data)
    } catch (error) {
        // Improved error handling
        console.error('Error loading articles:', error)
        
        // Return an empty array or throw an error based on your preference
        return []
        // Alternative: throw error if you want to handle it at call site
        // throw new Error('Failed to load articles')
    }
}

export async function insertArticle(article:any) {
    const articlesPath = join(process.cwd(), 'resources', 'js', 'articles.json')
        
    // Use promise-based readFile for cleaner async handling
    const data = await fsPromises.readFile(articlesPath, 'utf8')

    const jsObject:Array<string> = JSON.parse(data)

    jsObject.push(article);

    await fsPromises.writeFile(articlesPath,JSON.stringify(jsObject))

}

