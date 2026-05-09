import { json } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import type { RequestHandler } from "./$types";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const POST: RequestHandler = async ({ request }) => {
  try {
      const { email, password } = await request.json();

    // 🔹 Basic validation
    if (!email || !password) {
      return json({ error: "Email and password are required" }, { status: 400 });
    }

    // 🔹 Check if user exists
    const [users] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (!users || users?.length === 0) {
      return json({ error: "User not found" }, { status: 404 });
    }

    const user = users[0];

    // 🔹 Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return json({ error: "Invalid credentials" }, { status: 401 });
    }
    const token = jwt.sign(
      { email: email },
       "your_secret_key",  
      { expiresIn: "1d" }    
    )

    // 🔹 Success response
    return json({
      jwtToken: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (err: any) {
    return json({ error: err.message }, { status: 500 });
  }
};