
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uoxmgjjucvfehatkvxyx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVveG1namp1Y3ZmZWhhdGt2eHl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5MDE5MDUsImV4cCI6MTk5ODQ3NzkwNX0.tVTbl9qGXysfr1VZDuMF2gRZ9szxkewRzuRWFGDYW0M'

export const supabase = createClient(supabaseUrl, supabaseKey)