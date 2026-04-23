import { NextRequest, NextResponse } from "next/server";

import { JWTPayload, verifyToken } from "./auth";

type AuthenticatedHandler = (
  req: NextRequest,
  user: JWTPayload,
  context?: any
) => Promise<NextResponse>;

export function withAuth(handler: AuthenticatedHandler) {
  return async (req: NextRequest, context?: any) => {
    try {
      const token = req.cookies.get("token")?.value;

      if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const user = verifyToken(token);
      return handler(req, user, context);
    } catch {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }
  };
}
