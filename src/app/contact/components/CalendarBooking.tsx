"use client"

export default function CalendarBooking() {
  return (
    <div className="relative h-full min-h-[520px] rounded-2xl bg-black/60 border border-white/10 overflow-hidden">
      <iframe
        src="https://meetings-na2.hubspot.com/manish-k-saini/website-lead?embed=true"
        className="w-full h-full border-0"
        loading="lazy"
        allow="camera; microphone"
      />
    </div>
  )
}

