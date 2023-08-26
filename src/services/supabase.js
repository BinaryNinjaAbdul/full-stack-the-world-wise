import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://fwxwctemivtysknblkxp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3eHdjdGVtaXZ0eXNrbmJsa3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3MDc2NTAsImV4cCI6MjAwODI4MzY1MH0.PVhWvVMByHtZxzHqghlALIio3_-XWObL-3HEIVJJPVY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
