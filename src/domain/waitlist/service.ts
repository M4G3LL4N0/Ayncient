export interface WaitlistInput {
  email: string;
  name?: string;
  source?: string;
}

export async function saveWaitlistEntry(input: WaitlistInput) {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    let message = "Failed to save waitlist entry.";
    try {
      const data = await response.json();
      if (data?.error) message = data.error;
    } catch {}
    throw new Error(message);
  }

  return response.json();
}

export async function addToWaitlist(input: WaitlistInput) {
  return saveWaitlistEntry(input);
}
