export async function GET(request: Request, { params }) {
  console.log("API-GET");
  return Response.json({
    name: "next-api-sandbox",
  });
}
