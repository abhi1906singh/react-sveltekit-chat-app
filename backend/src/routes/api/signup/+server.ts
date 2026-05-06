import { json } from '@sveltejs/kit';
import { db } from "$lib/server/db";
import type { RequestHandler } from './$types';
import bcrypt from "bcrypt";
export const POST: RequestHandler = async ({ request }) => {
    console.log(request,'=========')
    try {
    const { name, email, password, dob } = await request.json();
        // 🔹 Basic validation
    if (!name || !email || !password || !dob) {
      return json({ error: "All fields are required" }, { status: 400 });
    };
      // 🔹 Check if user already exists
    const [existing] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
      if (existing?.length > 0) {
      return json({ error: "User already exists" }, { status: 400 });
    };
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query(
        "INSERT INTO users (name, email, password,dob) VALUES (?, ?, ?,?)",
        [name, email, hashedPassword,dob]
        );
     return json({ message: "User created successfully" });
 } catch (err) {
    return json({ error: err.message }, { status: 500 });
  }
}