CREATE TABLE IF NOT EXISTS users (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email        VARCHAR(255) UNIQUE NOT NULL,
  username     VARCHAR(255) UNIQUE NOT NULL
  authentik_id VARCHAR(255) UNIQUE NOT NULL,
);

CREATE TABLE IF NOT EXISTS blogs (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title      VARCHAR(500) NOT NULL,
  content    TEXT NOT NULL,
  owner_id   UUID REFERENCES users(id) ON DELETE CASCADE,
  published  BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
