export async function GET() {
  return new Response(JSON.stringify({ darkMode: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}