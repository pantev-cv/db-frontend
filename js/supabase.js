// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/supabase.js';

const SUPABASE_URL = window.__env?.NEXT_PUBLIC_SUPABASE_URL || '<YOUR_SUPABASE_URL>';
const SUPABASE_ANON_KEY = window.__env?.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0cm9rYXFoZ3VwdWJyb2ZubmR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0Mjk5OTYsImV4cCI6MjA4MDAwNTk5Nn0.JZ11fSKeObYIH-Z3Rt2S8dcS4gIN9jmUp7sMRdcUwko';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
