import { redirect } from 'next/navigation'
export async function GET(request: Request) {redirect('/')}
// Redirect to the root of the site if the user tries to access this route, as it is not meant to be accessed directly.