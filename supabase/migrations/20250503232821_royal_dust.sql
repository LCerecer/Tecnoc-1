/*
  # Create forms table for contact submissions

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `company` (text)
      - `email` (text)
      - `message` (text)
      - `phone` (text)
      - `created_at` (timestamp)
      - `form_type` (text) - To identify which form was used
  
  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy for inserting data
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  message text,
  phone text,
  created_at timestamptz DEFAULT now(),
  form_type text NOT NULL
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert access for all users" ON form_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON form_submissions
  FOR SELECT
  TO public
  USING (true);