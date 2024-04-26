// import { createSupabaseServerClient } from "@supabase/supabase-js";
// export async function GET(request) {
//   const url = new URL(request.url);
//   const searchParams = url.searchParams;
//   const origin = url.origin;

//   const code = searchParams.get("code");

//   // if "next" is in param, use it in the redirect URL
//   const next = searchParams.get("next") || "/";

//   if (code) {
//     const supabase = await createSupabaseServerClient(request);

//     const { error } = await supabase.auth.exchangeCodeForSession(code);

//     if (!error) {
//       return new Response(null, {
//         status: 302,
//         headers: {
//           Location: `${origin}${next}`,
//         },
//       });
//     }
//   }

//   // TODO: Create this page
//   // return the user to an error page with instructions
//   return new Response(null, {
//     status: 302,
//     headers: {
//       Location: `${origin}/auth/auth-error`,
//     },
//   });
// }
