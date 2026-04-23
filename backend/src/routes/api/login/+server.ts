import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
export const POST: RequestHandler = async ({ request }) => {
    const {  email, password } = await request.json();
    return json("Login in successfully");
}