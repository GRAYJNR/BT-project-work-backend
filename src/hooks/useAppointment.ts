import { supabaseClient } from "../libs/supabase-client";

const useAppointment = async () => {
  const { data: appointments } = await supabaseClient
    .from("appointments")
    .select("*");



  return {
    appointments,
  };
 
};

export default useAppointment;
