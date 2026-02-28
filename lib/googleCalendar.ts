import { eventDetails } from '../app/data/eventsDetails';

export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  location: string;
  link: string;
  description: string;
  image: string;
}

export async function getEvents(): Promise<CalendarEvent[]> {
  const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
  const CAL_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;

  const url = `https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 0 }
    });

    if (!res.ok) throw new Error(`Failed to fetch events: ${res.statusText}`);

    const data = await res.json();
    if (!data.items) return [];

    console.log("=== GOOGLE CALENDAR EVENT IDS ===");
    data.items.forEach((item: any) => {
      console.log(`TITLE: ${item.summary}`);
      console.log(`ID:    ${item.id}`);
      console.log("----------------------------");
    });

    return data.items.map((gEvent: any) => {
      const extra = eventDetails.find(detail => detail.id === gEvent.id);

      return {
        id: gEvent.id,
        title: gEvent.summary,
        start: gEvent.start.dateTime || gEvent.start.date,
        end: gEvent.end?.dateTime || gEvent.end?.date || "",
        location: gEvent.location || "",
        link: gEvent.htmlLink,
        description: extra?.description || gEvent.description || "",
        image: extra?.image,
      };
    });
  } catch (error) {
    console.error("Calendar API Error:", error);
    return [];
  }
}