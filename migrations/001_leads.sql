create table if not exists leads (
  id bigserial primary key,
  name text not null,
  whatsapp text not null,
  email text not null,
  interest text not null,
  created_at timestamptz not null default now()
);
