// middleware.ts

// https://youtu.be/Fx8c3dQD_TI?si=ykuBI14UzTCftoPB - use this for adding the middleware value
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export { auth as middleware } from "@/auth";
