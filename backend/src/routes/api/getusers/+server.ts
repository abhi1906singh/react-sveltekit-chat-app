import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import { db } from "$lib/server/db";
export const GET: RequestHandler = async () => {
    try {
            const [users] = await db.query(
      "SELECT id, name, email, dob FROM users"
        );
        console.log(users)
     return json({
      message: "Users fetched successfully",
      users
    });
    }catch (err: any) {
    return json({ error: err.message }, { status: 500 });
  }

 }