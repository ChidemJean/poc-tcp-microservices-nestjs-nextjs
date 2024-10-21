export async function blobToString(blob: Blob) {
    return await new Response(blob).text();
}