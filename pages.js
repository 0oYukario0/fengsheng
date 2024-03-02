export default {
  async fetch(request, env, ctx) {
    const jsonContent = {
      version: "2.1.302",
      ip: "34.92.65.60",
      season: "一",
      start: "12345678901",
      end: "23456789012"
    };
    return new Response(JSON.stringify(jsonContent, null, 2), {
      headers: { "Content-Type": "application/json" }
    });
  },
};
