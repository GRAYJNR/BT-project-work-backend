import { createClient } from "@supabase/supabase-js";
import { Database } from "../@types/supabase";

const url = import.meta.env.VITE_APP_SUPABASE_URL;
const key = import.meta.env.VITE_APP_SUPABASE_KEY;

export const supabaseClient = createClient<Database>(url, key);
