"use server"

export type ContactState = {
  ok?: boolean
  message?: string
  errors?: Partial<Record<"name" | "email" | "phone" | "eventType" | "message", string>>
}

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

function isValidPhone(s: string) {
  // Indian phone number validation (10 digits, optional +91)
  return /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(s.replace(/[\s\-]/g, ''))
}

export async function sendContact(_: ContactState, formData: FormData): Promise<ContactState> {
  // Simple server-side validation
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const phone = String(formData.get("phone") || "").trim()
  const eventType = String(formData.get("eventType") || "").trim()
  const eventDate = String(formData.get("eventDate") || "").trim()
  const budget = String(formData.get("budget") || "").trim()
  const message = String(formData.get("message") || "").trim()
  const company = String(formData.get("company") || "").trim() // honeypot

  const errors: ContactState["errors"] = {}
  if (!name) errors.name = "Please enter your name."
  if (!email || !isEmail(email)) errors.email = "Please enter a valid email."
  if (!phone || !isValidPhone(phone)) errors.phone = "Please enter a valid phone number."
  if (!eventType) errors.eventType = "Please select an event type."
  if (!message || message.length < 10) errors.message = "Please describe your event vision (at least 10 characters)."
  if (budget && isNaN(Number(budget))) errors.message = "Please enter a valid budget amount."
  if (eventDate) {
    const date = new Date(eventDate)  
    if (isNaN(date.getTime())) {
      errors.message = "Please enter a valid event date."
    }
  }

  // Honeypot: if filled, treat as spam
  if (company) {
    return { ok: true, message: "Thanks for reaching out to Revaa! We'll be in touch shortly." }
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Please fix the errors and try again.", errors }
  }

  // Simulate processing (e.g., send email, write to DB)
  await new Promise((r) => setTimeout(r, 800))

  // Return success
  return {
    ok: true,
    message: "Thanks for reaching out to Revaa! We've received your event inquiry and will get back to you within 4 hours with a personalized proposal.",
  }
  }
