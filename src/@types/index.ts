import { Database } from "./supabase";

export type IAppointment = Database["public"]["Tables"]["appointments"]["Row"];
