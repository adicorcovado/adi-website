export function getClientIp(request: Request): string | null {
  return (
    request.headers.get("CF-Connecting-IP") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    null
  );
}

export async function verifyTurnstileToken(
  token: string,
  remoteIp: string | null,
): Promise<boolean> {
  const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("Missing TURNSTILE_SECRET_KEY configuration.");
    return false;
  }

  const body = new URLSearchParams({ secret: secretKey, response: token });
  if (remoteIp) body.append("remoteip", remoteIp);

  try {
    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body },
    );
    const outcome = (await result.json()) as { success: boolean };
    return outcome.success;
  } catch (error) {
    console.error("Failed to verify Turnstile token:", error);
    return false;
  }
}
