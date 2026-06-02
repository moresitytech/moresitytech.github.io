export const API_BASE = import.meta.env.VITE_API_BASE ?? "http://localhost:5000";

export type ApiError = {
  status: number;
  message: string;
};

async function handle<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const message = await response.text().catch(() => response.statusText);
    throw { status: response.status, message } satisfies ApiError;
  }

  return (await response.json()) as T;
}

export const api = {
  get: async <T,>(path: string) => handle<T>(await fetch(`${API_BASE}${path}`, { credentials: "include" })),
  post: async <T,>(path: string, body: unknown) =>
    handle<T>(
      await fetch(`${API_BASE}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      }),
    ),
  put: async <T,>(path: string, body: unknown) =>
    handle<T>(
      await fetch(`${API_BASE}${path}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      }),
    ),
  del: async <T,>(path: string) => handle<T>(await fetch(`${API_BASE}${path}`, { method: "DELETE", credentials: "include" })),
};
