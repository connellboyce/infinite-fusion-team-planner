import { name, version, description } from '../../../package.json';

export async function GET() {
    const data = {
        app: {
            name: name,
            version: version,
            description: description,
        },
        git: {
            branch: "",
            commit: {
                id: "",
                time: "",
            },
        },
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}