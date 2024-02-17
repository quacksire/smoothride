/**
 * 
- Posts:
  - [post]
    - id: uuid
    - author: string
    - title: string
    - description: string
    - type: string (road/transit/other)
    - image: string?
 */

// Create a type named Post that represents the structure of a post

export type Post = {
    id: string;
    author: string;
    type: string;
    tile: string;
    description: string;
    image?: string;
    created_at: string;
    agency: string;
}

import { v4 as uuidv4 } from 'uuid'

export async function parseRequest(dbRqr: any) {

    // set tyoe to array of log(s) or null
    let logs: Array<Post> | null = []
    interface DbJsonResponse {
        result: Array<{
            results: any;
        }>;
    }

    let dbJSON = await dbRqr.json() as DbJsonResponse
    //console.log(dbJSON)

    //console.log(dbJSON)

    if (dbJSON?.result[0]?.results) {

        logs = dbJSON?.result[0]?.results as Array<Post>
    }

    // set tyoe to array of log(s)



    return logs

}
export async function getAllPosts() {
    console.log(process.env.DB)

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${process.env.CF_API_KEY}`},
        body: `{"sql":"SELECT * FROM posts"}`,
        cache: "no-cache"
    };

    // @ts-ignore
    let dbRqr = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/d1/database/${process.env.CF_D1_ID}/query`, options)

    return await parseRequest(dbRqr)
}

export async function getPostsByUser(user_id: string) {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${process.env.CF_API_KEY}`},
        body: `{"sql":"SELECT * FROM logs WHERE author = '${user_id}'"}`,
        cache: "no-cache"
    };

    // @ts-ignore
    let dbRqr = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/d1/database/${process.env.CF_D1_ID}/query`, options)

    return await parseRequest(dbRqr)
}

export async function getPost(id: string) {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${process.env.CF_API_KEY}`},
        body: `{"sql":"SELECT * FROM posts WHERE id = '${id}'"}`,
    };

    // @ts-ignore
    let dbRqr = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/d1/database/${process.env.CF_D1_ID}/query`, options)

    return await parseRequest(dbRqr)
}

export async function createPost({author, type, description, image, agency}: Post) {
    /**
     * {
    id: string;
    author: string;
    type: string;
    tile: string;
    description: string;
    image?: string;
    created_at: string;
    agency: string;
}
     */

    let uuid = uuidv4()
    let created_at = new Date().toISOString()
    let img = null

    if (image) {
        img = JSON.stringify(image)
    }

    if (agency) {
    // empty
    } 

    // add the post to the "posts" table in the database
    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${process.env.CF_API_KEY}`},
        body: `{"sql":"INSERT INTO posts (id, author, type, title, description, image, created_at, agency) VALUES ('${uuid}', '${author}', '${type}', '${description}', ${img}, '${created_at}', '${agency}')"}`,
        cache: "no-cache"
    };

    // @ts-ignore
    let dbRqr = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/d1/database/${process.env.CF_D1_ID}/query`, options)

    return await parseRequest(dbRqr)
}